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
export const STitle = styled.div`
    color: #fff;
    text-align: center;
    font-size: 40px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`;

export const Title = styled.div`
    color: #fff;
    text-align: center;
    font-size: 80px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    letter-spacing: -2px;
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
    letter-spacing: -6px;
`;

export const TitleDiv = styled.div`
    margin-left: 130px;
`;

export const LogoImg = styled.img`
    align-self: center;
    margin: 0 auto;
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
    letter-spacing: -6px;
    margin: 0 auto;
    span {
        font-weight: 800;
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
    padding-bottom: 80px;
`;

export const S4Title = styled.div`
    color: #fff;
    text-align: center;
    font-size: 40px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 10px;
`;

export const Gobtn = styled.button`
    width: 383px;
    height: 109px;
    border-radius: 112px;
    background-color: white;

    color: var(--black, #000);
    font-family: Pretendard;
    font-size: 35px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -2.625px;
    margin-bottom: 50px;
`;
