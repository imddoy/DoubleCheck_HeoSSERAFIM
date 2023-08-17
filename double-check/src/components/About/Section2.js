import React from "react";
import logo from "../../img/logo.svg";
import "./animations.css";

import { LogoImg, S2Div, Title2, TitleDiv } from "./AboutStyle";
function Section2() {
  return (
    <S2Div mt="200px">
      <TitleDiv>
        <Title2 fw="200">DOUBLE CHECK는</Title2>
        <Title2 fw="700">허위 판별 서비스입니다. </Title2>
      </TitleDiv>

      <LogoImg src={logo} className="AboutSection1_Floating" />
    </S2Div>
  );
}

export default Section2;
