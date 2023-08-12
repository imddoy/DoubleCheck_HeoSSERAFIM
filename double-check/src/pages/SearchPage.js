import React, { useState, useEffect } from "react";
import MainPC from "../components/Search/SearchPC";
import MainTab from "../components/Search/SearchTab";
import MainPhone from "../components/Search/SearchPhone";

function MainPage() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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

  return (
    <>
      {windowWidth <= 600 ? (
        <MainPhone />
      ) : windowWidth <= 1320 ? (
        <MainTab />
      ) : (
        <MainPC />
      )}
    </>
  );
}

export default MainPage;
