import React, { useState } from 'react';
import { FilterBox, FilterDiv } from './TrendsStyle';

function Filter() {
    const [isSelected, setIsSelected] = useState(null);

    return (
        <FilterBox>
            <FilterDiv onClick={() => setIsSelected(!isSelected)}>
                멋쟁이 사자처럼 덕성
            </FilterDiv>
            <FilterDiv onClick={() => setIsSelected(!isSelected)}>
                허세라핌
            </FilterDiv>
            <FilterDiv onClick={() => setIsSelected(!isSelected)}>
                김나리
            </FilterDiv>
            <FilterDiv onClick={() => setIsSelected(!isSelected)}>
                김채이
            </FilterDiv>
            <FilterDiv onClick={() => setIsSelected(!isSelected)}>
                김채현
            </FilterDiv>
            <FilterDiv onClick={() => setIsSelected(!isSelected)}>
                노하림
            </FilterDiv>
            <FilterDiv onClick={() => setIsSelected(!isSelected)}>
                이서진
            </FilterDiv>
            <FilterDiv onClick={() => setIsSelected(!isSelected)}>
                허은
            </FilterDiv>
        </FilterBox>
    );
}

export default Filter;
