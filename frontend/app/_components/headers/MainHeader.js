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
          position: "relative",
          paddingTop: "30px", // Add padding to make room for navbar
          backgroundImage:
            "linear-gradient(to right, rgba(164, 30, 53, .9), rgba(164, 30, 53, .55)), url('./images/tumorgan.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
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
