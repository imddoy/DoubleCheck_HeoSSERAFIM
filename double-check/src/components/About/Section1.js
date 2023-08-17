import React from 'react';
import Com from '../../img/com.svg';
import { Cimg, S1Div, S1Div2, STitle, Title } from './AboutStyle';

function Section1() {
    return (
        <S1Div className="focus">
            <Cimg src={Com} />

            <S1Div2>
                <STitle>
                    인공지능의 눈과 당신의 눈 <br />
                    더블체크로 확실하게!
                </STitle>

                <Title>DOUBLE CHECK</Title>
            </S1Div2>
        </S1Div>
    );
}

export default Section1;
