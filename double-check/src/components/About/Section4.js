import React from 'react';
import { Gobtn, S4Div, S4Title } from './AboutStyle';
import phone from '../../img/phone.svg';

function Section4() {
    return (
        <S4Div>
            <S4Title>
                기다릴 필요 없어요. 더블체크와 지금 바로 시작하세요!
            </S4Title>

            <img src={phone} />

            <Gobtn>지금 double check 하기</Gobtn>
        </S4Div>
    );
}

export default Section4;
