import React, { useEffect, useState } from "react";
import { ListImg, ListImgBox, Percent, TDiv, Title } from "./TrendsStyle";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

function List() {
  const { id } = useParams();
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    getDatas();
  }, [id]);

  useEffect(() => {
    if (datas.video_data) {
      const uniqueTitles = new Set(); // 중복된 title을 확인하기 위한 Set 생성
      const listItems = datas.video_data.map((item) => {
        if (!uniqueTitles.has(item.title)) {
          uniqueTitles.add(item.title);
          console.log(uniqueTitles);
          return (
            <Link to={`/truthcheck/${item.id}`}>
              <ListImgBox>
                <ListImg src={item.thumbnail_url}></ListImg>
              </ListImgBox>
              <TDiv>
                <Title>{item.title}</Title>
                <Percent>
                  {item.judge === "Real News"
                    ? 100 - item.percent
                    : item.percent}
                  %
                </Percent>
              </TDiv>
            </Link>
          );
        }
        return null;
      });

      setUrlListItems(listItems);
    }
  }, [datas]);

  const getDatas = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/trend/${id}`);
      setDatas(response.data);
    } catch (error) {
      console.log("리스트 실패", error.message);
    }
  };

  const [urlListItems, setUrlListItems] = useState([]);

  if (!id) {
    return <Title>트렌드를 선택해주세요</Title>;
  }
  return (
    <>
      <div>{urlListItems}</div>
    </>
  );
}

export default List;
