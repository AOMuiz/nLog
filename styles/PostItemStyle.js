import styled from "styled-components";
import { devices } from ".";

export const PostStyle = styled.div`
  margin: 1.5rem 3rem;
  section {
    color: var(--default);
  }
  article {
    display: grid;
    grid-template-columns: 4rem 1fr;
    gap: 2rem;
  }
`;

export const SectionNavStyle = styled.h3`
  margin-left: 3rem;
  font-size: 1.3rem;
  color: var(--default);
  line-height: 1.5rem;
  border-top: 2px solid var(--primary-color);
  font-weight: 400;
  display: inline-block;
`;

export const PostDate = styled.p`
  font-size: 2rem;
  font-weight: 500;
  text-align: right;
  line-height: 40px;
  /* margin-bottom: 14px; */
`;

export const PostAuthor = styled.p`
  font-weight: 300;
  font-size: 1.2rem;
  transform: rotate(-90deg);
  padding: 1.5rem 2px;
  text-align: right;
  line-height: 20px;
`;

export const PostTitle = styled.p`
  font-family: var(--heading-font);
  color: var(--primary-color);
  font-style: normal;
  font-weight: 400;
  font-size: 2rem;
  line-height: 44px;
  cursor: pointer;
`;

export const PostContent = styled.h3`
  font-size: 15px;
  font-weight: 400;
  /* clamp */
  position: relative;
  max-height: calc(var(--lh) * var(--max-lines));
  overflow: hidden;
  padding-right: 1rem;
  line-height: var(--lh);
`;

export const PostTagStyle = styled.ul`
  padding-left: 0;
  list-style: none;
  display: flex;
  align-items: flex-start;

  li {
    font-size: 13px;
    line-height: 16px;
    color: var(--primary-color);
    border: 1px solid var(--primary-color);
    padding: 8px;
    border-radius: 100px;
    margin-inline: 5px;
    cursor: pointer;
  }
`;
