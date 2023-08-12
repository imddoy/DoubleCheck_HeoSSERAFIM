import { styled, css } from "styled-components";

/*공통된 반응형 넓이*/
const responsiveWidth = css`
  @media screen and (max-width: 834px) {
    width: 590px;
  }

  @media screen and (max-width: 615px) {
    width: 490px;
  }

  @media screen and (max-width: 500px) {
    width: 341px;
  }

  @media screen and (max-width: 350px) {
    width: 280px;
  }
`;

const responsiveHeight = css`
  @media screen and (max-width: 834px) {
    height: 350px;
  }

  @media screen and (max-width: 615px) {
    height: 300.439px;
  }

  @media screen and (max-width: 500px) {
    height: 192px;
  }

  @media screen and (max-width: 350px) {
    height: 192px;
  }
`;

export const FilterBox = styled.div`
  width: 626px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-bottom: 10px;
  ${responsiveWidth}
`;

export const FilterBox2 = styled.div`
  width: 626px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-bottom: 10px;
  ${responsiveWidth}
`;
export const FilterDiv = styled.div`
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  width: fit-content;
  height: 30px;
  z-index: 1;
  border-radius: 5px;
  border: 1px solid #3a42bf;
  background-color: #3a42bf;
  color: white;
  text-align: center;
  display: flex;
  align-items: center;
  padding: 7px 5px 7px 5px;
  cursor: pointer;

  &:hover {
    background-color: white;
    border: 1px solid #3a42bf;
    color: #3a42bf;
  }
`;

export const ListImg = styled.img`
  width: 626px;
  height: 351.439px;
  border-radius: 8px;
  margin-top: 22px;
  margin-bottom: 30px;
  object-fit: cover;
  ${responsiveWidth}
  ${responsiveHeight}
`;

export const TDiv = styled.div`
  width: 626px;
  display: flex;
  justify-content: space-between;

  ${responsiveWidth}
`;

export const Title = styled.div`
  color: #242424;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
`;

export const Percent = styled.div`
  color: #3a42bf;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  margin-right: 30px;

  @media screen and (max-width: 500px) {
    margin-right: 0;
  }
`;
