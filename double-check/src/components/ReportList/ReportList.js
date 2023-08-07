import React from "react";
import {
  Fdiv,
  LBtn,
  LDiv,
  LBox,
  ListSmall,
  ListBig,
  BTitle,
  BText,
  BBtn,
  BImg,
  SBox,
} from "./ReportListStyle";

function ReportList() {
  return (
    <>
      <Fdiv>허위뉴스를 신고해주세요</Fdiv>
      <LDiv>
        <LBtn>작성하기</LBtn>
        <LBox>
          <ListSmall>
            <SBox>
              <BTitle>사이버렉카 결국 수용</BTitle>
              <BText>
                어쩌구 저쩌구 콘텐츠 몇줄 미리보기 최대 세 줄까지만 가능합니다.
                테스트를 위해 겁나 많이 작성하고 있습니다 허은 최고
              </BText>
              <BBtn>더보기</BBtn>
            </SBox>
            <SBox>
              <BTitle>사이버렉카 결국 수용</BTitle>
              <BText>
                어쩌구 저쩌구 콘텐츠 몇줄 미리보기 최대 세 줄까지만 가능합니다.
                테스트를 위해 겁나 많이 작성하고 있습니다 허은 최고
              </BText>
              <BBtn>더보기</BBtn>
            </SBox>
            <SBox>
              <BTitle>사이버렉카 결국 수용</BTitle>
              <BText>
                어쩌구 저쩌구 콘텐츠 몇줄 미리보기 최대 세 줄까지만 가능합니다.
                테스트를 위해 겁나 많이 작성하고 있습니다 허은 최고
              </BText>
              <BBtn>더보기</BBtn>
            </SBox>
            <SBox>
              <BTitle>사이버렉카 결국 수용</BTitle>
              <BText>
                어쩌구 저쩌구 콘텐츠 몇줄 미리보기 최대 세 줄까지만 가능합니다.
                테스트를 위해 겁나 많이 작성하고 있습니다 허은 최고
              </BText>
              <BBtn>더보기</BBtn>
            </SBox>
          </ListSmall>
          <ListBig>
            <BTitle>사이버렉카 결국 수용</BTitle>
            <BImg />
            <BText>
              어쩌구 저쩌구 콘텐츠 몇줄 미리보기 최대 세 줄까지만 가능합니다.
              테스트를 위해 겁나 많이 작성하고 있습니다 허은 최고
            </BText>
            <BBtn>더보기</BBtn>
          </ListBig>
        </LBox>
      </LDiv>
    </>
  );
}

export default ReportList;
