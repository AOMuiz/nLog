import config from "../src/lib/config";
import { countPosts, listPostContent } from "../src/lib/posts";
import { listTags } from "../src/lib/tags";
import PostList from "../src/components/PostList";
import BasicMeta from "../src/components/meta/BasicMeta";
import OpenGraphMeta from "../src/components/meta/OpenGraphMeta";
import TwitterCardMeta from "../src/components/meta/TwitterCardMeta";

export default function Home({ posts, tags, pagination }) {
  const title = "Latest";
  return (
    <div>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />
      <main>
        <div>
          <PostList
            posts={posts}
            pagination={pagination}
            sectionTitle={title}
          />
        </div>
      </main>
      {/* <footer>Footer</footer> */}
    </div>
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
