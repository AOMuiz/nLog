import React from "react";
import {
  PostStyle,
  PostAuthor,
  PostDate,
  PostTitle,
  SectionNavStyle,
  PostContent,
  PostTagStyle,
} from "../styles/PostItemStyle";

const PostItem = () => {
  return (
    <>
      <PostStyle>
        <SectionNavStyle>Latest</SectionNavStyle>
        <section>
          <article>
            <div>
              <PostDate>23 May</PostDate>
              <PostAuthor>@aomuiz</PostAuthor>
            </div>
            <div>
              <PostTitle>
                15 Disadvantages Of Freedom And How You Can Workaround It.
              </PostTitle>
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
              <PostTagStyle>
                <li>#meditation</li>
                <li>#mentalpeace</li>
              </PostTagStyle>
            </div>
          </article>
        </section>
      </PostStyle>
      <PostStyle>
        <section>
          <article>
            <div>
              <PostDate>23 Sept</PostDate>
              <PostAuthor>@samurai</PostAuthor>
            </div>
            <div>
              <PostTitle>
                15 Disadvantages Of Freedom And How You Can Workaround It.
              </PostTitle>
              <PostContent>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse.
              </PostContent>
              <PostTagStyle>
                <li>#meditation</li>
                <li>#react native</li>
              </PostTagStyle>
            </div>
          </article>
        </section>
      </PostStyle>
    </>
  );
};

export default PostItem;
