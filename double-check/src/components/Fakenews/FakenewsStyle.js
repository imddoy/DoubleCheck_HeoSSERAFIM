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
  width: fit-content;
  margin: 0 auto;
  justify-content: center;
`;
export const Fdiv = styled.div`
  color: black;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 22px;

  align-self: flex-start;
`;

export const Flabel = styled.div`
  color: black;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const Form = styled.input`
  align-self: center;
  width: 646px;
  height: 63px;
  border-radius: 10px;
  border: 1px solid var(--neutral-300, #eff0f6);
  background: var(--white, #fff);

  /* Shadow */
  box-shadow: 0px 8px 25px 0px rgba(13, 10, 44, 0.06);

  margin: 12px 0 16px 0;
  padding: 20px 20px 20px 20px;
  ::placeholder {
    color: #aaa;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  ${responsiveWidth}
`;
export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
`;
export const Img = styled.img`
  width: 341px;
  height: 341px;
  border-radius: 10px;
  background: #d9d9d9;
  align-self: center;
  margin: 0 auto;
  margin-top: 7px;
  margin-bottom: 32px;

  @media screen and (max-width: 350px) {
    width: 280px;
    height: 280px;
  }
`;

export const BtnDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`;

export const FileInputLabel = styled.label`
  width: 646px;
  height: 50px;
  border-radius: 10px;
  border: 1px solid #eff0f6;
  background: var(--white, #fff);

  /* Shadow */
  box-shadow: 0px 8px 25px 0px rgba(13, 10, 44, 0.06);
  color: #525252;
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;

  ${responsiveWidth}
  cursor: pointer;
`;

export const Btn = styled.button`
  width: 305px;
  height: 50px;
  border-radius: 10px;
  border: 1px solid #eff0f6;
  background: ${(props) => props.bg};

  /* Shadow */
  box-shadow: 0px 8px 25px 0px rgba(13, 10, 44, 0.06);

  color: ${(props) => props.color};
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 834px) {
    width: 280px;
  }

  @media screen and (max-width: 615px) {
    width: 220px;
  }

  @media screen and (max-width: 500px) {
    width: 163px;
  }

  @media screen and (max-width: 350px) {
    width: 130px;
  }
`;
