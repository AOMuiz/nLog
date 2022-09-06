// import renderToString from "next-mdx-remote/render-to-string";
// import hydrate from "next-mdx-remote/hydrate";
// import { rehype } from "rehype";
import rehypeCodeTitles from "rehype-code-titles";
import remarkGfm from "remark-gfm";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import matter from "gray-matter";
import { fetchPostContent } from "../../src/lib/posts";
import fs from "fs";
import yaml from "js-yaml";
import { parseISO } from "date-fns";
import PostLayout from "../../src/components/PostLayout";
import InstagramEmbed from "react-instagram-embed";
import YouTube from "react-youtube";
import { TwitterTweetEmbed } from "react-twitter-embed";
import rehypePrisma from "@mapbox/rehype-prism";
import readingTime from "reading-time";

const components = { InstagramEmbed, YouTube, TwitterTweetEmbed };
const slugToPostContent = ((postContents) => {
  let hash = {};
  postContents.forEach((it) => (hash[it.slug] = it));
  return hash;
})(fetchPostContent());

export default function Post({
  title,
  dateString,
  slug,
  tags,
  author,
  description = "",
  source,
  time,
}) {
  //   const content = hydrate(source, { components });
  // console.log(time);
  return (
    <div>
      <main>
        <PostLayout
          title={title}
          date={parseISO(dateString)}
          slug={slug}
          tags={tags}
          author={author}
          description={description}
          readTime={time}
        >
          <MDXRemote {...source} components={components} />
          {/* {content} */}
        </PostLayout>
      </main>
    </div>
  );
}

export const getStaticPaths = async () => {
  const paths = fetchPostContent().map((it) => "/posts/" + it.slug);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const slug = params.post;
  const source = fs.readFileSync(slugToPostContent[slug].fullPath, "utf8");
  const { content, data } = matter(source, {
    engines: { yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) },
  });
  const readTime = readingTime(source);
  const mdxSource = await serialize(content, {
    components,
    scope: data,
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeCodeTitles, rehypePrisma],
    },
  });
  return {
    props: {
      title: data.title,
      dateString: data.date,
      slug: data.slug,
      description: "",
      tags: data.tags,
      author: data.author,
      source: mdxSource,
      time: readTime,
    },
  };
};
