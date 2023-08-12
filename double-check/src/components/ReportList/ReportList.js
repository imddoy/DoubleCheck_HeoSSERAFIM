import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
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
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

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

  const onClickToDetail = (id) => {
    window.location.href = `/림아 페이지 만들고 url 여기다가 넣어줘잉/${id}`;
  };

  const reportsWithImage = report.filter((item) => item.head_image);
  const reportsWithoutImage = report.filter((item) => !item.head_image);

  // 페이지 분할
  const currentItemImage = reportsWithImage.slice(currentPage - 1, currentPage);
  const indexOfLastItemWithoutImage = (currentPage - 1) * itemsPerPage;
  const currentItemTexts = reportsWithoutImage.slice(
    indexOfLastItemWithoutImage,
    indexOfLastItemWithoutImage + itemsPerPage
  );

  // 페이지네이션 컴포넌트 렌더링
  const totalPages =
    reportsWithImage.length +
    Math.ceil(reportsWithoutImage.length / itemsPerPage);

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <Fdiv>허위뉴스를 신고해주세요</Fdiv>
      <LDiv>
        <Link to="/fakenews">
          <LBtn>작성하기</LBtn>
        </Link>
        <LBox>
          <ListSmall>
            {currentItemTexts.slice(0, itemsPerPage).map((event) => (
              <SBox key={event.id} onClick={() => onClickToDetail(event.id)}>
                <BTitle>{event.title}</BTitle>
                <BText>{event.content}</BText>
                <BBtn>더보기</BBtn>
              </SBox>
            ))}
          </ListSmall>
          {currentItemImage.map((event) => (
            <ListBig key={event.id} onClick={() => onClickToDetail(event.id)}>
              <BTitle>{event.title}</BTitle>
              <BImg
                src={`http://127.0.0.1:8000${event.head_image}`}
                alt="Report Image"
              />
              <BText>{event.content}</BText>
              <BBtn>더보기</BBtn>
            </ListBig>
          ))}
        </LBox>
        <div>
          {pageNumbers.map((number) => (
            <button key={number} onClick={() => setCurrentPage(number)}>
              {number}
            </button>
          ))}
        </div>
      </LDiv>
    </>
  );
}

export default ReportList;
