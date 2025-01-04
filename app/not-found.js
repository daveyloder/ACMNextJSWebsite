"use client";
import React from "react";
import MainHeader from "./_components/headers/MainHeader";
import { Container, Row } from "reactstrap";

export default function NotFound() {
  const headerMetadata = {
    pageTitle: "404 - Page not found!",
  };
  return (
    <>
      <MainHeader pageHeader={headerMetadata.pageTitle} />
      <section className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
        <Container>
          <Row>
            <h3>The page you are looking for doesn't exist</h3>
          </Row>
        </Container>
      </section>
    </>
  );
}
