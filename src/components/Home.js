import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
  const year = new Date().getFullYear();

  return (
    <Container>
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-s.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Model Y"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-y.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Model 3"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-3.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Model X"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-x.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Solar Panels"
        description="Lowest Cost Solar Panels in America"
        backgroundImg="solar-panel.jpg"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
      />
      <Section
        title="Solar Roof"
        description="Produce Clean Energy From Your Roof"
        backgroundImg="solar-roof.jpg"
        leftBtnText="Shop Now"
        rightBtnText="Learn More"
      />
      <LastSection>
        <Section
          title="Accessories"
          description=""
          backgroundImg="accessories.jpg"
          leftBtnText="Shop Now"
          rightBtnText=""
        />
        <Footer>
          Demonstration only. Not Affiliated with Tesla. Copyright ⓒ Jason
          Nembhard {year}
        </Footer>
      </LastSection>
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  overflow-x: hidden;
`;

const Footer = styled.div`
  position: absolute;
  bottom: 0px;
  display: block;
  width: 100%;
  background: white;
  z-index: 9;
  text-align: center;
  color: gray;
  padding: 4px 0 4px 0;
`;

const LastSection = styled.div`
  position: relative;
  z-index: 100;
`;
