import InstagramEmbed from "react-instagram-embed";
import YouTube from "react-youtube";
import { TwitterTweetEmbed } from "react-twitter-embed";
import CodeBlock from "./CodeBlock";
import Image from "./Image";
import CustomLink from "./Link";

const mdxComponents = {
  InstagramEmbed,
  YouTube,
  TwitterTweetEmbed,
  pre: CodeBlock,
  a: CustomLink,
  // img: Image,
  pre: CodeBlock,
};

export default mdxComponents;
