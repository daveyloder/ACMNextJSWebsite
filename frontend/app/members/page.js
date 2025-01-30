"use client";

import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  InputGroup,
  Input,
  InputGroupText,
  Card,
  CardBody,
  CardText,
  CardTitle,
} from "reactstrap";
import Link from "next/link";
import MainHeader from "@/app/_components/headers/MainHeader";

import { MEMBERS } from "../_shared/MEMBERS";
import MemberProfileCard from "./_components/cards/MemberProfileCard";

export default function Home() {
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
              <p>
                Updated January 19<sup>th</sup>, 2025
              </p>
              <p>Currently {MEMBERS.count} members enrolled</p>
            </Col>
          </Row>
          <Row>
            {MEMBERS.map((member, index) => {
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
