import React from 'react';
import FakeSee from '../components/Fakenews/FakeSee';
import { Div, Fdiv } from '../components/Fakenews/FakenewsStyle';

function FakeDetail() {
    return (
        <Div>
            <Fdiv>허위뉴스를 신고해주세요</Fdiv>
            <FakeSee />
        </Div>
    );
}

export default FakeDetail;
