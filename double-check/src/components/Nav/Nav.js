import React from "react";
import { styled } from "styled-components";
import { Link, useNavigate } from "react-router-dom";

const ExitButton = styled.div`
  border-radius: 5px 0px 0px 5px;
  background: var(--ain, #3a42bf);
  width: 35px;
  height: 35px;
  flex-shrink: 0;
  float: right;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Linkblock = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: var(--black, #000);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 86px auto;
  gap: 50px;
`;
const List = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Button = styled.div`
  border-radius: 5px;
  background: var(--ain, #3a42bf);
  width: 80%;
  height: 44px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  margin: 0 auto;
  margin-bottom: 120px;
`;
const Footer = styled.div`
  width: 328px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  margin-top: 180px;
`;
function Nav() {
  const navigate = useNavigate();
  return (
    <>
      <ExitButton onClick={() => navigate(-1)}>
        <img src="./x.png" />
      </ExitButton>
      <Linkblock>
        <Link to="/check">
          <List>
            <p>허위 사실 판단기</p>
            <img src="./rightarrow.png"></img>
          </List>
        </Link>
        <Link to="/search">
          <List>
            <p>키워드 검색</p>
            <img src="./rightarrow.png"></img>
          </List>
        </Link>
        <Link to="/trend">
          <List>
            <p>현재 트렌드</p>
            <img src="./rightarrow.png"></img>
          </List>
        </Link>
        <Link to="/report">
          <List>
            <p>신고하기</p>
            <img src="./rightarrow.png"></img>
          </List>
        </Link>
        <Link to="/about">
          <List>
            <p>페이지 소개</p>
            <img src="./rightarrow.png"></img>
          </List>
        </Link>
      </Linkblock>
      <Button>
        <Link to="/main">홈화면으로 가기</Link>
      </Button>
    </>
  );
}

export default Nav;
