import React, { useEffect, useState } from "react";
import { fetchPostContent, searchPost } from "../../src/lib/posts";
import { PostTitle, SectionNavStyle } from "../../styles/PostItemStyle";
import Link from "next/link";
import Fuse from "fuse.js";

const Index = ({ posts }) => {
  const [searchValue, setSearchValue] = useState("");
  const [post, setPost] = useState([]);
  const sortedSearchResults = post.sort((resultA, resultB) => {
    return resultA.score - resultB.score;
  });

  // let filteredBlogPosts = posts.filter((frontMatter) => {
  //   const searchContent = frontMatter.title;
  //   let result = searchValue.toLowerCase() === searchContent.toLowerCase();
  //   return result;
  // });

  const fuse = new Fuse(posts, {
    includeScore: true,
    minMatchCharLength: 3,
    threshold: 0.4,
    keys: ["title"],
  });

  const handleSearch = (searchValue) => {
    setSearchValue(searchValue);
    const results = fuse.search(searchValue);
    setPost(results);
  };

  // console.log({ fuse, sortedSearchResults, post });

  // useEffect(() => {
  //   setPost(filteredBlogPosts);
  // }, [searchValue]);

  return (
    <main>
      <SectionNavStyle>Search</SectionNavStyle>
      <div className="container">
        <div className="input-container">
          <input
            aria-label="Search articles"
            type="search"
            value={searchValue}
            placeholder="Search blog posts"
            onChange={(e) => handleSearch(e.target.value)}
          />
          <svg
            className="text-gray-400 dark:text-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <div>
          {!sortedSearchResults.length && (
            <p
              style={{
                color: "white",
                fontSize: "2rem",
              }}
            >
              No posts found.
            </p>
          )}
          {sortedSearchResults &&
            sortedSearchResults.map((it) => (
              <Link key={it.item.slug} href={`/posts/${it.slug}`}>
                <PostTitle>{it.item.title}</PostTitle>
              </Link>
            ))}
        </div>
        <style jsx>
          {`
            main {
              height: max-content;
            }
            .container {
              max-width: 100%;
              margin-inline: 3rem;
            }
            .input-container {
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;
              position: relative;
              width: 80%;
              margin-bottom: 10px;
            }
            svg {
              position: absolute;
              right: 0.75rem;
              top: 0.75rem;
              height: 1.25rem;
              width: 1.25rem;
              color: rgb(245 245 245/1);
            }
            input {
              padding: 0.8rem;
              border: none;
              border-radius: 0.35rem;
              width: 100%;
              color: rgb(245 245 245/1);
              background-color: rgb(23 23 23/1);
            }
          `}
        </style>
      </div>
    </main>
  );
};

export default Index;

export const getStaticProps = async () => {
  const posts = fetchPostContent();
  const srchPost = searchPost();
  // console.log(srchPost);
  return {
    props: {
      posts,
      srchPost,
    },
  };
};
