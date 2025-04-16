import React from "react";
// Importing necessary components from reactstrap to structure the layout
import { Container, Row, Col, Button } from "reactstrap";
// Importing icons from react-icons to represent different aspects of the ACM section
import { FaUsers, FaLaptopCode, FaHandsHelping } from "react-icons/fa";

const AboutSection = () => {
  // Define the color used in the brand styling (Temple University Red)
  const templeRedColor = "#621220";

  return (
    <section
      id="about" // ID used for anchor links (for smooth scrolling to this section)
      className="py-5" // Padding for top and bottom of the section
      style={{ backgroundColor: "#f8f9fa" }} // Light background color for the section
    >
      <Container>
        {/* Header Section */}
        <Row className="text-center mb-4">
          <Col xs="12">
            {/* Main title */}
            <h2 className="display-4" style={{ color: templeRedColor }}>
              What is ACM?
            </h2>
            {/* Brief description of ACM's role at Temple University */}
            <p className="lead">
              The Association for Computing Machinery (ACM) at Temple University
              is a student-run organization that provides opportunities to
              develop computing skills, foster professional connections, and
              contribute to the local and global tech community.
            </p>
          </Col>
        </Row>

        {/* Features Section */}
        <Row className="mb-5">
          {/* Collaborative Learning Feature */}
          <Col md="4" className="d-flex flex-column align-items-center mb-4">
            <div
              className="icon-container mb-3" // Styling for the icon container
              style={{
                backgroundColor: templeRedColor,
                borderRadius: "50%", // Making the container round
                padding: "20px", // Adding padding inside the icon container
              }}
            >
              {/* Icon for collaborative learning */}
              <FaUsers size="3em" style={{ color: "white" }} />
            </div>
            {/* Title and description for collaborative learning */}
            <h4 style={{ color: templeRedColor }}>Collaborative Learning</h4>
            <p>
              At ACM, we believe in learning by doing. Work on group projects,
              attend hackathons, and collaborate with peers to solve real-world
              problems.
            </p>
          </Col>

          {/* Skill Development Feature */}
          <Col md="4" className="d-flex flex-column align-items-center mb-4">
            <div
              className="icon-container mb-3"
              style={{
                backgroundColor: templeRedColor,
                borderRadius: "50%",
                padding: "20px",
              }}
            >
              {/* Icon for skill development */}
              <FaLaptopCode size="3em" style={{ color: "white" }} />
            </div>
            {/* Title and description for skill development */}
            <h4 style={{ color: templeRedColor }}>Skill Development</h4>
            <p>
              Enhance your coding and technical skills through workshops, coding
              challenges, and guest speaker events from industry experts.
            </p>
          </Col>

          {/* Community Impact Feature */}
          <Col md="4" className="d-flex flex-column align-items-center mb-4">
            <div
              className="icon-container mb-3"
              style={{
                backgroundColor: templeRedColor,
                borderRadius: "50%",
                padding: "20px",
              }}
            >
              {/* Icon for community impact */}
              <FaHandsHelping size="3em" style={{ color: "white" }} />
            </div>
            {/* Title and description for community impact */}
            <h4 style={{ color: templeRedColor }}>Community Impact</h4>
            <p>
              Get involved in community service projects and contribute to
              initiatives that use technology to solve social challenges.
            </p>
          </Col>
        </Row>

        {/* Button to encourage users to join ACM */}
        <Row className="text-center">
          <Col xs="12">
            <Button
              color="primary"
              size="lg"
              href="https://temple.campuslabs.com/engage/organization/acm" // Link to the "Join Now" section
              style={{
                backgroundColor: templeRedColor, // Custom button color
                borderColor: templeRedColor, // Custom border color
              }}
              className="mt-3" // Margin-top for spacing
            >
              Join ACM Today
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
