import React from "react";
import styled from "styled-components";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      Demonstration only. Not Affiliated with Tesla. Copyright ⓒ Jason Nembhard{" "}
      {year}
    </footer>
  );
}

export default Footer;

const footer = styled.div`
  position: absolute !important;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
  width: 1px;
  height: 1px;
  word-wrap: normal;
`;
