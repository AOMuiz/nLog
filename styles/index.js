import styled from "styled-components";

const sizes = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "465px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const devices = {
  mobileS: `(max-width: ${sizes.mobileS})`,
  mobileM: `(max-width: ${sizes.mobileM})`,
  mobileL: `(max-width: ${sizes.mobileL})`,
  tablet: `(max-width: ${sizes.tablet})`,
  laptop: `(max-width: ${sizes.laptop})`,
  laptopL: `(max-width: ${sizes.laptopL})`,
  desktop: `(max-width: ${sizes.desktop})`,
};

export const Layout = styled.div`
  display: grid;
  grid-template-columns: 15vw 1fr;
  /* grid-template-rows: 1fr; */

  main {
    margin-top: 1rem;
  }

  @media ${devices.tablet} {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 10vh;
    gap: 2rem;

    nav {
      grid-row: 2/-1;
      z-index: 5;
      justify-self: center;
      /* width: 70vw; */
      /* position: relative; */
      /* margin: 0 auto;*/
      display: flex;
      width: 100%;
      justify-content: center;
      align-items: center;
    }

    main {
      grid-row: 1/2;
      margin-bottom: 3rem;
    }
  }
`;
