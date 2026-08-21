"use client";

import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import MainHeader from "@/app/_components/headers/MainHeader";
import MemberProfileCard from "./_components/cards/MemberProfileCard";
import { MEMBERS } from "@/app/_shared/MEMBERS";

export default function Home() {
  const [members] = useState(MEMBERS);

  const headerMetadata = {
    pageTitle: "ACM Member's Roster",
  };

  return (
    <>
      <MainHeader pageHeader={headerMetadata.pageTitle} />
      <section>
        <Container className="py-5">
          <Row>
            <Col lg={12}>
              <h4>Current Roster of ACM Members</h4>
              <p>Currently {members.length} members enrolled</p>
            </Col>
          </Row>
          <Row>
            {members.map((member, index) => {
              return (
                <Col key={index} md={4} className="mb-4">
                  <MemberProfileCard member={member} />
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
    </>
  );
}
