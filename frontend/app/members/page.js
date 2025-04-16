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
import MemberProfileCard from "./_components/cards/MemberProfileCard";

export default function Home() {
  const [members, setMembers] = useState([]);
  const [publishedDate, setPublishedDate] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const headerMetadata = {
    pageTitle: "ACM Member's Roster",
  };

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await fetch("http://localhost:1338/api/member-roster");
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        const data = await response.json();
        if (data && data.data && data.data.MemberJson) {
          setMembers(data.data.MemberJson);
        } else {
          setError("Failed to retrieve member data in the expected format.");
        }
        if (data && data.data && data.data.publishedAt) {
          setPublishedDate(data.data.publishedAt);
        } else {
          console.warn("Published date not found in the expected format.");
        }
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchMembers();
  }, []);

  const formatDate = (dateString) => {
    if (!dateString) {
      return "N/A";
    }
    const date = new Date(dateString);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString(undefined, options);
  };

  if (loading) {
    return (
      <>
        <MainHeader pageHeader={headerMetadata.pageTitle} />
        <section>
          <Container className="py-5">Loading members...</Container>
        </section>
      </>
    );
  }

  if (error) {
    return (
      <>
        <MainHeader pageHeader={headerMetadata.pageTitle} />
        <section>
          <Container className="py-5">Erro loading members: {error}</Container>
        </section>
      </>
    );
  }

  return (
    <>
      <MainHeader pageHeader={headerMetadata.pageTitle} />
      <section>
        <Container className="py-5">
          <Row>
            <Col lg={12}>
              <h4>Current Roster of ACM Members</h4>
              <p>Updated {publishedDate ? formatDate(publishedDate) : "N/A"}</p>
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
