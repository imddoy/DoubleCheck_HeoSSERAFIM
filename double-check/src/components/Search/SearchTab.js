import { React, useState, useEffect } from "react";
import { styled, css } from "styled-components";
import { Link } from "react-router-dom";
import List from "./List";

const Main = styled.div`
  padding: 1em 6em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
const Section = styled.div`
  width: 100%;
  margin-bottom: 100px;
  color: var(--black, #000);

  font-family: Pretendard;
  font-size: 1.2em;
  font-weight: 700;
  line-height: normal;
`;
const InputBox = styled.div`
  width: 100%;
  height: 44px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid var(--ain, #3a42bf);
  margin: 22px 0;
  color: var(--ain, #3a42bf);
  ::placeholder {
    color: #3a42bf;
  }

  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 20px;
  box-shadow: 0px 8px 25px 0px rgba(13, 10, 44, 0.06);

  ${(props) =>
    props.isClicked &&
    css`
      background-color: #3a42bf;
    `}
`;
const Input = styled.input`
  border: none;
  width: 100%;
  outline: none;

  font-family: Pretendard;
  font-size: 0.7em;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  ::placeholder {
    color: #3a42bf;
  }
  background: none;
  color: #fff;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const Img = styled.img`
  width: 13px;
  cursor: pointer; /* 이미지에 마우스 포인터를 변경해 클릭 가능한 것처럼 보이게 함 */
`;
function SearchTab() {
  const [isClicked, setIsClicked] = useState(false);
  const [imgSrc, setImgSrc] = useState("./search.png");
  const [searchQuery, setSearchQuery] = useState("");
  function handleClick() {
    setIsClicked(true);
    setImgSrc("./searchW.png");
  }

  function handleImageClick() {
    if (searchQuery) {
      console.log(searchQuery);
      window.location.href = `/search/${searchQuery}`;
    }
  }

  return (
    <Main>
      <Section>
        <p>이미 검증된 허위 뉴스를 찾아 보세요</p>
        <InputBox isClicked={isClicked}>
          <Input
            placeholder="찾고자 하는 이슈의 키워드를 입력하세요"
            onClick={handleClick}
            onChange={(e) => setSearchQuery(e.target.value)}
          ></Input>
          <Img src={imgSrc} onClick={handleImageClick} />
        </InputBox>
      </Section>
      <List />
    </Main>
  );
}

export default SearchTab;
