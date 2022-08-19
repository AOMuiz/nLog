import styled from "styled-components";

export const SectionNavStyle = styled.h3`
  font-size: 20px;
  color: var(--default);
  line-height: 25px;
  border-top: 2px solid var(--primary-color);
  font-weight: 400;
  display: inline-block;
`;

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

export const PostDate = styled.p`
  font-size: 2rem;
  font-weight: 500;
  text-align: right;
  line-height: 40px;
`;

export const PostAuthor = styled.p`
  font-weight: 300;
  font-size: 1rem;
  transform: rotate(-90deg);
  padding: 1.5rem 2px;
`;

export const PostTitle = styled.p`
  font-family: var(--heading-font);
  color: var(--primary-color);
  font-style: normal;
  font-weight: 400;
  font-size: 2rem;
  line-height: 44px;
  /* clamp */
  position: relative;
  max-height: calc(var(--lh) * var(--max-lines));
  overflow: hidden;
  padding-right: 1rem;
`;

export const PostContent = styled.h3`
  font-size: 15px;
  font-weight: 400;
`;

export const PostTagStyle = styled.ul`
  padding-left: 0;
  list-style: none;
  display: flex;
  align-items: flex-start;
  cursor: pointer;
  li {
    font-size: 13px;
    line-height: 16px;
    color: var(--primary-color);
    border: 1px solid var(--primary-color);
    padding: 8px;
    border-radius: 100px;
    margin-inline: 5px;
  }
`;
