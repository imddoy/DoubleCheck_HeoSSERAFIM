import React, { useRef, useState } from 'react';
import {
    Btn,
    BtnDiv,
    Flabel,
    Form,
    Img,
    StyledForm,
    FileInputLabel,
} from './FakenewsStyle';
import axios from 'axios';
import Default from '../../img/default.svg';
import { Popup, Overlay, PopupInner, InnerP, PoPBtn } from '../Popup/Popup';
import Report from '../../img/report.svg';

function FakeForm() {
    const [title, setTitle] = useState('');
    const [target, setTarget] = useState('');
    const [url, setUrl] = useState('');
    const [content, setContent] = useState('');
    const [imgFile, setImgFile] = useState('');
    const [saveImg, setSaveImg] = useState('');
    const imgRef = useRef();

    const [showPopup, setShowPopup] = useState(false);
    const [showError, setShowError] = useState(false);
    const [showBlank, setShowBlank] = useState(false);

    const handleTitle = (e) => {
        setTitle(e.target.value);
    };
    const handleTarget = (e) => {
        setTarget(e.target.value);
    };
    const handleUrl = (e) => {
        setUrl(e.target.value);
    };
    const handleContent = (e) => {
        setContent(e.target.value);
    };

    const saveImgFile = () => {
        const file = imgRef.current.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setImgFile(reader.result);
            setSaveImg(file);
        };
    };
    const postFake = (e) => {
        e.preventDefault();
        const formData = new FormData();

        formData.append('title', title);
        formData.append('target', target);
        formData.append('url', url);
        formData.append('content', content);
        if (imgFile) {
            formData.append('head_image', saveImg);
        }

        axios
            .post('http://127.0.0.1:8000/upload/', formData)
            .then((response) => {
                console.log(response.data);
                closePopup();
                window.location.href = '/report';
            })
            .catch((error) => {
                console.log('작성 실패');
                console.log(error.message);
                console.log(error);
                if (error.response && error.response.data) {
                    console.log(error.response.data);
                }

                closePopup();
                openError();
            });
    };

    const cancle = (e) => {
        window.location.href = '/';
    };

    const openPopup = () => {
        if (!title.trim() || !target.trim() || !url.trim() || !content.trim()) {
            openBlank();
        } else {
            setShowPopup(true);
        }
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    const openError = () => {
        setShowError(true);
    };

    const closeError = () => {
        setShowError(false);
    };

    const openBlank = () => {
        setShowBlank(true);
    };

    const closeBlank = () => {
        setShowBlank(false);
    };
    return (
        <StyledForm onSubmit={postFake}>
            <Flabel>제목</Flabel>
            <Form
                placeholder="제목을 입력하세요."
                onChange={handleTitle}
            ></Form>
            <Flabel>신고 대상</Flabel>
            <Form
                placeholder="신고하고자 하는 대상을 입력하세요."
                onChange={handleTarget}
            ></Form>
            <Flabel>신고 콘텐츠 링크</Flabel>
            <Form
                placeholder="신고하고자 하는 콘텐츠의 링크를 입력하세요."
                onChange={handleUrl}
            ></Form>
            <Flabel>내용</Flabel>
            <Form
                placeholder="신고 사유 및 세부 설명을 입력하세요."
                onChange={handleContent}
            ></Form>
            <Img src={imgFile ? imgFile : Default}></Img>

            <FileInputLabel>
                파일 선택
                <input
                    style={{ display: 'none' }}
                    type="file"
                    accept="image/*"
                    onChange={saveImgFile}
                    ref={imgRef}
                />
            </FileInputLabel>

            <BtnDiv>
                <Btn color="#525252" onClick={cancle}>
                    취소
                </Btn>
                <Btn
                    bg="#3A42BF"
                    color="white"
                    onClick={openPopup}
                    type="button"
                >
                    작성
                </Btn>
            </BtnDiv>

            {showPopup ? (
                <Overlay>
                    <Popup>
                        <PopupInner>
                            <img src={Report}></img>
                            <InnerP>해당 콘텐츠를 신고하시겠습니까?</InnerP>
                            <InnerP color={'#525252'}>
                                작성된 게시글은 수정 및 삭제가 불가합니다.
                            </InnerP>

                            <div>
                                <PoPBtn
                                    onClick={closePopup}
                                    color="black"
                                    bg="white"
                                >
                                    취소
                                </PoPBtn>
                                <PoPBtn
                                    color="white"
                                    bg="#3A42BF"
                                    type="submit"
                                >
                                    등록
                                </PoPBtn>
                            </div>
                        </PopupInner>
                    </Popup>
                </Overlay>
            ) : null}

            {showError ? (
                <Overlay>
                    <Popup>
                        <PopupInner>
                            <img src={Report}></img>
                            <InnerP>
                                콘텐츠 링크 주소가 잘못되었습니다.
                                <br /> 다시 입력해 주세요.
                            </InnerP>

                            <div>
                                <PoPBtn
                                    color="white"
                                    bg="#3A42BF"
                                    type="button"
                                    onClick={closeError}
                                >
                                    확인
                                </PoPBtn>
                            </div>
                        </PopupInner>
                    </Popup>
                </Overlay>
            ) : null}
            {showBlank ? (
                <Overlay>
                    <Popup>
                        <PopupInner>
                            <img src={Report}></img>
                            <InnerP>빈칸을 입력하세요.</InnerP>

                            <div>
                                <PoPBtn
                                    color="white"
                                    bg="#3A42BF"
                                    type="button"
                                    onClick={closeBlank}
                                >
                                    확인
                                </PoPBtn>
                            </div>
                        </PopupInner>
                    </Popup>
                </Overlay>
            ) : null}
        </StyledForm>
    );
}

export default FakeForm;
