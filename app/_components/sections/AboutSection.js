import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button,
} from "reactstrap";
import { FaUsers, FaLaptopCode, FaHandsHelping } from "react-icons/fa";

const AboutSection = () => {
  const templeRedColor = "#621220"; // The color you want to use

  return (
    <section
      id="about"
      className=" py-5"
      style={{ backgroundColor: "#f8f9fa" }}
    >
      <Container>
        <Row className="text-center mb-4">
          <Col xs="12">
            <h2 className="display-4" style={{ color: templeRedColor }}>
              What is ACM?
            </h2>
            <p className="lead">
              The Association for Computing Machinery (ACM) at Temple University
              is a student-run organization that provides opportunities to
              develop computing skills, foster professional connections, and
              contribute to the local and global tech community.
            </p>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col md="4" className="d-flex flex-column align-items-center mb-4">
            <div
              className="icon-container mb-3"
              style={{
                backgroundColor: templeRedColor,
                borderRadius: "50%",
                padding: "20px",
              }}
            >
              <FaUsers size="3em" style={{ color: "white" }} />
            </div>
            <h4 style={{ color: templeRedColor }}>Collaborative Learning</h4>
            <p>
              At ACM, we believe in learning by doing. Work on group projects,
              attend hackathons, and collaborate with peers to solve real-world
              problems.
            </p>
          </Col>

          <Col md="4" className="d-flex flex-column align-items-center mb-4">
            <div
              className="icon-container mb-3"
              style={{
                backgroundColor: templeRedColor,
                borderRadius: "50%",
                padding: "20px",
              }}
            >
              <FaLaptopCode size="3em" style={{ color: "white" }} />
            </div>
            <h4 style={{ color: templeRedColor }}>Skill Development</h4>
            <p>
              Enhance your coding and technical skills through workshops, coding
              challenges, and guest speaker events from industry experts.
            </p>
          </Col>

          <Col md="4" className="d-flex flex-column align-items-center mb-4">
            <div
              className="icon-container mb-3"
              style={{
                backgroundColor: templeRedColor,
                borderRadius: "50%",
                padding: "20px",
              }}
            >
              <FaHandsHelping size="3em" style={{ color: "white" }} />
            </div>
            <h4 style={{ color: templeRedColor }}>Community Impact</h4>
            <p>
              Get involved in community service projects and contribute to
              initiatives that use technology to solve social challenges.
            </p>
          </Col>
        </Row>

        <Row className="text-center">
          <Col xs="12">
            <Button
              color="primary"
              size="lg"
              href="#join-now"
              style={{
                backgroundColor: templeRedColor,
                borderColor: templeRedColor,
              }}
              className="mt-3"
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
