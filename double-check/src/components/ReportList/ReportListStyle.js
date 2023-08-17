import { styled, css } from "styled-components";

const responsiveWidth = css`
  @media screen and (max-width: 834px) {
    width: 572px;
  }

  @media screen and (max-width: 615px) {
    width: 450px;
  }

  @media screen and (max-width: 500px) {
    width: 341px;
  }
  @media screen and (max-width: 350px) {
    width: 280px;
  }
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50.3333%;
  justify-content: center;
  margin: 0px auto;
  @media screen and (max-width: 1035px) {
    width: 70%;
  }
  @media screen and (max-width: 834px) {
    width: 75%;
  }
  @media screen and (max-width: 698px) {
    width: 85%;
  }
  @media screen and (max-width: 610px) {
    width: 85%;
  }
`;
export const Fdiv = styled.div`
  color: black;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 22px;

  align-self: flex-start;
`;

export const Rdiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${({ hasReports }) =>
    hasReports ? "space-between" : "center"};
  width: 100%;
  margin-bottom: 50px;
`;

export const Pdiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RImg = styled.img`
  width: 73px;
  height: 73px;
  border-radius: 73px;
  align-self: center;
  margin: 0 auto;
  margin-bottom: 8px;
`;

export const RName = styled.div`
  line-height: 20px;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
`;

export const Ranking = styled.div`
  color: #3a42bf;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 30px; /* 150% */
  letter-spacing: -2px;
`;

export const LDiv = styled.div`
  width: 100%;
`;

export const LBtn = styled.div`
  width: 100%;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #3a42bf;
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  background-color: #fff; /* 배경색 추가 */
  border: 1px solid #eff0f6; /* 테두리 색상 */
  border-radius: 10px;
  box-shadow: 0px 8px 25px rgba(13, 10, 44, 0.06); /* 그림자 효과 */
  cursor: pointer; /* 마우스 포인터를 손가락 모양으로 변경 */
  transition: background-color 0.3s, color 0.3s; /* 부드러운 색상 전환 효과 */

  &:hover {
    background-color: #3a42bf;
    color: white;
  }
`;

export const LBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 7px;
`;

export const ListSmall = styled.div`
  width: 100%;
  height: 290px;
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  justify-content: ${({ isEmpty }) => (isEmpty ? "center" : "space-between")};

  @media screen and (min-width: 661px) {
    ${({ isEmpty, itemCount }) =>
      (itemCount === 2 || itemCount === 5) &&
      `
      justify-content: flex-start;
    `}
  }
`;

export const SBox = styled.div`
  width: 31.333%; // Default width as 50% of ListSmall's width
  height: 138px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0px 8px 25px rgba(13, 10, 44, 0.06);
  border: 1px solid #eff0f6;
  background-color: white;
  border-radius: 10px;
  padding: 0px 12px 15px 12px;

  @media screen and (max-width: 660px) {
    width: 47%; // Full width on mobile
  }
  @media screen and (max-width: 400px) {
    width: 100%; // Full width on mobile
  }
`;

export const ListBig = styled.div`
  width: 164px;
  height: 290px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 8px 25px rgba(13, 10, 44, 0.06);
  border: 1px solid #eff0f6;
  background-color: white;
  border-radius: 10px;
  padding: 0px 12px;
`;

export const BTitle = styled.div`
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-top: 10px;
  width: 119px;
  height: 34px;
  flex-shrink: 0;
  color: #3a42bf;
  align-self: flex-start;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 30px; /* 166.667% */
  letter-spacing: -2px;
`;

export const BImg = styled.img`
  width: 140px;
  height: 140px;
  flex-shrink: 0;
  border-radius: 10px;
  margin-bottom: 12px;
`;

export const BText = styled.div`
  width: 100%;
  height: 52px;
  flex-shrink: 0;
  color: #000;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.4;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export const BBtn = styled.div`
  display: flex;
  align-self: flex-end;
  justify-content: center;
  width: 50px;
  height: 20px;
  border-radius: 10px;
  background: #3a42bf;
  color: #fff;
  font-size: 10px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  margin-top: 7px;
`;
