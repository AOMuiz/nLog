import styled from "styled-components";

// import { device } from "./device";

// const ProfilePage = styled.div`
//   margin: auto;
//   text-align: center;

//   @media ${device.laptop} {
//     max-width: 800px;
//   }

//   @media ${device.desktop} {
//     max-width: 1400px;
//   }
// `;

const sizes = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
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
  grid-template-rows: 1fr;
  position: absolute;
  @media ${devices.tablet} {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 10vh;
  }

  nav {
    @media ${devices.tablet} {
      grid-row: 2/-1;
      z-index: 5;
      justify-self: center;
      width: 70vw;
    }
    main {
      grid-row: 1/2;
    }
  }
`;
