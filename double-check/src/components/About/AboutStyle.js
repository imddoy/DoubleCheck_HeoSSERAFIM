import { styled } from 'styled-components';

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #141414;
`;

/* Section1 */
export const S1Div = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: ${(props) => props.mt};
`;

export const S2Div = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    margin-top: ${(props) => props.mt};
`;

export const Cimg = styled.img`
    @media screen and (max-width: 1000px) {
        display: none;
    }
`;
export const STitle = styled.div`
    color: #fff;
    text-align: center;
    font-size: 38px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    white-space: nowrap;

    @media screen and (max-width: 1100px) {
        font-size: 35px;
    }
    @media screen and (max-width: 1000px) {
        margin-top: 80px;
    }
    @media screen and (max-width: 800px) {
        font-size: 30px;
    }

    @media screen and (max-width: 500px) {
        font-size: 20px;
    }
    @media screen and (max-width: 300px) {
        font-size: 15px;
    }
`;

export const Title = styled.div`
    color: #fff;
    text-align: center;
    font-size: 80px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    white-space: nowrap;
    margin-top: 10px;

    @media screen and (max-width: 1120px) {
        font-size: 55px;
    }

    @media screen and (max-width: 800px) {
        font-size: 45px;
    }

    @media screen and (max-width: 500px) {
        font-size: 35px;
    }
    @media screen and (max-width: 300px) {
        font-size: 25px;
    }
`;

export const S1Div2 = styled.div`
    position: relative; // 추가
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: center;
    margin: 0 auto;
    justify-content: center;
`;

export const Limg = styled.img`
    position: absolute;
    top: -210px;
    left: 370px; // 원하는 위치로 조절
`;

/* Section2 */
export const Title2 = styled.div`
    color: #fff;
    font-family: Pretendard;
    font-size: 60px;
    font-style: normal;
    font-weight: ${(props) => props.fw};
    line-height: normal;

    word-break: keep-all;
    @media screen and (max-width: 1100px) {
        font-size: 45px;
    }
    @media screen and (max-width: 800px) {
        font-size: 35px;
    }

    @media screen and (max-width: 715px) {
        font-size: 25px;
    }

    @media screen and (max-width: 500px) {
        font-size: 18px;
    }
    @media screen and (max-width: 300px) {
        font-size: 15px;
    }
`;

export const TitleDiv = styled.div`
    word-wrap: break-word;
`;

export const LogoImg = styled.img`
    @media screen and (max-width: 1110px) {
        width: 300px;
        height: 300px;
    }
    @media screen and (max-width: 834px) {
        width: 200px;
        height: 200px;
    }

    @media screen and (max-width: 715px) {
        width: 180px;
        height: 180px;
    }

    @media screen and (max-width: 500px) {
        width: 130px;
        height: 130px;
    }
    @media screen and (max-width: 390px) {
        width: 80px;
        height: 80px;
    }
`;

/* Section3 */
export const Title3 = styled.div`
    color: #fff;
    text-align: center;
    font-family: Pretendard;
    font-size: 60px;
    font-style: normal;
    font-weight: 200;
    line-height: normal;
    margin: 0 auto;
    word-break: keep-all;
    span {
        font-weight: 800;
    }
    @media screen and (max-width: 1100px) {
        font-size: 45px;
    }
    @media screen and (max-width: 800px) {
        font-size: 35px;
    }

    @media screen and (max-width: 500px) {
        font-size: 20px;
    }
    @media screen and (max-width: 300px) {
        font-size: 15px;

        white-space: normal;
    }
`;
export const S3Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-top: ${(props) => props.mt};
    padding-bottom: 100px;
`;

export const D3iv = styled.img`
    width: 100%;
`;

/* Section4 */

export const S4Div = styled.div`
    background-color: #3a42bf;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 150px;
    padding-bottom: 180px;
`;

export const S4Title = styled.div`
    color: #fff;
    text-align: center;
    font-size: 40px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 10px;
    word-break: keep-all;

    @media screen and (max-width: 1100px) {
        font-size: 38px;
    }
    @media screen and (max-width: 816px) {
        font-size: 33px;
    }

    @media screen and (max-width: 710px) {
        font-size: 27px;
    }
    @media screen and (max-width: 600px) {
        font-size: 23px;
    }
    @media screen and (max-width: 500px) {
        font-size: 20px;
    }
    @media screen and (max-width: 430px) {
        font-size: 18px;
    }
    @media screen and (max-width: 300px) {
        font-size: 15px;
    }
`;

export const Gobtn = styled.button`
    width: 280px;
    height: 60px;
    border-radius: 112px;
    background-color: white;

    color: var(--black, #000);
    font-family: Pretendard;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    margin-bottom: 50px;

    @media screen and (max-width: 500px) {
        width: 200px;
        height: 40px;
        font-size: 15px;
    }
`;

export const S4img = styled.img`
    @media screen and (max-width: 1110px) {
        width: 700px;
        height: 700px;
    }
    @media screen and (max-width: 834px) {
        width: 600px;
        height: 600px;
    }

    @media screen and (max-width: 615px) {
        width: 500px;
        height: 500px;
    }

    @media screen and (max-width: 500px) {
        width: 400px;
        height: 400px;
    }
    @media screen and (max-width: 380px) {
        width: 200px;
        height: 200px;
    }
`;
