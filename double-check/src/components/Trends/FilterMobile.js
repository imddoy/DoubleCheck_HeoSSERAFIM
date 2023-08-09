import React, { useState } from 'react';
import { FilterBox, FilterBox2, FilterDiv } from './TrendsStyle';

function Filter() {
    const [isSelected, setIsSelected] = useState(null);

    return (
        <>
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
            </FilterBox>

            <FilterBox2>
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
                    덕멋 대표 허은
                </FilterDiv>
            </FilterBox2>
        </>
    );
}

export default Filter;
