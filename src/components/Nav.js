import React from "react";
import { NavStyles, NavContainer } from "../../styles/NavStyle";
import { AiOutlineTag, AiOutlineSearch } from "react-icons/ai";
import { FiTrendingUp } from "react-icons/fi";
import Link from "next/link";

const Nav = () => {
  return (
    <NavContainer>
      <NavStyles>
        <Link href={"/"}>
          <p>S</p>
        </Link>

        <ul>
          <li>
            <AiOutlineSearch />
            <span>Search</span>
          </li>
          <li>
            <FiTrendingUp />
            <span>Trending</span>
          </li>
          <li>
            <AiOutlineTag />
            <span>Tags</span>
          </li>
        </ul>
      </NavStyles>
    </NavContainer>
  );
};

export default Nav;
