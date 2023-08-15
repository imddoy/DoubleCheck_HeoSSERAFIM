import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Pdiv,
  Fdiv,
  RImg,
  Rdiv,
  RName,
  Ranking,
  TDiv,
} from "./ReportListStyle";

function ReportRank() {
  const [topReports, setTopReports] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/upload/popular/")
      .then((response) => {
        // 상위 3개만 저장
        setTopReports(response.data.slice(0, 3));
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }, []);

  return (
    <>
      <Fdiv>많은 사용자들이 신고했어요</Fdiv>
      <Rdiv>
        {topReports.map((report, index) => (
          <Pdiv key={index}>
            <RImg src={report.profile_picture}></RImg>
            <RName>{report.profile_name}</RName>
            <Ranking>
              {index === 0 ? "1st" : index === 1 ? "2nd" : "3rd"}
            </Ranking>
          </Pdiv>
        ))}
      </Rdiv>
    </>
  );
}

export default ReportRank;
