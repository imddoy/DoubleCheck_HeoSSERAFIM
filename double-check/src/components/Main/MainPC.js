import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Img,
  Input,
  Input2,
  InputBox,
  ResponsiveImage,
  Section,
} from "./MainStyle";
import search from "../../img/search.png";
import axios from "axios";
import mainImg from "../../img/main.png";
import Filter from "../Trends/Filter";

function MainPC() {
  const [urlData, setUrlData] = useState("");
  const [isClicked, setIsClicked] = useState(false);

  function handleClick() {
    setIsClicked(true);
  }

  const handleUrl = (e) => {
    setUrlData(e.target.value);
  };

  const postUrl = (e) => {
    e.preventDefault();

    const jsonData = JSON.stringify({ youtube_url: urlData });

    axios
      .post("http://127.0.0.1:8000/verify/", jsonData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log("작성 실패");
        console.log(error.message);
        console.log(error);
        if (error.response && error.response.data) {
          console.log(error.response.data);
        }
      });
  };

  return (
    <>
      <ResponsiveImage src={mainImg} alt="main" />
      <Section>
        <p>사실 여부를 판단하고자 하는 </p>
        <p>미디어의 링크를 붙여 넣어 주세요</p>
        <InputBox isClicked={isClicked}>
          <Input
            onChange={handleUrl}
            onClick={handleClick}
            placeholder="링크를 입력하세요"
          />
          <Img src={search} onClick={postUrl} />
        </InputBox>
      </Section>
      <Section mb="100px">
        <p>이미 검증된 허위 뉴스를 찾아 보세요</p>
        <Link to="/search">
          <Input2>
            <p>찾고자 하는 이슈의 키워드를 입력하세요</p>
            <img src="./search.png" />
          </Input2>
        </Link>
      </Section>
      <Section>
        <p style={{ margin: "22px 0" }}>현재 가장 많이 분석되고 있어요</p>
        <Filter />
      </Section>
    </>
  );
}

export default MainPC;
