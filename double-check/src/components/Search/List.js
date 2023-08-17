import React, { useEffect, useState } from "react";
import {
  ListImg,
  ListImgBox,
  Percent,
  TDiv,
  Title,
} from "./../Trends/TrendsStyle";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

function List() {
  const { keyword } = useParams();
  const [datas, setDatas] = useState([]);
  const [verifys, setVerifys] = useState([]);

  useEffect(() => {
    getDatas();
    getVerify();
  }, [keyword]);

  useEffect(() => {
    const urlMap = verifys.reduce((map, verify) => {
      map[verify.url] = verify;
      return map;
    }, {});

    const uniqueTitles = new Set(); // 중복된 title을 확인하기 위한 Set 생성
    const listItems = datas.map((item) => {
      if (!uniqueTitles.has(item.title) && urlMap[item.url]) {
        uniqueTitles.add(item.title);
        const verify = urlMap[item.url];
        return (
          <Link key={verify.id} to={`/truthcheck/${verify.id}`}>
            <ListImgBox>
              <ListImg src={item.thumbnail_url}></ListImg>
            </ListImgBox>
            <TDiv>
              <Title>{item.title}</Title>
              <Percent>
                {item.judge === "Real News" ? 100 - item.percent : item.percent}
                %
              </Percent>
            </TDiv>
          </Link>
        );
      }
      return null;
    });

    setUrlListItems(listItems);
  }, [datas, verifys]);

  const getDatas = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/search/?search=${keyword}`
      );
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

  if (keyword && datas.length === 0) {
    return <Title>아직 검증되지 않은 이슈입니다.</Title>;
  }

  return (
    <>
      <div>{urlListItems}</div>
    </>
  );
}

export default List;
