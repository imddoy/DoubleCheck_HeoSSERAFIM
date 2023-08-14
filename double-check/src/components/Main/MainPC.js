import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Img,
  Input,
  Input2,
  FilterBox,
  InputBox,
  ResponsiveImage,
  Section,
} from "./MainStyle";
import search from "../../img/search.png";
import axios from "axios";
import mainImg from "../../img/main.png";
import Filter from "../Trends/Filter";
import FilterMobile from "../Trends/FilterMobile";

function MainPC() {
  const [urlData, setUrlData] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const navigate = useNavigate();

  useEffect(() => {
    // 창 크기 변경 이벤트 핸들러
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // 이벤트 핸들러를 등록
    window.addEventListener("resize", handleResize);

    // 컴포넌트 언마운트 시 이벤트 핸들러를 정리
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // 빈 배열을 넣어 이펙트가 마운트 될 때만 등록 및 정리되도록 설정

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
        // 서버 응답으로 제목과 썸네일 URL을 받아와서 state로 전달
        navigate("/truthcheck", {
          state: {
            title: response.data.title,
            thumbnailURL: response.data.thumbnail_url,
          },
        });
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
      <Section>
        <p>이미 검증된 허위 뉴스를 찾아 보세요</p>
        <Link to="/search">
          <Input2>
            <p>찾고자 하는 이슈의 키워드를 입력하세요</p>
            <img src="./search.png" />
          </Input2>
        </Link>
      </Section>
      <Section mb="100px">
        <p style={{ marginBottom: "22px" }}>현재 가장 많이 분석되고 있어요</p>
        <FilterBox>
          {windowWidth <= 680 ? <FilterMobile /> : <Filter />}
        </FilterBox>
      </Section>
    </>
  );
}

export default MainPC;
