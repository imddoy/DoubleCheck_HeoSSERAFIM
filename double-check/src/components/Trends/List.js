import { React, useEffect, useState } from "react";
import { ListImg, Percent, TDiv, Title } from "./TrendsStyle";
import axios from "axios";
import { useParams } from "react-router-dom";

function List() {
  const { id } = useParams();
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    getDatas();
  }, [id]);

  const getDatas = async () => {
    await axios
      .get(`http://127.0.0.1:8000/trend/${id}`)
      .then((response) => {
        setDatas(response.data);
        console.log("성공");
        console.log(datas);
      })
      .catch((error) => {
        console.log("리스트 실패", error.message);
      });
  };
  if (!id) {
    return <Title>트렌드를 선택해주세요</Title>;
  }
  return (
    <>
      <div>
        {datas.video_data &&
          datas.video_data.map((item) => (
            <div>
              <ListImg src={item.thumbnail_url}></ListImg>
              <TDiv>
                <Title>{item.title}</Title>
                <Percent>70%</Percent>
              </TDiv>
            </div>
          ))}
      </div>
    </>
  );
}

export default List;
