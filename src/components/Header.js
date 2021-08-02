import React, { useState, useRef } from "react";
import styled from "styled-components";
import { selectCars } from "../features/car/carSlice";
import { useSelector } from "react-redux";
import useScrollBlock from "./hooks/useScrollBlock";
import { useOnClickOutside } from "./hooks/useOnClickOutside";
import { Twirl as Hamburger } from "hamburger-react";

function Header(props) {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const [blockScroll, allowScroll] = useScrollBlock();

  const cars = useSelector(selectCars);

  const wrapperRef = useRef();
  useOnClickOutside(wrapperRef, () =>
    setBurgerStatus(false) ? blockScroll() : allowScroll()
  );

  return (
    <div ref={wrapperRef}>
      <Container>
        <a href="...">
          <img src="/images/logo.svg" alt="Tesla" />
        </a>
        <Menu>
          {cars &&
            cars.map((car, index) => (
              <a key={car.id} href={`#${index}`}>
                {car}
              </a>
            ))}
        </Menu>
        <RightMenu>
          <a href="...">Shop</a>
          <a href="...">Account</a>
          <RMenuWrap id="hamburger" aria-label="burger menu" role="button">
            <CustomMenu
              hideOutline={true}
              size={20}
              toggled={burgerStatus}
              toggle={setBurgerStatus}
              onToggle={(toggled) => (toggled ? allowScroll() : blockScroll())}
              aria-labelledby="hamburger"
            />
          </RMenuWrap>
        </RightMenu>

        <BurgerNav burgerStatus={burgerStatus}>
          {burgerStatus &&
            cars.map((car, index) => (
              <li>
                <a key={car.id} href={`#${index}`}>
                  {car}
                </a>
              </li>
            ))}
        </BurgerNav>
      </Container>
    </div>
  );
}
export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

const RMenuWrap = styled.div`
  z-index: 102;
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  a {
    font-weight: 600;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
  @media (max-width: 1200px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    margin-right: 10px;
    color: #181b21;
    @media (max-width: 1200px) {
      display: none;
    }
  }
`;

const CustomMenu = styled(Hamburger)`
  cursor: pointer;
  z-index: 10000;
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  width: 300px;
  z-index: 9;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: translateX(${(props) => (props.burgerStatus ? 0 : 100)}%);
  transition: transform 0.25s ease-in-out;

  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    a {
      font-weight: 600;
    }
  }
`;
