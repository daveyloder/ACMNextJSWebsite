import React from "react";

import { useState, useEffect } from "react";
// Importing components from reactstrap for layout and design
import { Container, Row, Col } from "reactstrap";
// Importing Link from Next.js to handle internal/external navigation
import Link from "next/link";
// Importing icon from react-icons for displaying a group icon
import { MdGroups } from "react-icons/md";

import { getStrapiURL } from "@/app/_utils/api";
import LoadingSpinner from "../LoadingSpinner";

function OfficerSection() {
  const templeRedColor = "#621220";
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(getStrapiURL("/members"));
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await res.json();
        setMembers(jsonData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <section
        id="officers" // Section ID for anchoring navigation links to this section
        className=" py-5" // Padding to space out content vertically
        style={{ backgroundColor: "#f8f9fa" }} // Light background color for the section
      >
        <Container className="mx-auto px-4">
          {" "}
          {/* Container for responsive layout */}
          <Row>
            {/* Header for the officers' section */}
            <Col lg={12}>
              <div className="text-center">
                {/* Icon representing a group of people */}
                <MdGroups size={100} style={{ color: templeRedColor }} />
                {/* Section Title */}
                <h2 className="text-3xl font-bold mb-4">Our E-Board Members</h2>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={12} className="text-center">
              <LoadingSpinner />
            </Col>
          </Row>
        </Container>
      </section>
    );
  }

  if (error) {
    return (
      <>
        {/* Officer section */}
        <section
          id="officers" // Section ID for anchoring navigation links to this section
          className=" py-5" // Padding to space out content vertically
          style={{ backgroundColor: "#f8f9fa" }} // Light background color for the section
        >
          <Container className="mx-auto px-4">
            {" "}
            {/* Container for responsive layout */}
            <Row>
              {/* Header for the officers' section */}
              <Col lg={12}>
                <div className="text-center">
                  {/* Icon representing a group of people */}
                  <MdGroups size={100} style={{ color: templeRedColor }} />
                  {/* Section Title */}
                  <h2 className="text-3xl font-bold mb-4">
                    Our E-Board Members
                  </h2>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="text-center">
                <p>
                  Unable to load officers. Please try again later. Error:{" "}
                  {error}
                </p>
              </Col>
            </Row>
          </Container>
        </section>
      </>
    );
  }
  const officers = members.data.filter((member) => member.Role !== "Member");
  return (
    <>
      {/* Officer section */}
      <section
        id="officers" // Section ID for anchoring navigation links to this section
        className=" py-5" // Padding to space out content vertically
        style={{ backgroundColor: "#f8f9fa" }} // Light background color for the section
      >
        <Container className="mx-auto px-4">
          {" "}
          {/* Container for responsive layout */}
          <Row>
            {/* Header for the officers' section */}
            <Col lg={12}>
              <div className="text-center">
                {/* Icon representing a group of people */}
                <MdGroups size={100} style={{ color: templeRedColor }} />
                {/* Section Title */}
                <h2 className="text-3xl font-bold mb-4">Our E-Board Members</h2>
              </div>
            </Col>
          </Row>
          <Row>
            {/* Mapping through the officers and rendering their details */}
            {officers.map((officer) => {
              // Class name adjustment for dynamic layout based on the number of officers
              let className = "text-center col-md-4 col-sm-6 col-xs-6";

              // Special layout adjustments if the number of officers is small or even
              if (officers.length - 1 <= 1) {
                className =
                  "text-center col-md-offset-4 col-md-6 col-sm-6 col-xs-6";
              } else if (officers.length % 2 == 0) {
                className =
                  "text-center col-md-offset-4 col-md-3 col-sm-6 col-xs-6";
              }

              return (
                <div key={officer.id} className={className}>
                  {/* Link to the officer's profile (LinkedIn, personal page, etc.) */}

                  {/* Officer's photo */}
                  <img
                    className="img-fluid rounded" // Ensures the image is responsive and rounded
                    width={150} // Fixed width for the image
                    height={150} // Fixed height for the image
                    src={process.env.STRAPI_URL + officer.profilePicture.url} // Officer's photo URL
                    alt={`${officer.FirstName + " " + officer.LastName} - ${
                      officer.Role
                    }`} // Alt text for the image
                  />
                  {/* Officer's name and position */}
                  <h4 className="text-muted mt-3" style={{ fontWeight: 500 }}>
                    {officer.FirstName + " " + officer.LastName}
                  </h4>
                  <p className="text-muted">{officer.Role}</p>
                </div>
              );
            })}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default OfficerSection;
