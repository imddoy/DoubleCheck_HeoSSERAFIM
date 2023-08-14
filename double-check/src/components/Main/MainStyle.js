import { styled, css } from "styled-components";
import Filter from "./../Trends/FilterMobile";

const responsiveWidth = css`
  @media screen and (max-width: 834px) {
    width: 626px;
  }

  @media screen and (max-width: 680px) {
    width: 480px;
  }
  @media screen and (max-width: 500px) {
    width: 380px;
  }
  @media screen and (max-width: 400px) {
    width: 300px;
  }
`;
export const InputBox = styled.div`
  width: 648px;
  height: 44px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid var(--ain, #3a42bf);
  margin: 22px 0;
  color: var(--ain, #3a42bf);

  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  ::placeholder {
    color: #3a42bf;
  }
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 20px;
  box-shadow: 0px 8px 25px 0px rgba(13, 10, 44, 0.06);

  ${responsiveWidth}
`;

export const Img = styled.img`
  width: 13px;
  cursor: pointer; /* 이미지에 마우스 포인터를 변경해 클릭 가능한 것처럼 보이게 함 */
`;

export const Input = styled.input`
  border: none;
  width: 648px;
  height: 44px;
  outline: none;

  font-family: Pretendard;
  font-size: 0.7em;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  ::placeholder {
    color: #3a42bf;
  }
  background: none;
  color: #3a42bf;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  ${responsiveWidth}
`;

export const Input2 = styled.div`
  width: 648px;
  height: 44px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid var(--ain, #3a42bf);
  margin: 22px 0;
  color: var(--ain, #3a42bf);

  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 20px;
  box-shadow: 0px 8px 25px 0px rgba(13, 10, 44, 0.06);

  ${responsiveWidth}
`;
export const FilterBox = styled.div`
  width: 648px;
  height: 44px;

  display: flex;
  flex-wrap: wrap;
  align-items: center;

  ${responsiveWidth}
`;

export const Section = styled.div`
  color: var(--black, #000);

  font-family: Pretendard;
  font-size: 1.2em;
  font-weight: 700;
  line-height: normal;

  margin-top: 120px;
  margin-bottom: ${(props) => props.mb};
`;

export const ResponsiveImage = styled.img`
  display: none;
  width: 232px;
  height: 232px;
  @media screen and (max-width: 834px) {
    display: block;
    margin-top: 30px;
  }
`;
