import React, { useState, useEffect } from "react";
import { FilterBox, FilterBox2, FilterDiv } from "./TrendsStyle";
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
  const halfIndex = Math.ceil(datas.length / 2);

  const firstHalfData = datas.slice(0, halfIndex);
  const secondHalfData = datas.slice(halfIndex);
  return (
    <>
      <FilterBox>
        {datas &&
          firstHalfData.map((item) => (
            <FilterDiv onClick={() => setIsSelected(!isSelected)}>
              {item}
            </FilterDiv>
          ))}
      </FilterBox>

      <FilterBox2>
        {datas &&
          secondHalfData.map((item) => (
            <FilterDiv onClick={() => setIsSelected(!isSelected)}>
              {item}
            </FilterDiv>
          ))}{" "}
      </FilterBox2>
    </>
  );
}

export default Filter;
