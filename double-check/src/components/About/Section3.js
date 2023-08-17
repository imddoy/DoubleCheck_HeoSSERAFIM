import React from 'react';
import { D3iv, S3Div, Title3 } from './AboutStyle';
import caputre from '../../img/chat.png';
import use from '../../img/howto.png';
function Section3() {
    return (
        <S3Div mt="200px">
            <Title3>
                DOUBLE CHECK, <span>이렇게 나오게 되었습니다</span>
            </Title3>

            <D3iv src={caputre} />
            <D3iv src={use} />
        </S3Div>
    );
}

export default Section3;
