import React, { useState, useEffect } from "react";
import { FilterBox, FilterBox2, FilterDiv } from "./TrendsStyle";
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
        console.log("트렌드 불러오기 실패", error.message);
      });
  };
  const halfIndex = Math.ceil(datas.length / 2);

  const firstHalfData = datas.slice(0, halfIndex);
  const secondHalfData = datas.slice(halfIndex);
  return (
    <>
      <FilterBox>
        {datas &&
          firstHalfData.map((item, index) => (
            <Link to={`/trend/${index + 1}`}>
              <FilterDiv
                style={{
                  backgroundColor: id && id == index + 1 ? "white" : "",
                  color: id && id == index + 1 ? "#3a42bf" : "",
                }}
                id={index + 1}
              >
                {item}
              </FilterDiv>
            </Link>
          ))}
      </FilterBox>

      <FilterBox2>
        {datas &&
          secondHalfData.map((item, index) => (
            <Link to={`/trend/${index + 5}`}>
              <FilterDiv
                style={{
                  backgroundColor: id && id == index + 5 ? "white" : "",
                  color: id && id == index + 5 ? "#3a42bf" : "",
                }}
                id={index + 1}
              >
                {item}
              </FilterDiv>
            </Link>
          ))}{" "}
      </FilterBox2>
    </>
  );
}

export default Filter;
