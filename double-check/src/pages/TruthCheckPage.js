import React from "react";
import { Div } from "../components/TruthCheck/TruthCheckStyle";
import Detect from "../components/TruthCheck/Detect";
import Result from "../components/TruthCheck/Result";

function TruthCheckPage() {
  return (
    <Div>
      <Detect />
      <Result />
    </Div>
  );
}

export default TruthCheckPage;
