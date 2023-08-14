import React, { useState, useEffect } from "react";
import { Div } from "../components/TruthCheck/TruthCheckStyle";
import Detect from "../components/TruthCheck/Detect";
import Result from "../components/TruthCheck/Result";

function TruthCheckPage() {
  const [showDetect, setShowDetect] = useState(true);
  useEffect(() => {
    // 5초 후에 Detect 컴포넌트를 숨기고 Result 컴포넌트를 보여줍니다.
    const timer = setTimeout(() => {
      setShowDetect(false);
    }, 5000);

    // 컴포넌트가 언마운트될 때 타이머를 클리어합니다.
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return <Div>{showDetect ? <Detect /> : <Result />}</Div>;
}

export default TruthCheckPage;
