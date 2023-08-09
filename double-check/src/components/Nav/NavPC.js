import React from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
const Navbar = styled.div`
  width: 100%;
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 108px;
`;
const Logo = styled.p`
  color: var(--ain, #3a42bf);
  font-family: Pretendard;
  font-size: 26px;
  font-weight: 700;
`;
const Navblock = styled.div`
  width: 787px;
  display: flex;
  justify-content: space-between;
`;
const Linkblock = styled.div`
  width: 463px;
  display: flex;
  justify-content: space-between;
  color: var(--black, #000);
  text-align: center;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const SNS = styled.div`
  width: 205.281px;
  height: 21.293px;
  flex-shrink: 0;
  display: flex;
  justify-content: space-between;
`;
function NavPC() {
  return (
    <Navbar>
      <Logo>DOUBLE CHECK</Logo>
      <Navblock>
        <Linkblock>
          <Link to="/">허위 사실 판단기</Link>
          <Link to="/trend">키워드 검색</Link>
          <Link to="/report">신고하기</Link>
        </Linkblock>
        <SNS>
          <img src="/InstarB.png" alt="instargram" />
          <img src="/TwitterB.png" alt="twitter" />
          <img src="/GithubB.png" alt="github" />
          <img src="/FacebookB.png" alt="facebook" />
        </SNS>
      </Navblock>
    </Navbar>
  );
}

export default NavPC;
