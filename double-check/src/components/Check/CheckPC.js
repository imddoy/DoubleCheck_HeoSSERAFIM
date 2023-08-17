import { React, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import search from "../../img/search.png";
import searchW from "../../img/searchW.png";
import { Main, Img, Input, InputBox, Section } from "./CheckStyle";
import List from "../Search/List";

function CheckPC() {
  const [urlData, setUrlData] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const [imgSrc, setImgSrc] = useState(search);
  const navigate = useNavigate();

  function handleClick() {
    setIsClicked(true);
    setImgSrc(searchW);
  }

  const handleUrl = (e) => {
    setUrlData(e.target.value);
  };

  const postUrl = (e) => {
    e.preventDefault();
    navigate("/truthcheck", {
      state: { youtube_url: urlData },
    });
  };

  return (
    <Main>
      <Section>
        <p>사실 여부를 판단하고자 하는 </p>
        <p>미디어의 링크를 붙여 넣어 주세요</p>
        <InputBox isClicked={isClicked}>
          <Input
            onChange={handleUrl}
            onClick={handleClick}
            placeholder="링크를 입력하세요"
          ></Input>
          <Img src={imgSrc} onClick={postUrl} />
        </InputBox>
      </Section>
    </Main>
  );
}

export default CheckPC;
