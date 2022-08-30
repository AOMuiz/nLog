import React from "react";
import Link from "next/link";
import styles from "../../public/styles/content.module.css";
import Author from "./Author";
import Copyright from "./Copyright";
import Date from "./Date";
import BasicMeta from "./meta/BasicMeta";
import JsonLdMeta from "./meta/JsonLdMeta";
import OpenGraphMeta from "./meta/OpenGraphMeta";
import TwitterCardMeta from "./meta/TwitterCardMeta";
import { devices } from "../../styles";
import { getAuthor } from "../lib/authors";
import { PostTagStyle } from "../../styles/PostItemStyle";
import { Layout } from "../../styles";
import { getTag } from "../lib/tags";

export default function PostLayout({
  title,
  date,
  slug,
  author,
  tags,
  description = "",
  children,
}) {
  const keywords = tags.map((it) => getTag(it).name);
  // const authorName = getAuthor(author).name;
  return (
    <>
      <div className={"container"}>
        <BasicMeta
          url={`/posts/${slug}`}
          title={title}
          keywords={keywords}
          description={description}
        />
        <TwitterCardMeta
          url={`/posts/${slug}`}
          title={title}
          description={description}
        />
        <OpenGraphMeta
          url={`/posts/${slug}`}
          title={title}
          description={description}
        />
        <JsonLdMeta
          url={`/posts/${slug}`}
          title={title}
          keywords={keywords}
          date={date}
          // author={authorName}
          description={description}
        />

        <article>
          <header className={"artHeader"}>
            <h1>{title}</h1>
            <div className={"metadata"}>
              <div>
                <Date date={date} />
              </div>
              <div>
                <Author author={author} />
              </div>
              {/* <div>
                <Author author={getAuthor(author)} />
              </div> */}
            </div>
          </header>
          <section>
            <div className={styles.content}>{children}</div>
          </section>
          <PostTagStyle className={"tag-list"}>
            {tags.map((tagIt, i) => {
              let tag = getTag(tagIt);
              return (
                <Link
                  key={i}
                  href={"/posts/tags/[[...slug]]"}
                  as={`/posts/tags/${tag?.slug}`}
                >
                  <li>#{tag?.name}</li>
                </Link>
              );
            })}
          </PostTagStyle>
        </article>
      </div>

      <style jsx>
        {`
          .container {
            max-width: 43rem;
            width: 100%;
            margin: 0 auto;
            padding: 0 2rem;
            box-sizing: border-box;
            z-index: 0;
          }
          @media ${devices.tablet} {
            .container {
              max-width: 33rem;
              padding: 0 1.5rem;
            }
          }
          .artHeader {
            border-bottom: 1.5px solid #6a737d;
          }
          @media ${devices.mobileL} {
            .container {
              max-width: 25rem;
              padding: 0 1rem;
            }
          }
          .metadata div {
            // display: inline-block;
            margin-right: 0.5rem;
          }
          article {
            flex: 1 0 auto;
          }
          h1 {
            margin: 0 0 0.5rem;
            font-size: 2.25rem;
            color: var(--primary-color);
            font-family: var(--heading-font);
            font-weight: 400;
            font-size: 2rem;
          }
          .tag-list {
            list-style: none;
            text-align: right;
            margin: 1.75rem 0 0 0;
            padding: 0;
            justify-content: flex-end;
          }
          .tag-list li {
            display: inline-block;
            margin-left: 0.5rem;
          }
          .social-list {
            margin-top: 3rem;
            text-align: center;
          }
        `}
      </style>
      <style global jsx>
        {`
          .rehype-code-title {
            border-top-left-radius: 0.25rem;
            border-top-right-radius: 0.25rem;
            margin-top: 0.5rem;
            --tw-bg-opacity: 1;
            background-color: #393239;
            // background-color: rgb(64 64 64 / var(--tw-bg-opacity));
            padding: 0.75rem 1.25rem;
            font-family: Monaco, Consolas, monospace;
            font-size: 0.875rem;
            line-height: 1.25rem;
            font-weight: 700;
            --tw-text-opacity: 1;
            color: rgb(229 229 229 / var(--tw-text-opacity));
          }

          .content_content__ymYdh {
            color: var(--default);
          }

          .content_content__ymYdh blockquote::before {
            color: #22863a;
          }

          /* Syntax highlighting */
          .token.comment,
          .token.prolog,
          .token.doctype,
          .token.cdata,
          .token.plain-text {
            color: #6a737d;
          }

          .token.atrule,
          .token.attr-value,
          .token.keyword,
          .token.operator {
            color: #d73a49;
          }

          .token.property,
          .token.tag,
          .token.boolean,
          .token.number,
          .token.constant,
          .token.symbol,
          .token.deleted {
            color: #22863a;
          }

          .token.selector,
          .token.attr-name,
          .token.string,
          .token.char,
          .token.builtin,
          .token.inserted {
            color: #032f62;
          }

          .token.function,
          .token.class-name {
            color: #6f42c1;
          }

          //  /*
          //  * Hopscotch
          //  * by Jan T. Sott
          //  * https://github.com/idleberg/Hopscotch
          //  *
          //  * This work is licensed under the Creative Commons CC0 1.0 Universal License
          //  */

          code[class*="language-"],
          pre[class*="language-"] {
            font-family: "Fira Mono", Menlo, Monaco, "Lucida Console",
              "Courier New", Courier, monospace;
            font-size: 1rem;
            line-height: 1.375;
            direction: ltr;
            text-align: left;
            word-spacing: normal;

            -moz-tab-size: 4;
            -o-tab-size: 4;
            tab-size: 4;

            -webkit-hyphens: none;
            -moz-hyphens: none;
            -ms-hyphens: none;
            hyphens: none;
            white-space: pre;
            white-space: pre-wrap;
            word-break: break-all;
            word-wrap: break-word;
            background: #322931;
            color: #b9b5b8;
          }

          pre > code[class*="language-"] {
            font-size: 1em;
          }

          /* Code blocks */
          pre[class*="language-"] {
            padding: 1em;
            margin: 0.2em 0;
            overflow: auto;
          }

          /* Inline code */
          :not(pre) > code[class*="language-"] {
            padding: 0.1em;
            border-radius: 0.3em;
          }

          .token.comment,
          .token.prolog,
          .token.doctype,
          .token.cdata {
            color: #797379;
          }

          .token.punctuation {
            color: #b9b5b8;
          }

          .namespace {
            opacity: 0.7;
          }

          .token.null,
          .token.operator,
          .token.boolean,
          .token.number {
            color: #fd8b19;
          }

          .token.property {
            color: #fdcc59;
          }

          .token.tag {
            color: #1290bf;
          }

          .token.string {
            color: #149b93;
          }

          .token.selector {
            color: #c85e7c;
          }

          .token.attr-name {
            color: #fd8b19;
          }

          .token.entity,
          .token.url,
          .language-css .token.string,
          .style .token.string {
            color: #149b93;
          }

          .token.attr-value,
          .token.keyword,
          .token.control,
          .token.directive,
          .token.unit {
            color: #8fc13e;
          }

          .token.statement,
          .token.regex,
          .token.atrule {
            color: #149b93;
          }

          .token.placeholder,
          .token.variable {
            color: #1290bf;
          }

          .token.important {
            color: #dd464c;
            font-weight: bold;
          }

          .token.entity {
            cursor: help;
          }

          pre > code.highlight {
            outline: 0.4em solid red;
            outline-offset: 0.4em;
          }

          //hubscothch theme end

          /* language-specific */

          /* JSX */
          .language-jsx .token.punctuation,
          .language-jsx .token.tag .token.punctuation,
          .language-jsx .token.tag .token.script,
          .language-jsx .token.plain-text {
            color: #24292e;
          }

          .language-jsx .token.tag .token.attr-name {
            color: #6f42c1;
          }

          .language-jsx .token.tag .token.class-name {
            color: #005cc5;
          }

          .language-jsx .token.tag .token.script-punctuation,
          .language-jsx .token.attr-value .token.punctuation:first-child {
            color: #d73a49;
          }

          .language-jsx .token.attr-value {
            color: #032f62;
          }

          .language-jsx span[class="comment"] {
            color: pink;
          }

          /* HTML */
          // .language-html .token.tag .token.punctuation {
          //   color: #24292e;
          // }

          .language-html .token.tag .token.attr-name {
            color: #6f42c1;
          }

          .language-html .token.tag .token.attr-value,
          .language-html
            .token.tag
            .token.attr-value
            .token.punctuation:not(:first-child) {
            color: #032f62;
          }

          /* CSS */
          .language-css .token.selector {
            color: #6f42c1;
          }

          .language-css .token.property {
            color: #005cc5;
          }
        `}
      </style>
    </>
  );
}
