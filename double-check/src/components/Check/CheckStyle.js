import { styled, css } from "styled-components";

export const Main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 5em 18em;
  @media screen and (max-width: 1320px) {
    padding: 1em 6em;
  }
  @media screen and (max-width: 600px) {
    padding: 1em 2em;
  }
`;

export const InputBox = styled.div`
  width: 100%;
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
  ${(props) =>
    props.isClicked &&
    css`
      background-color: #3a42bf;
    `}
`;

export const Img = styled.img`
  width: 13px;
  cursor: pointer; /* 이미지에 마우스 포인터를 변경해 클릭 가능한 것처럼 보이게 함 */
`;

export const Input = styled.input`
  border: none;
  width: 100%;
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
  color: #fff;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const FilterBox = styled.div`
  width: 648px;
  height: 44px;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const Section = styled.div`
  width: 100%;
  margin-bottom: 100px;
  color: var(--black, #000);

  font-family: Pretendard;
  font-size: 1.2em;
  font-weight: 700;
  line-height: normal;
`;
