import styled from "styled-components";
import { devices } from ".";

export const NavContainer = styled.div`
  background-color: var(--main-bg-color);
  border-right: 1px solid var(--primary-color);
  height: 100vh;
  padding-inline: 2rem;
  position: fixed;
  top: 0;
  @media ${devices.tablet} {
    border: 1px solid var(--primary-color);
    height: fit-content;
    top: 80vh;
    bottom: 0;
    padding-inline: 1rem;
  }
`;

export const NavStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media ${devices.tablet} {
    flex-direction: row;
    justify-content: space-around;
  }
  p {
    background-color: var(--primary-color);
    width: 3rem;
    height: 3rem;
    border-radius: 1.5rem;
    font-size: 2rem;
    font-weight: 400;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    @media ${devices.tablet} {
      margin-block: 1rem;
    }
  }
  ul {
    color: var(--default);
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;
    @media ${devices.tablet} {
      flex-direction: row;
      justify-content: space-between;
    }
    li {
      margin: 20px 0px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      @media ${devices.tablet} {
        flex-direction: row;
        justify-content: space-between;
        padding-inline: 0.5rem;
      }
      @media ${devices.mobileL} {
        span {
          display: none;
        }
      }
    }
    svg {
      color: var(--primary-color);
      display: block;
      font-size: 1.5rem;
      margin: 5px;
      @media ${devices.mobileL} {
        font-size: 1.7rem;
      }
    }
  }
`;
