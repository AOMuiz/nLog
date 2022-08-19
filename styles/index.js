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
  mobileS: `(min-width: ${sizes.mobileS})`,
  mobileM: `(min-width: ${sizes.mobileM})`,
  mobileL: `(min-width: ${sizes.mobileL})`,
  tablet: `(min-width: ${sizes.tablet})`,
  laptop: `(min-width: ${sizes.laptop})`,
  laptopL: `(min-width: ${sizes.laptopL})`,
  desktop: `(min-width: ${sizes.desktop})`,
};

export const Layout = styled.div`
  display: grid;
  grid-template-columns: 15vw 1fr;
`;
