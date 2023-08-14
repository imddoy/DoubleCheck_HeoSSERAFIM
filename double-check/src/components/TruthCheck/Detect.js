import React from "react";
import styled from "styled-components";
import { HashLoader } from "react-spinners";
import thumnail from "../../img/thumnail1.png";
import { useLocation } from "react-router-dom";

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
  @media screen and (max-width: 440px) {
    flex-direction: column;
  }
`;

const SpinnerContainer = styled.div`
  display: flex;

  @media (max-width: 440px) {
    align-self: center;
    margin: 64px 0px;
  }
`;

const ThImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin-top: 24px;
  margin-bottom: 16px;
`;

const ThTitle = styled.div`
  color: #3a42bf;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px; /* 133.333% */
  margin-bottom: 15px;
`;

const Detect = () => {
  const location = useLocation();
  const title = location.state.title;
  const thumbnailURL = location.state.thumbnailURL;

  return (
    <Div>
      <DBox>
        <DTitle>
          해당 영상 속<br />
          허위 사실 여부를 판단하고 있습니다...{" "}
        </DTitle>
        <SpinnerContainer>
          <HashLoader color="#3A42BF" />
        </SpinnerContainer>
      </DBox>
      <ThImage src={thumbnailURL} />
      <ThTitle>{title}</ThTitle>
    </Div>
  );
};

export default Detect;
