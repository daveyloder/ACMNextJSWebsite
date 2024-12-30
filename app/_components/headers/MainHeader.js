import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";

function MainHeader() {
  const overlayStyle = {};
  return (
    <>
      <header id="mainHeader" style={{ height: "300px", backgroundImage: "" }}>
        <Container className="pt-5 mb-4">
          <Row>
            <Col md={7}>
              <h1>Welcome to ACM</h1>
            </Col>
          </Row>
        </Container>
      </header>
    </>
  );
}

export default MainHeader;
