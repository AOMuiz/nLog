import BasicMeta from "../../src/components/meta/BasicMeta";
import OpenGraphMeta from "../../src/components/meta/OpenGraphMeta";
import TwitterCardMeta from "../../src/components/meta/TwitterCardMeta";
import PostList from "../../src/components/PostList";
import config from "../../src/lib/config";
import { countPosts, listPostContent } from "../../src/lib/posts";
import { listTags } from "../../src/lib/tags";

export default function Index({ posts, tags, pagination }) {
  const url = "/posts";
  const title = "All posts";
  return (
    <main>
      <BasicMeta url={url} title={title} />
      <OpenGraphMeta url={url} title={title} />
      <TwitterCardMeta url={url} title={title} />
      <PostList posts={posts} tags={tags} pagination={pagination} />;
    </main>
  );
}

export const getStaticProps = async () => {
  const posts = listPostContent(1, config.posts_per_page);
  const tags = listTags();
  const pagination = {
    current: 1,
    pages: Math.ceil(countPosts() / config.posts_per_page),
  };
  return {
    props: {
      posts,
      tags,
      pagination,
    },
  };
};
