import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import {
  Fdiv,
  LBtn,
  LDiv,
  LBox,
  ListSmall,
  BTitle,
  BText,
  BBtn,
  SBox,
} from "./ReportListStyle";

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 52px 0;
`;

const NoReport = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
`;

function ReportList() {
  const [report, setReports] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 400) {
        // Mobile breakpoint
        setItemsPerPage(2); // 2 items for mobile
      } else if (window.innerWidth > 400 && window.innerWidth <= 660) {
        setItemsPerPage(4); // 4 items for tablet and PC
      } else {
        setItemsPerPage(6); // more items for larger screens
      }
    }

    handleResize();

    // 리사이즈 이벤트에 이벤트 리스너 추가
    window.addEventListener("resize", handleResize);

    // 컴포넌트 언마운트 시, 이벤트 리스너 제거
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/upload/")
      .then((response) => {
        setReports(response.data.posts);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }, []);

  const onClickToDetail = (id) => {
    window.location.href = `/fakenews/${id}`;
  };

  const indexOfLastReport = currentPage * itemsPerPage;
  const indexOfFirstReport = indexOfLastReport - itemsPerPage;
  const currentReports = report.slice(indexOfFirstReport, indexOfLastReport);

  const renderPageNumbers = [];
  for (let i = 1; i <= Math.ceil(report.length / itemsPerPage); i++) {
    renderPageNumbers.push(i);
  }

  return (
    <>
      <Fdiv>허위뉴스를 신고해주세요</Fdiv>
      <LDiv>
        <Link to="/fakenews">
          <LBtn>작성하기</LBtn>
        </Link>

        <LBox>
          <ListSmall isEmpty={report.length === 0} itemCount={report.length}>
            {report.length === 0 ? (
              <NoReport>등록된 신고글이 없습니다</NoReport>
            ) : (
              currentReports.map((event) => (
                <SBox key={event.id} onClick={() => onClickToDetail(event.id)}>
                  <BTitle>{event.title}</BTitle>
                  <BText>{event.content}</BText>
                  <BBtn>더보기</BBtn>
                </SBox>
              ))
            )}
          </ListSmall>
        </LBox>

        <Pagination>
          {renderPageNumbers.map((number) => (
            <span
              key={number}
              onClick={() => setCurrentPage(number)}
              style={{
                cursor: "pointer",
                padding: "10px",
                color: currentPage === number ? "#3A42BF" : "inherit",
                fontWeight: "bold",
              }}
            >
              {number}
            </span>
          ))}
        </Pagination>
      </LDiv>
    </>
  );
}
export default ReportList;
