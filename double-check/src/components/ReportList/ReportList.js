import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {
    Fdiv,
    LBtn,
    LDiv,
    LBox,
    ListSmall,
    ListBig,
    BTitle,
    BText,
    BBtn,
    BImg,
    SBox,
} from './ReportListStyle';

function ReportList() {
    const [report, setReports] = useState([]);
    useEffect(() => {
        axios
            .get('http://127.0.0.1:8000/upload/')
            .then((response) => {
                setReports(response.data);
            })
            .catch((error) => {
                console.log(error.response.data);
            });
    }, []);

    const onClickToDetail = (id) => {
        window.location.href = `/fakenews/${id}`;
    };

    return (
        <>
            <Fdiv>허위뉴스를 신고해주세요</Fdiv>
            <LDiv>
                <Link to="/fakenews">
                    <LBtn>작성하기</LBtn>
                </Link>
                <LBox>
                    {report.map((event) => {
                        if (event.head_image) {
                            return (
                                // ListBig for reports with an image
                                <ListBig
                                    key={event.id}
                                    onClick={() => onClickToDetail(event.id)}
                                >
                                    <BTitle>{event.title}</BTitle>

                                    <BImg
                                        src={`http://localhost:8000${event.head_image}`}
                                        alt="Report Image"
                                    />
                                    <BText>{event.content}</BText>
                                    <BBtn>더보기</BBtn>
                                </ListBig>
                            );
                        } else {
                            return (
                                // ListSmall for reports without an image
                                <ListSmall key={event.id}>
                                    <SBox>
                                        <BTitle>{event.title}</BTitle>
                                        <BText>{event.content}</BText>
                                        <BBtn>더보기</BBtn>
                                    </SBox>
                                </ListSmall>
                            );
                        }
                    })}
                </LBox>
            </LDiv>
        </>
    );
}

export default ReportList;
