import React, { useEffect, useState } from "react";
import {
  Btn,
  BtnDiv,
  Flabel,
  Img,
  StyledDiv,
  FormDiv,
} from "./FakeDetailStyle";
import axios from "axios";
import { useParams } from "react-router-dom";

function FakeForm() {
  const cancle = (e) => {
    window.location.href = "/report";
  };
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/upload/${id}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }, []);

  const formatDateString = (dateStr) => {
    const dateObj = new Date(dateStr);
    const year = dateObj.getFullYear();
    const month = dateObj.getMonth() + 1; // JavaScript의 month는 0에서 시작합니다.
    const day = dateObj.getDate();
    return `${year}년 ${month}월 ${day}일에 작성된 글입니다.`;
  };

  return (
    <StyledDiv>
      <Flabel>제목</Flabel>
      <FormDiv>{data.title}</FormDiv>
      <Flabel>신고 대상</Flabel>
      <FormDiv>{data.target_name}</FormDiv>
      <Flabel>신고 콘텐츠 링크</Flabel>
      <FormDiv>{data.url}</FormDiv>
      <Flabel>내용</Flabel>
      <FormDiv>{data.content}</FormDiv>
      {data.head_image ? (
        <Img
          src={`http://localhost:8000${data.head_image}`}
          alt="Description"
        />
      ) : null}
      <BtnDiv>
        <Flabel>{formatDateString(data.created_at)}</Flabel>
        <Btn color="#525252" onClick={cancle}>
          돌아가기
        </Btn>
      </BtnDiv>
    </StyledDiv>
  );
}

export default FakeForm;
