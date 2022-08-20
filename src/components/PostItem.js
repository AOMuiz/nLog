import React from "react";
import {
  PostStyle,
  PostAuthor,
  PostDate,
  PostTitle,
  SectionNavStyle,
  PostContent,
  PostTagStyle,
} from "../../styles/PostItemStyle";

const PostItem = ({ post }) => {
  // console.log(post.tags);
  return (
    <>
      <section>
        <article>
          <div>
            <PostDate>23 May</PostDate>
            <PostAuthor>@{post.author}</PostAuthor>
          </div>
          <div>
            <PostTitle>{post.title}</PostTitle>
            {post.summary ? (
              <PostContent>{post.summary}</PostContent>
            ) : (
              <PostContent>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum,
                ipsum dolor sit amet consectetur adipisicing elit. Cum,
                pariatur.
              </PostContent>
            )}

            <PostTagStyle>
              {post.tags.map((tag, i) => (
                <li key={i}>#{tag}</li>
              ))}
            </PostTagStyle>
          </div>
        </article>
      </section>
    </>
  );
};

export default PostItem;
