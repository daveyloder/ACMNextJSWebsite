import React from "react";
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
import { FaUserPlus, FaLaptopCode, FaUniversity } from "react-icons/fa";

const CallToAction = () => {
  const templeRedColor = "#621220";
  return (
    <section
      className="cta-section text-white py-5"
      style={{ backgroundColor: templeRedColor }}
    >
      <Container>
        <Row className="text-center">
          <Col xs="12">
            <h2 className="display-4">Join ACM at Temple University</h2>
            <p className="lead">
              Become a part of the premier student organization for computing
              enthusiasts. Connect, learn, and grow with like-minded
              individuals.
            </p>
            <Button
              color="light"
              size="lg"
              href="https://temple.campuslabs.com/engage/organization/acm"
              className="mt-3"
              style={{ color: templeRedColor }}
            >
              <FaUserPlus className="me-2" />
              Become a Member
            </Button>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col md="4" className="d-flex justify-content-center mb-4">
            <Card className="shadow-sm text-center">
              <CardBody>
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
          <Col md="4" className="d-flex justify-content-center mb-4">
            <Card className="shadow-sm text-center">
              <CardBody>
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
          <Col md="4" className="d-flex justify-content-center mb-4">
            <Card className="shadow-sm text-center">
              <CardBody>
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
