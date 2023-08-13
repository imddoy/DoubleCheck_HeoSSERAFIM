import React, { useState, useEffect } from "react";
import { FilterBox, FilterDiv } from "./TrendsStyle";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function Filter() {
  const { id } = useParams();
  const [isSelected, setIsSelected] = useState(null);
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    getDatas();
  }, [id]);

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
  let cnt = 0;
  if (id) {
  }
  return (
    <FilterBox>
      {datas &&
        datas.map((item, index) => {
          cnt++;
          return (
            <Link to={`/trend/${cnt}`}>
              <FilterDiv
                onClick={() => setIsSelected(!isSelected)}
                style={{
                  backgroundColor:
                    id && id == index + 1 && isSelected ? "white" : "",
                  color: id && id == index + 1 && isSelected ? "#3a42bf" : "",
                }}
                id={index + 1}
              >
                {item}
              </FilterDiv>
            </Link>
          );
        })}
    </FilterBox>
  );
}

export default Filter;
