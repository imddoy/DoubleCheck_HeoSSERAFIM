import { styled } from 'styled-components';

export const Popup = styled.div`
    position: fixed;
    top: 40vh;
    width: 341px;
    height: 183px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    box-shadow: 0px 8px 25px 0px rgba(13, 10, 44, 0.06);
`;

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
    z-index: 10; /* Ensure the overlay is above other elements */
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const PopupInner = styled.div`
    position: absolute;
    box-sizing: border-box;
    width: 341px;
    height: fit-content;
    border-radius: 20px;
    background: white;
    padding-top: 23px;

    color: #000;
    text-align: center;
    /* Body */
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

    > div {
        width: 200px;
        display: flex;
        margin: 0 auto;
        flex-direction: row;
        justify-content: space-around;
        margin-bottom: 21px;
        margin-top: 26px;
    }
`;

export const InnerP = styled.p`
    color: ${(props) => props.color};
    text-align: center;
    /* Body */
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    margin-top: 10px;
`;

export const PoPBtn = styled.button`
    width: 70px;
    height: 29px;
    border-radius: 5px;
    border: 1px solid var(--neutral-300, #eff0f6);
    background: ${(props) => props.bg};
    color: ${(props) => props.color};
    text-align: center;
    /* 14Text */
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`;
