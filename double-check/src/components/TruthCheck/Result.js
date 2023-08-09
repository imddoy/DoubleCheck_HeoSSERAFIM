import React from "react";
import styled from "styled-components";
import SatisfactionSlider from "./SatisfactionSlider";
import ResultDetail from "./ResultDetail";

const Div = styled.div`
  width: 100%;
`;

function Result() {
  return (
    <Div>
      <ResultDetail />
      <SatisfactionSlider />
    </Div>
  );
}

export default Result;
