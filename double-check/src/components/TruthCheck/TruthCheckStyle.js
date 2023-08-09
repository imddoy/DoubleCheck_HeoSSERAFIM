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
