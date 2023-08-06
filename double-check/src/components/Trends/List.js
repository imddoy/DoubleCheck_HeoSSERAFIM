import React from 'react';
import { ListImg, Percent, TDiv, Title } from './TrendsStyle';

function List() {
    return (
        <>
            <div>
                <ListImg></ListImg>
                <TDiv>
                    <Title>
                        덕성여대 멋쟁이 사자처럼 대표 허은, 르세라핌 데뷔?
                    </Title>
                    <Percent>70%</Percent>
                </TDiv>
            </div>

            <div>
                <ListImg></ListImg>
                <TDiv>
                    <Title>김채현 ♡ 이준호, 이준호 사실 아냐 모르는 사이</Title>
                    <Percent>70%</Percent>
                </TDiv>
            </div>

            <div>
                <ListImg></ListImg>
                <TDiv>
                    <Title>
                        노하림 ♡ 채형원, 최근 알아가는 중.. 예쁘게 봐달라
                    </Title>
                    <Percent>100%</Percent>
                </TDiv>
            </div>
        </>
    );
}

export default List;
