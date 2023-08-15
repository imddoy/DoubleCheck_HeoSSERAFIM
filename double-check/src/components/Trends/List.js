import React, { useEffect, useState } from "react";
import { ListImg, Percent, TDiv, Title } from "./TrendsStyle";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

function List() {
  const { id } = useParams();
  const [datas, setDatas] = useState([]);
  const [verifys, setVerifys] = useState([]);
  const [index, setIndex] = useState([]);
  const [percent, setPercent] = useState([]);
  useEffect(() => {
    getDatas();
    getVerify();
  }, [id]);

  useEffect(() => {
    if (datas.video_data && verifys.length > 0) {
      const newVerifyInfo = datas.video_data.map((item) => {
        const verify = verifys.find((verify) => verify.url === item.video_url);
        if (verify) {
          return {
            id: verify.id,
            percent: verify.percent,
          };
        }
        return null;
      });

      if (datas.video_data) {
        const uniqueTitles = new Set(); // 중복된 title을 확인하기 위한 Set 생성
        const listItems = datas.video_data.map((item) => {
          if (!uniqueTitles.has(item.title)) {
            uniqueTitles.add(item.title);
            console.log(uniqueTitles);
            verifys.map((verify) => {
              if (verify.url === item.video_url) {
                setIndex(verify.id);
                setPercent(verify.percent);
                return null;
              }
              return null;
            });
            return (
              <Link to={`/truthcheck/${index}`}>
                <ListImg src={item.thumbnail_url}></ListImg>
                <TDiv>
                  <Title>{item.title}</Title>
                  <Percent>{percent}%</Percent>
                </TDiv>
              </Link>
            );
          }
          return null;
        });

        setUrlListItems(listItems);
      }
    }
  }, [datas, verifys]);

  const getDatas = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/trend/${id}`);
      setDatas(response.data);
    } catch (error) {
      console.log("리스트 실패", error.message);
    }
  };

  const getVerify = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/search/");
      setVerifys(response.data);
    } catch (error) {
      console.log("verify 실패", error.message);
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
