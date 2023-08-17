import React from 'react';
import { Gobtn, S4Div, S4Title, S4img } from './AboutStyle';
import phone from '../../img/phone.svg';

function Section4() {
    const move = () => {
        window.location.href = '/main';
    };
    return (
        <S4Div>
            <S4Title>
                기다릴 필요 없어요. 더블체크와 지금 바로 시작하세요!
            </S4Title>

            <S4img src={phone} />

            <Gobtn onClick={move}>double check 하기</Gobtn>
        </S4Div>
    );
}

export default Section4;
