import BasicMeta from "../../../src/components/meta/BasicMeta";
import OpenGraphMeta from "../../../src/components/meta/OpenGraphMeta";
import TwitterCardMeta from "../../../src/components/meta/TwitterCardMeta";
import PostList from "../../../src/components/PostList";
import config from "../../../src/lib/config";
import { countPosts, listPostContent } from "../../../src/lib/posts";
import { listTags } from "../../../src/lib/tags";

export default function Page({ posts, tags, pagination, page }) {
  const url = `/posts/page/${page}`;
  const title = "All posts";
  return (
    <main>
      <BasicMeta url={url} title={title} />
      <OpenGraphMeta url={url} title={title} />
      <TwitterCardMeta url={url} title={title} />
      <PostList posts={posts} tags={tags} pagination={pagination} />
    </main>
  );
}

export const getStaticProps = async ({ params }) => {
  const page = parseInt(params.page);
  const posts = listPostContent(page, config.posts_per_page);
  const tags = listTags();
  const pagination = {
    current: page,
    pages: Math.ceil(countPosts() / config.posts_per_page),
  };
  return {
    props: {
      page,
      posts,
      tags,
      pagination,
    },
  };
};

export const getStaticPaths = async () => {
  const pages = Math.ceil(countPosts() / config.posts_per_page);
  const paths = Array.from(Array(pages - 1).keys()).map((it) => ({
    params: { page: (it + 2).toString() },
  }));
  return {
    paths: paths,
    fallback: false,
  };
};
