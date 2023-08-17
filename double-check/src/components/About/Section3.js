import React from "react";
import { D3iv, S3Div, Title3 } from "./AboutStyle";
import caputre from "../../img/chat.png";
import use from "../../img/howto.png";
import hmm from "../../img/hmm.gif";
function Section3() {
  return (
    <S3Div mt="200px">
      <Title3>
        DOUBLE CHECK, <span>이렇게 나오게 되었습니다</span>
      </Title3>
      <div style={{ position: "relative" }}>
        <D3iv src={caputre} />
        <img
          src={hmm}
          width={"13%"}
          style={{ position: "absolute", bottom: "10%", right: "2%" }}
        />
      </div>
      <D3iv src={use} />
    </S3Div>
  );
}

export default Section3;
