import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import {
  Pdiv,
  Fdiv,
  RImg,
  Rdiv,
  RName,
  Ranking,
  TDiv,
} from "./ReportListStyle";

const NoReport = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 34px 0px;
  font-size: 16px;
`;

function ReportRank() {
  const [topReports, setTopReports] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/upload/")
      .then((response) => {
        // 상위 3개만 저장
        setTopReports(response.data.top_targets.slice(0, 3));
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }, []);

  return (
    <>
      <Fdiv>많은 사용자들이 신고했어요</Fdiv>
      <Rdiv hasReports={topReports.length > 0}>
        {topReports.length > 0 ? (
          topReports.map((report, index) => (
            <Pdiv key={index}>
              <RImg src={report.target_thumbnail}></RImg>
              <RName>{report.target_name}</RName>
              <Ranking>
                {index === 0 ? "1st" : index === 1 ? "2nd" : "3rd"}
              </Ranking>
            </Pdiv>
          ))
        ) : (
          <NoReport>현재 신고된 채널이 없습니다</NoReport>
        )}
      </Rdiv>
    </>
  );
}

export default ReportRank;
