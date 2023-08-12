import React, { useState, useEffect } from "react";
import { FilterBox, FilterDiv } from "./TrendsStyle";
import axios from "axios";
function Filter() {
  const [isSelected, setIsSelected] = useState(null);
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    getDatas();
  }, []);

  const getDatas = async () => {
    await axios
      .get("http://127.0.0.1:8000/trend/ ")
      .then((response) => {
        setDatas(response.data);
        console.log("성공");
        console.log(datas);
      })
      .catch((error) => {
        console.log("전체 글 불러오기 실패", error.message);
      });
  };

  return (
    <FilterBox>
      <FilterDiv onClick={() => setIsSelected(!isSelected)}>
        멋쟁이 사자처럼 덕성
      </FilterDiv>
      <FilterDiv onClick={() => setIsSelected(!isSelected)}>허세라핌</FilterDiv>
      <FilterDiv onClick={() => setIsSelected(!isSelected)}>김나리</FilterDiv>
      <FilterDiv onClick={() => setIsSelected(!isSelected)}>김채이</FilterDiv>
      <FilterDiv onClick={() => setIsSelected(!isSelected)}>김채현</FilterDiv>
      <FilterDiv onClick={() => setIsSelected(!isSelected)}>노하림</FilterDiv>
      <FilterDiv onClick={() => setIsSelected(!isSelected)}>이서진</FilterDiv>
      <FilterDiv onClick={() => setIsSelected(!isSelected)}>허은</FilterDiv>
    </FilterBox>
  );
}

export default Filter;
