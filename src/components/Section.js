import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

function Section(props) {
  return (
    <Wrap bgImage={props.backgroundImg} alt="Tesla Pics">
      <Fade bottom>
        <ItemText>
          <h1>{props.title}</h1>
          <p>{props.description}</p>
        </ItemText>
      </Fade>
      <Buttons>
        <Fade bottom>
          <ButtonGroup>
            <LeftButton>{props.leftBtnText}</LeftButton>
            {props.rightBtnText && (
              <RightButton>{props.rightBtnText}</RightButton>
            )}
          </ButtonGroup>
        </Fade>
        <DownArrow src="images/down-arrow.svg" />
      </Buttons>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  min-width: 100vw;
  min-height: 100vh;

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  background-image: ${(props) => `url("/images/${props.bgImage}")`};
  scroll-snap-align: start;
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 720px) {
    flex-direction: column;
    position: relative;
  }
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  letter-spacing: .5px;
  border-radius: 100px;
  opacity 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
  @media (max-width: 720px){
    width: 90vw;
  }
`;

const RightButton = styled(LeftButton)`
  background: white;
  opacity: 0.65;
  color: black;
`;

const DownArrow = styled.img`
  height: 40px;
  margin-bottom: 20px;
  overflow-x: hidden;
  animation: animateDown 1.5s infinite;
  position: relative;
  @media (max-width: 720px) {
    margin-bottom: 2px;
    height: 50px;
    overflow-y: hidden;
  }
  @media (max-width: 450px) {
    height: 50px;
    margin-bottom: 102px;
    overflow-y: hidden;
  }
`;

const Buttons = styled.div``;
