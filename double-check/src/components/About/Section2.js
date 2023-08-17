import React from 'react';
import logo from '../../img/logo.svg';

import { LogoImg, S1Div, Title2, TitleDiv } from './AboutStyle';
function Section2() {
    return (
        <S1Div mt="200px">
            <TitleDiv>
                <Title2 fw="200">DOUBLE CHECK는</Title2>
                <Title2 fw="700">허위 뉴스 판별 서비스입니다. </Title2>
            </TitleDiv>

            <LogoImg src={logo} />
        </S1Div>
    );
}

export default Section2;
