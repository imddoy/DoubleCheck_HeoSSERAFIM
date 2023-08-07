import React from "react";
import { styled } from "styled-components";

const Navbar = styled.div`
  width: 100%;
  height: 110px;
  display: flex;
  align-items: center;
  padding: 0 49px 0 24px;
  justify-content: space-between;
`;
const Logo = styled.p`
  color: var(--ain, #3a42bf);
  font-family: Pretendard;
  font-size: 26px;
  font-weight: 700;
`;

function NavPhone() {
  return (
    <Navbar>
      <img src="/Nav.png" alt="nav" />
      <Logo>DOUBLE CHECK</Logo>
      <div></div>
    </Navbar>
  );
}

export default NavPhone;
