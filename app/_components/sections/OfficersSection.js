import React from "react";
// Importing components from reactstrap for layout and design
import { Container, Row, Col } from "reactstrap";
// Importing Link from Next.js to handle internal/external navigation
import Link from "next/link";
// Importing icon from react-icons for displaying a group icon
import { MdGroups } from "react-icons/md";

import { getStrapiURL } from "@/app/_utils/api";

async function OfficerSection() {
  // Defining the brand color for consistent styling
  const templeRedColor = "#621220";
  try {
    const res = await fetch(getStrapiURL("/members"));
    const members = await res.json();
    // Filtering out only officers (those with officer: true)
    const officers = members.data.filter((member) => member.Role != "Member");

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
                    <Link
                      href="" // Link to the officer's profile
                      className="text-decoration-none" // Removes underline from link
                      target="_blank" // Opens the link in a new tab
                    >
                      {/* Officer's photo */}
                      <img
                        className="img-fluid rounded" // Ensures the image is responsive and rounded
                        width={150} // Fixed width for the image
                        height={150} // Fixed height for the image
                        src={
                          process.env.STRAPI_URL + officer.profilePicture.url
                        } // Officer's photo URL
                        alt={`${officer.FirstName + " " + officer.LastName} - ${
                          officer.Role
                        }`} // Alt text for the image
                      />
                      {/* Officer's name and position */}
                      <h4
                        className="text-muted mt-3"
                        style={{ fontWeight: 500 }}
                      >
                        {officer.FirstName + " " + officer.LastName}
                      </h4>
                      <p className="text-muted">{officer.Role}</p>
                    </Link>
                  </div>
                );
              })}
            </Row>
          </Container>
        </section>
      </>
    );
  } catch (error) {
    console.log("Error fetching from backend " + error);
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
                <p>Unable to load officers. Please try again later.</p>
              </Col>
            </Row>
          </Container>
        </section>
      </>
    );
  }
}

export default OfficerSection;
