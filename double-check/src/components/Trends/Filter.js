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
      {datas &&
        datas.map((item) => (
          <FilterDiv
            onClick={() => setIsSelected(!isSelected)}
            data={item}
            id={item.index}
          >
            {item}
          </FilterDiv>
        ))}
    </FilterBox>
  );
}

export default Filter;
