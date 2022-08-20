import config from "../src/lib/config";
import { countPosts, listPostContent } from "../src/lib/posts";
import { listTags } from "../src/lib/tags";
import PostList from "../src/components/PostList";
import BasicMeta from "../src/components/meta/BasicMeta";
import OpenGraphMeta from "../src/components/meta/OpenGraphMeta";
import TwitterCardMeta from "../src/components/meta/TwitterCardMeta";

export default function Home({ posts, tags, pagination }) {
  return (
    <div>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />
      <main>
        <div>
          {/* <div className="container">
            <h1>
              Hi, Welcome to my Digital Garden<span className="fancy">.</span>
            </h1>
            <span className="handle">@nLog-blog</span>
            <h2>
              Here i share insights about my personal and work life, and the
              in-betweens
            </h2>
          </div> */}
          <PostList posts={posts} pagination={pagination} />
        </div>
        <style jsx>{`
          .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            flex: 1 1 auto;
          }
          h1 {
            font-size: 3rem;
            line-height: 120%;
            padding: 0 1.5rem;
            margin: 1rem auto;
            /* or 91px */

            flex: none;
            order: 0;
            flex-grow: 0;

            text-align: center;
            letter-spacing: -0.03em;
            margin: 0;
            font-weight: 500;
            background: linear-gradient(97.1deg, #c41740 4.8%, #ea9c28 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;
          }
          h2 {
            font-size: 1.75rem;
            font-weight: 400;
            line-height: 1.25;
            flex: none;
            order: 1;
            flex-grow: 0;
            line-height: 150%;
            /* or 42px */

            text-align: center;

            /* Gray/600 */

            color: #475467;
          }
          .fancy {
            color: #15847d;
          }
          .handle {
            display: inline-block;
            margin-top: 0.275em;
            color: #9b9b9b;
            letter-spacing: 0.05em;
          }

          @media (min-width: 769px) {
            h1 {
              font-size: 3rem;
            }
            h2 {
              font-size: 2.25rem;
            }
          }
        `}</style>
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
