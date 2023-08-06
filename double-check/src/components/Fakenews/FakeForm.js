import React from 'react';
import { Btn, BtnDiv, Fdiv, Flabel, Form, Img, ImgBtn } from './FakenewsStyle';

function FakeForm() {
    return (
        <form>
            <Flabel>제목</Flabel>
            <Form placeholder="제목을 입력하세요."></Form>
            <Flabel>신고 대상</Flabel>
            <Form placeholder="신고하고자 하는 대상을 입력하세요."></Form>
            <Flabel>신고 콘텐츠 링크</Flabel>
            <Form placeholder="신고하고자 하는 콘텐츠의 링크를 입력하세요."></Form>
            <Flabel>내용</Flabel>
            <Form placeholder="신고 사유 및 세부 설명을 입력하세요."></Form>

            <Img></Img>
            <ImgBtn>사진 업로드</ImgBtn>
            <BtnDiv>
                <Btn color="#525252">취소</Btn>
                <Btn bg="#3A42BF" color="white">
                    작성
                </Btn>
            </BtnDiv>
        </form>
    );
}

export default FakeForm;
