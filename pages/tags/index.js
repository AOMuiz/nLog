import React from "react";

import BasicMeta from "../../src/components/meta/BasicMeta";
import OpenGraphMeta from "../../src/components/meta/OpenGraphMeta";
import TwitterCardMeta from "../../src/components/meta/TwitterCardMeta";
import TagLink from "../../src/components/TagLink";
import { getTag, listTags } from "../../src/lib/tags";

const Index = ({ tags, postCount }) => {
  const url = `/tags/`;
  const title = "All Tags";
  console.log({ tags, postCount });

  return (
    <div>
      <BasicMeta url={url} title={title} />
      <OpenGraphMeta url={url} title={title} />
      <TwitterCardMeta url={url} title={title} />
      <main>
        <div className="tagsList">
          <h1>Tags</h1>
          <div className="tagContainer">
            {tags.map((tag) => (
              <TagLink tag={tag} key={tag.slug} />
            ))}
          </div>
        </div>
      </main>
      <style jsx>
        {`
          .tagsList {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            margin: 0 auto;
            padding: 1rem 4rem;
            height: 100%;
          }
          .tagContainer {
            font-size: 1.7rem;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
          }
          h1 {
            color: var(--primary-color);
          }
        `}
      </style>
    </div>
  );
};

export default Index;

export const getStaticProps = async () => {
  const tags = listTags();
  console.log(tags);
  // let singleTag = tags.map((tag) => tag);
  // const postCount = countPosts(singleTag.slug);
  const props = { tags };
  return {
    props,
  };
};
