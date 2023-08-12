import React from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import FilterPhone from "./../Trends/FilterMobile";

const Main = styled.div`
  padding: 1em 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
const Section = styled.div`
  width: 100%;
  margin-bottom: 50px;
  color: var(--black, #000);

  font-family: Pretendard;
  font-size: 1em;
  font-weight: 700;
  line-height: normal;
`;
const Input = styled.div`
  width: 100%;
  height: 44px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid var(--ain, #3a42bf);
  margin: 22px 0;
  color: var(--ain, #3a42bf);

  font-family: Pretendard;
  font-size: 0.7em;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 20px;
  box-shadow: 0px 8px 25px 0px rgba(13, 10, 44, 0.06);
`;

function MainPhone() {
  return (
    <Main>
      <img src="./main.png" alt="main" />
      <Section>
        <p>사실 여부를 판단하고자 하는 </p>
        <p>미디어의 링크를 붙여 넣어 주세요</p>
        <Input>
          <p>링크를 입력하세요</p>
        </Input>
      </Section>
      <Section>
        <p>이미 검증된 허위 뉴스를 찾아 보세요</p>
        <Link to="/search">
          <Input>
            <p>찾고자 하는 이슈의 키워드를 입력하세요</p>
            <img src="./search.png" />
          </Input>
        </Link>
      </Section>
      <Section>
        <p style={{ margin: "22px 0" }}>현재 가장 많이 분석되고 있어요</p>
        <FilterPhone />
      </Section>
    </Main>
  );
}

export default MainPhone;
