import React from "react";
import ReportRank from "../components/ReportList/ReportRank";
import ReportList from "../components/ReportList/ReportList";
import { Div } from "../components/ReportList/ReportListStyle";

function ReportListPage() {
  return (
    <Div>
      <ReportRank />
      <ReportList />
    </Div>
  );
}

export default ReportListPage;
