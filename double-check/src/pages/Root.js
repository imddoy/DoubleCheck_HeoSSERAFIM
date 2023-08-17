import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import GlobalStyles from "../GlobalStyle";

function Root() {
  return (
    <>
      <div
        style={{
          display: "flex",
          minHeight: "100vh",
          flexDirection: "column",
        }}
      >
        <div style={{ flex: "1" }}>
          <GlobalStyles />
          <Nav />
          <Outlet
            style={{
              height: "auto",
              minHeight: "100%",
              paddingBottom: "218px",
            }}
          />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Root;
