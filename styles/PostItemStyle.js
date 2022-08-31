import styled from "styled-components";
import { devices } from ".";

export const PostStyle = styled.div`
  margin: 1.5rem 3rem;
  @media ${devices.mobileL} {
    margin-inline: 1.7rem;
  }
  section {
    color: var(--default);
  }
  article {
    display: grid;
    grid-template-columns: 4rem 1fr;
    gap: 2rem;
    @media ${devices.mobileL} {
      grid-template-columns: 1fr;
      gap: 0.5rem;
    }
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
  @media ${devices.mobileL} {
    margin-left: 1rem;
  }
`;

export const PostDateContainer = styled.div`
  @media ${devices.mobileL} {
    display: flex;
    justify-content: space-between;
  }
`;

export const PostDate = styled.p`
  font-size: 2rem;
  font-weight: 600;
  text-align: right;
  line-height: 40px;
  @media ${devices.mobileL} {
    font-weight: 300;
    line-height: 20px;
    font-size: 1rem;
  }
`;

export const PostAuthor = styled.p`
  font-weight: 300;
  font-size: 1.2rem;
  position: absolute;
  transform: rotate(-90deg);
  padding: 1.2rem 2px;
  text-align: right;
  line-height: 20px;
  @media ${devices.mobileL} {
    transform: rotate(0deg);
    position: static;
    font-size: 1rem;
    padding: 0;
  }
`;

export const PostTitle = styled.p`
  font-family: var(--heading-font);
  color: var(--primary-color);
  font-style: normal;
  font-weight: 400;
  /* fluid typography */
  font-size: clamp(1.5rem, 2vw + 1rem, 3rem);
  line-height: 44px;
  cursor: pointer;

  @media ${devices.mobileL} {
    line-height: 30px;
    margin-top: 0;
  }
`;

export const PostContent = styled.h3`
  font-size: 0.9rem;
  font-weight: 400;
  /* clamp */
  position: relative;
  max-height: calc(var(--lh) * var(--max-lines));
  overflow: hidden;
  padding-right: 1rem;
  line-height: var(--lh);
  @media ${devices.mobileL} {
    padding-right: 0;
  }
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
