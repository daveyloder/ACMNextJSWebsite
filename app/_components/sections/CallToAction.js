import React from "react";
// Importing necessary components from reactstrap to structure the layout
import {
  Button,
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";
// Importing icons from react-icons for visual elements in the call-to-action cards
import { FaUserPlus, FaLaptopCode, FaUniversity } from "react-icons/fa";

const CallToAction = () => {
  // Define the color used in the branding (Temple University Red)
  const templeRedColor = "#621220";

  return (
    <section
      className="cta-section text-white py-5" // Background color for the section and white text
      style={{ backgroundColor: templeRedColor }} // Custom red background for the call-to-action section
    >
      <Container>
        {/* Heading and introductory text */}
        <Row className="text-center">
          <Col xs="12">
            <h2 className="display-4">Join ACM at Temple University</h2>
            <p className="lead">
              Become a part of the premier student organization for computing
              enthusiasts. Connect, learn, and grow with like-minded
              individuals.
            </p>
            {/* Button to navigate to membership page */}
            <Button
              color="light" // Light-colored button to contrast against the dark background
              size="lg" // Large button size
              href="https://temple.campuslabs.com/engage/organization/acm" // Link to the ACM membership page
              className="mt-3" // Margin-top for spacing
              style={{ color: templeRedColor }} // Custom button text color (Temple red)
            >
              <FaUserPlus className="me-2" />{" "}
              {/* Icon indicating adding members */}
              Become a Member
            </Button>
          </Col>
        </Row>

        {/* Cards section to explain the benefits of joining ACM */}
        <Row className="mt-5">
          {/* Card for enhancing skills */}
          <Col md="4" className="d-flex justify-content-center mb-4">
            <Card className="shadow-sm text-center">
              <CardBody>
                {/* Icon representing skill enhancement */}
                <FaLaptopCode size="3em" style={{ color: templeRedColor }} />
                <CardTitle tag="h4" className="mt-3">
                  Enhance Your Skills
                </CardTitle>
                <CardText>
                  Participate in workshops, hackathons, and seminars to take
                  your coding skills to the next level.
                </CardText>
              </CardBody>
            </Card>
          </Col>

          {/* Card for building a professional network */}
          <Col md="4" className="d-flex justify-content-center mb-4">
            <Card className="shadow-sm text-center">
              <CardBody>
                {/* Icon representing networking */}
                <FaUniversity size="3em" style={{ color: templeRedColor }} />
                <CardTitle tag="h4" className="mt-3">
                  Build Your Network
                </CardTitle>
                <CardText>
                  Meet professors, professionals, and fellow students who share
                  your passion for computing.
                </CardText>
              </CardBody>
            </Card>
          </Col>

          {/* Card for getting involved in the community */}
          <Col md="4" className="d-flex justify-content-center mb-4">
            <Card className="shadow-sm text-center">
              <CardBody>
                {/* Icon representing involvement */}
                <FaUserPlus size="3em" style={{ color: templeRedColor }} />
                <CardTitle tag="h4" className="mt-3">
                  Get Involved
                </CardTitle>
                <CardText>
                  Gain leadership experience by joining committees or
                  participating in our events.
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CallToAction;
