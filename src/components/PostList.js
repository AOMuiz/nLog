import React from "react";
import PostItem from "./PostItem";
import Pagination from "./Pagination";
import { PostStyle, SectionNavStyle } from "../../styles/PostItemStyle";

export default function PostList({ posts, tags, pagination }) {
  // console.log({ postList: posts });
  return (
    <>
      <SectionNavStyle>Latest</SectionNavStyle>
      <div>
        <PostStyle>
          {posts.map((it, i) => (
            <PostItem post={it} key={i} />
          ))}
        </PostStyle>
        <Pagination
          current={pagination.current}
          pages={pagination.pages}
          link={{
            href: (page) => (page === 1 ? "/posts" : "/posts/page/[page]"),
            as: (page) => (page === 1 ? null : "/posts/page/" + page),
          }}
        />
      </div>
    </>
  );
}
