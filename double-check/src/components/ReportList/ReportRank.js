import React from "react";
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
  return (
    <>
      <Fdiv>많은 사용자들이 신고했어요</Fdiv>
      <Rdiv>
        <Pdiv>
          <RImg></RImg>
          <RName>노구림</RName>
          <Ranking>1st</Ranking>
        </Pdiv>
        <Pdiv>
          <RImg></RImg>
          <RName>김또이</RName>
          <Ranking>2nd</Ranking>
        </Pdiv>
        <Pdiv>
          <RImg></RImg>
          <RName>허쿠라</RName>
          <Ranking>3th</Ranking>
        </Pdiv>
      </Rdiv>
    </>
  );
}

export default ReportRank;
