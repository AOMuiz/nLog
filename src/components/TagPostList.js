import React from "react";
import PostItem from "./PostItem";
import Pagination from "./Pagination";
import { PostStyle, SectionNavStyle } from "../../styles/PostItemStyle";

export default function TagPostList({ posts, tag, pagination }) {
  return (
    <main>
      <SectionNavStyle>
        All posts / <span>{tag.name}</span>
      </SectionNavStyle>
      <PostStyle>
        {posts.map((it, i) => (
          <PostItem key={i} post={it} />
        ))}
      </PostStyle>

      <Pagination
        current={pagination.current}
        pages={pagination.pages}
        link={{
          href: () => "/posts/tags/[[...slug]]",
          as: (page) =>
            page === 1
              ? "/posts/tags/" + tag.slug
              : `/posts/tags/${tag.slug}/${page}`,
        }}
      />
    </main>
  );
}
