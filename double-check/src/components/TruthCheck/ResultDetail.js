import React from "react";
import styled from "styled-components";
import thumnail from "../../img/thumnail1.png";
import progress from "../../img/ProgressBar.png";

const Div = styled.div`
  width: 100%;
`;

const DTitle = styled.div`
  color: #000;
  /* SubTitle */
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
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
  justify-content: flex-end;
  align-items: baseline;
  gap: 5px;
  @media screen and (max-width: 1275px) {
    margin-top: 22px;
    margin-bottom: 7px;
    justify-content: flex-start;
  }
  @media screen and (max-width: 440px) {
    margin-top: 22px;
    justify-content: flex-start;
    margin-bottom: 7px;
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

const PBox = styled.div``;

const ResultDetail = () => {
  return (
    <Div>
      <DBox>
        <DTitle>허위 사실 여부를 판단하였습니다</DTitle>
        <PBox>
          <PTitle>
            70% <Ptext>허위 뉴스</Ptext>
          </PTitle>
          <DImage src={progress} />
        </PBox>
      </DBox>
      <ThImage src={thumnail} />
      <ThTitle>NewJeans(뉴진스) ‘ETA’ Official MV -YouTube</ThTitle>
      <TextTitle>텍스트 분석:</TextTitle>
      <TextDetail>
        낭비하지 마 네 시간은 은행서둘러서 정리해 걔는 real bad받아주면 안돼No,
        you better trust me답답해서 그래저번에도 봤지만 너 없을 때걘 여기저기에
        눈빛을 뿌리네아주 눈부시게Honestly 우리 사이에He's been totally lyin',
        yeah 내 생일 파티에 너만 못 온 그날혜진이가 엄청 혼났던 그날지원이가
        여친이랑 헤어진 그날걔는 언제나 네가 없이 그날너무 멋있는 옷을 입고
        그날Heard him say We can go wherever you likeBaby, say the words and I'm
        downAll I need is you on my sideWe can go whenever you likeNow, where
        are you? (Mm-mhm)What's your ETA? What's your ETA? (Mm-mhm-mm)What's
        your ETA? What's your ETA? (Mm-mhm)*What's your ETA? What's your
        ETA?**I'll be there right now, lose that boy on her arm*
      </TextDetail>
    </Div>
  );
};

export default ResultDetail;
