import styled from "styled-components";

export const NavContainer = styled.div`
  background-color: var(--main-bg-color);
  border-right: 1px solid var(--primary-color);
  height: 100vh;
  padding-inline: 2rem;
  position: fixed;
  top: 0;
`;

export const NavStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  }
  ul {
    color: var(--default);
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* display: inline; */
    padding: 0px;
    li {
      margin: 20px 0px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    svg {
      color: var(--primary-color);
      display: block;
      font-size: 1.5rem;
      margin: 5px;
    }
  }
`;
