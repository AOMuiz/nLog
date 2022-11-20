// import renderToString from "next-mdx-remote/render-to-string";
// import hydrate from "next-mdx-remote/hydrate";
// import { rehype } from "rehype";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import matter from "gray-matter";
import fs from "fs";
import yaml from "js-yaml";
import { parseISO } from "date-fns";
import readingTime from "reading-time";

import { fetchPostContent } from "../../src/lib/posts";
import PostLayout from "../../src/components/PostLayout";

// mdx components
import mdxComponents from "../../src/components/mdx/MDXComponents";

// mdx plugins
import rehypeCodeTitles from "rehype-code-titles";
// import rehypeImagePlaceholder from "rehype-image-placeholder";
// import rehypePrism from 'rehype-prism-plus'
import rehypePrisma from "@mapbox/rehype-prism";
import remarkGfm from "remark-gfm";
import remarkHeadings from "remark-autolink-headings";
import remarkSlug from "remark-slug";
import remarkSmartypants from "@silvenon/remark-smartypants";
import remarkTableofContents from "remark-toc";
import remarkUnwrapImages from "remark-unwrap-images";

const components = mdxComponents;

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
  return (
    <div>
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
      remarkPlugins: [
        // github flavored markdown
        remarkGfm,
        // add id to headings
        remarkHeadings,
        // add links to headings
        remarkSlug,
        // smart typographic punctuation like real quotes
        remarkSmartypants,
        // generates table of contents from headings
        // `tight` removes <p> from <li> when nested
        [remarkTableofContents, { tight: true }],
        // remove paragraph around images
        remarkUnwrapImages,
      ],
      rehypePlugins: [
        rehypeCodeTitles,
        // syntax highlight
        rehypePrisma,
        // image dimensions and placeholder
        // [rehypeImagePlaceholder, { dir: "public" }],
      ],
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
