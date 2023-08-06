import React from 'react';
import FakeForm from '../components/Fakenews/FakeForm';
import { Div, Fdiv } from '../components/Fakenews/FakenewsStyle';

function Fakenews() {
    return (
        <Div>
            <Fdiv>허위뉴스를 신고해주세요</Fdiv>
            <FakeForm />
        </Div>
    );
}

export default Fakenews;
