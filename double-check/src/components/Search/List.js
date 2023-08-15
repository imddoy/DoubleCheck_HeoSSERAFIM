import { React, useEffect, useState } from "react";
import { ListImg, Percent, TDiv, Title } from "./../Trends/TrendsStyle";
import axios from "axios";
import { useParams } from "react-router-dom";

function List() {
  const { keyword } = useParams();
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    getDatas();
  }, [keyword]);

  const getDatas = async () => {
    await axios
      .get(`http://127.0.0.1:8000/search/?search=${keyword}`)
      .then((response) => {
        setDatas(response.data);
        console.log("성공");
        console.log(datas);
      })
      .catch((error) => {
        console.log("리스트 실패", error.message);
      });
  };
  const list = [];
  if (keyword && datas.length === 0) {
    return <Title>아직 검증되지 않은 이슈입니다.</Title>;
  }
  return (
    <>
      <div>
        {datas &&
          datas.map((item) => {
            if (!list.includes(item.title)) {
              list.push(item.title);
              return (
                <div>
                  <ListImg src={item.thumbnail_url}></ListImg>
                  <TDiv>
                    <Title>{item.title}</Title>
                    <Percent>{item.percent}%</Percent>
                  </TDiv>
                </div>
              );
            }
          })}
      </div>
    </>
  );
}

export default List;
