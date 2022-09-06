import { React, useState, useEffect } from "react";
import styled from "styled-components";
// Bar Styled Component
const Bar = styled.div`
  z-index: 5;
  position: fixed;
  height: 6px;
  border-radius: 0px 2px 0px 0px;
  background: linear-gradient(
    90deg,
    rgba(109, 227, 219, 1) 0%,
    rgba(132, 115, 177, 1) 100%,
    rgba(3, 9, 112, 1) 100%
  );
`;
function ReadingBar() {
  //Width State
  const [width, setWidth] = useState(0);

  //useEffect to control the component lifecycle
  useEffect(() => {
    window.addEventListener("scroll", scrollHeight);
    return () => window.removeEventListener("scroll", scrollHeight);
  });

  // scroll function
  const scrollHeight = () => {
    // document.documentElement;
    let el = document.getElementById("container"),
      ScrollTop = el.scrollTop || document.body.scrollTop,
      ScrollHeight = el.scrollHeight || document.body.scrollHeight;
    let percent = (ScrollTop / (ScrollHeight - el.clientHeight)) * 100;
    // store percentage in state
    setWidth(percent);
  };
  return <Bar style={{ width: width + "%" }}></Bar>;
}
export default ReadingBar;
