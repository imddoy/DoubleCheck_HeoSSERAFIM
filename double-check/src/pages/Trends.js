import React from 'react';
import Filter from '../components/Trends/Filter';
import { Div, Fdiv } from '../components/Fakenews/FakenewsStyle';
import List from '../components/Trends/List';

function Trends() {
    return (
        <Div>
            <Fdiv>현재 가장 많이 분석되고 있어요</Fdiv>
            <Filter />
            <List />
        </Div>
    );
}

export default Trends;
