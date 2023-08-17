import React, { useState, useEffect } from "react";
import styled from "styled-components";
import progress from "../../img/ProgressBar.png";
import ProgressBar from "./ProgressBar";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ListImg, ListImgBox } from "../Trends/TrendsStyle";

const Div = styled.div`
  width: 100%;
`;

const DTitle = styled.div`
  color: #000;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;

  @media screen and (max-width: 400px) {
    white-space: pre-line; // 줄바꿈을 적용하기 위한 속성
    line-height: normal;
  }
`;

const DBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  @media screen and (max-width: 1275px) {
    flex-direction: column;
    align-items: flex-start;
  }
  @media screen and (max-width: 440px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const PTitle = styled.div`
  color: #3a42bf;
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: baseline;
  gap: 5px;
  margin-bottom: 7px;
  margin-top: 22px;

  @media screen and (min-width: 1276px) {
    justify-content: flex-end;
  }
`;

const Ptext = styled.div`
  color: #3a42bf;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
`;

const ThImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin-top: 24px;
  margin-bottom: 16px;
`;

const DImage = styled.img`
  width: 342px;
  height: auto;
  border-radius: 10px;
`;

const ThTitle = styled.div`
  color: #3a42bf;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px; /* 133.333% */
  margin-bottom: 15px;
`;

const TextTitle = styled.div`
  color: #3a42bf;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 15px;
`;

const TextDetail = styled.div`
  width: 100%;
  color: #000;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 50px;
`;

const PBox = styled.div`
  @media screen and (max-width: 400px) {
    width: 100%;
  }
`;

const ResultDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [completed, setCompleted] = useState(0);
  const [match, setMatch] = useState({});

  useEffect(() => {
    setInterval(() => setCompleted(Math.floor(Math.random() * 100) + 1), 2000);
  }, []);

  useEffect(() => {
    // Fetch the data from the API when the component mounts
    if (!id) {
      getData();
    } else {
      getMatch();
    }
  }, []);
  const getData = async () => {
    await axios
      .get("http://127.0.0.1:8000/verify/")
      .then((response) => {
        setData(response.data[0]); // Assuming the latest data is the first in the list
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching the data", error);
      });
  };
  const getMatch = async () => {
    await axios
      .get(`http://127.0.0.1:8000/search/${id}`)
      .then((response) => {
        setMatch(response.data); // Assuming the latest data is the first in the list
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching the data", error);
      });
  };
  if (!id) {
    return (
      <Div>
        <DBox>
          <DTitle>{`허위 사실 여부를\n판단하였습니다`}</DTitle>
          <PBox>
            <PTitle>
              {data.judge === "Real News" ? 100 - data.percent : data.percent}%
              <Ptext>허위 뉴스</Ptext>
            </PTitle>
            {/* <DImage src={progress} /> */}
            <ProgressBar
              bgcolor={"#3a42bf"}
              completed={
                data.judge === "Real News" ? 100 - data.percent : data.percent
              }
            />
          </PBox>
        </DBox>
        <ListImgBox>
          <ListImg src={data.thumbnail_url} />
        </ListImgBox>
        <ThTitle>{data.title}</ThTitle>
        {/* <TextTitle>텍스트 분석:</TextTitle>
      <TextDetail>{data.srt}</TextDetail> */}
      </Div>
    );
  } else {
    return (
      <Div>
        <DBox>
          <DTitle>{`해당 영상의\n판단 결과입니다`}</DTitle>
          <PBox>
            <PTitle>
              {match.judge === "Real News"
                ? 100 - match.percent
                : match.percent}
              % <Ptext>허위 뉴스</Ptext>
            </PTitle>
            {/* <DImage src={progress} /> */}
            <ProgressBar bgcolor={"#3a42bf"} completed={match.percent} />
          </PBox>
        </DBox>
        <ListImgBox>
          <ListImg src={match.thumbnail_url} />
        </ListImgBox>
        <ThTitle>{match.title}</ThTitle>
        {/* <TextTitle>텍스트 분석:</TextTitle>
      <TextDetail>{data.srt}</TextDetail> */}
      </Div>
    );
  }
};

export default ResultDetail;
