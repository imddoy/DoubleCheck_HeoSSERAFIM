import { React, useState, useEffect } from "react";
import { styled, css } from "styled-components";
import axios from "axios";
import List from "./List";
import search from "../../img/search.png";
import searchW from "../../img/searchW.png";
import { Main, Img, Input, InputBox, Section } from "./../Check/CheckStyle";

function SearchPC() {
  const [isClicked, setIsClicked] = useState(false);
  const [imgSrc, setImgSrc] = useState(search);
  const [searchQuery, setSearchQuery] = useState("");

  function handleClick() {
    setIsClicked(true);
    setImgSrc(searchW);
  }

  function handleImageClick() {
    if (searchQuery) {
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

export default SearchPC;
