import React from "react";
import styled from "styled-components";
import { HashLoader } from "react-spinners";

const Div = styled.div`
  width: 100%;
  margin-top: 35px;
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
  flex-direction: column;
  justify-content: space-between;
`;

const SpinnerContainer = styled.div`
  display: flex;
  align-self: center;
  margin: 128px 0px;
`;

const Detect = () => {
  return (
    <Div>
      <DBox>
        <DTitle>
          해당 영상 속<br />
          허위 사실 여부를 판단하고 있습니다...{" "}
        </DTitle>
        <SpinnerContainer>
          <HashLoader color="#3A42BF" size={90} />
        </SpinnerContainer>
      </DBox>
    </Div>
  );
};

export default Detect;
