import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import default_img from "../../img/default_image.png";
import axios from "axios";
import {
  Fdiv,
  LBtn,
  LDiv,
  LBox,
  ListSmall,
  ListBig,
  BTitle,
  BText,
  BBtn,
  BImg,
  SBox,
} from "./ReportListStyle";

function ReportList() {
  const [report, setReports] = useState([]);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/upload/")
      .then((response) => {
        setReports(response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }, []);

  return (
    <>
      <Fdiv>허위뉴스를 신고해주세요</Fdiv>
      <LDiv>
        <Link to="/fakenews">
          <LBtn>작성하기</LBtn>
        </Link>
        <LBox>
          <ListSmall>
            {report.map((event) => (
              <SBox key={event.id}>
                <BTitle>{event.title}</BTitle>
                <BText>{event.content}</BText>
                <BBtn>더보기</BBtn>
              </SBox>
            ))}
            {/* <SBox>
              <BTitle>사이버렉카 결국 수용</BTitle>
              <BText>
                어쩌구 저쩌구 콘텐츠 몇줄 미리보기 최대 세 줄까지만 가능합니다.
                테스트를 위해 겁나 많이 작성하고 있습니다 허은 최고
              </BText>
              <BBtn>더보기</BBtn>
            </SBox>
            <SBox>
              <BTitle>사이버렉카 결국 수용</BTitle>
              <BText>
                어쩌구 저쩌구 콘텐츠 몇줄 미리보기 최대 세 줄까지만 가능합니다.
                테스트를 위해 겁나 많이 작성하고 있습니다 허은 최고
              </BText>
              <BBtn>더보기</BBtn>
            </SBox>
            <SBox>
              <BTitle>사이버렉카 결국 수용</BTitle>
              <BText>
                어쩌구 저쩌구 콘텐츠 몇줄 미리보기 최대 세 줄까지만 가능합니다.
                테스트를 위해 겁나 많이 작성하고 있습니다 허은 최고
              </BText>
              <BBtn>더보기</BBtn>
            </SBox> */}
          </ListSmall>
          <ListBig>
            <BTitle>사이버렉카 결국 수용</BTitle>
            <BImg />
            <BText>
              어쩌구 저쩌구 콘텐츠 몇줄 미리보기 최대 세 줄까지만 가능합니다.
              테스트를 위해 겁나 많이 작성하고 있습니다 허은 최고
            </BText>
            <BBtn>더보기</BBtn>
          </ListBig>
        </LBox>
      </LDiv>
    </>
  );
}

export default ReportList;
