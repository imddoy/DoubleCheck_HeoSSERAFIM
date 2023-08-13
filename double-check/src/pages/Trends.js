import React, { useEffect, useState } from "react";
import Filter from "../components/Trends/Filter";
import { Div, Fdiv } from "../components/Fakenews/FakenewsStyle";
import List from "../components/Trends/List";
import FilterMobile from "../components/Trends/FilterMobile";

function Trends() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [selectedItemId, setSelectedItemId] = useState(null);
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
  }, []);

  const handleFilterDivClick = (id) => {
    setSelectedItemId(id);
  };
  return (
    <Div>
      <Fdiv>현재 가장 많이 분석되고 있어요</Fdiv>
      {windowWidth <= 615 ? (
        <FilterMobile />
      ) : (
        <Filter onFilterDivClick={handleFilterDivClick} />
      )}
      <List selectedItemId={selectedItemId} />
    </Div>
  );
}

export default Trends;
