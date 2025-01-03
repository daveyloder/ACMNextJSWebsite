import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import NavbarComponent from "@/app/_components/navbars/NavbarComponent";

function MainHeader({ pageHeader }) {
  const overlayStyle = {};
  return (
    <>
      <header
        id="mainHeader"
        style={{
          height: "300px",
          backgroundImage: "",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
        }}
        className="site-header"
      >
        <NavbarComponent />
        <div className="page-titlebar">
          <Container>
            <h1 className="page-title">{pageHeader}</h1>
          </Container>
        </div>
      </header>
    </>
  );
}

export default MainHeader;
