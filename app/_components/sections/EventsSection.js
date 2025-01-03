import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";
import { FaCalendarAlt, FaCode, FaUsersCog } from "react-icons/fa";

const events = [
  {
    title: "ACM General Meeting",
    date: "January 10, 2025",
    description:
      "Join us for the first general meeting of the semester where we discuss plans and upcoming activities!",
    link: "https://temple.campuslabs.com/engage/organization/acm/events",
  },
  {
    title: "Hackathon Preparation Session",
    date: "January 15, 2025",
    description:
      "Get ready for the upcoming hackathon! Learn tips and tricks from experienced hackers.",
    link: "https://temple.campuslabs.com/engage/organization/acm/events",
  },
  {
    title: "Guest Speaker: AI & ML",
    date: "January 20, 2025",
    description:
      "Hear from an expert in Artificial Intelligence & Machine Learning about the latest trends and innovations.",
    link: "https://temple.campuslabs.com/engage/organization/acm/events",
  },
];
const EventSection = () => {
  const templeRedColor = "#621220";
  return (
    <section className="py-5" style={{ backgroundColor: templeRedColor }}>
      <div className="container ">
        <h2 className="text-center text-white mb-4">Upcoming Events</h2>
        <Row>
          {events.map((event, index) => (
            <Col md="4" key={index} className="mb-4">
              <Card className="d-flex flex-column h-100">
                <CardBody
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <CardTitle tag="h5">{event.title}</CardTitle>
                  <CardText className="text-muted">
                    <FaCalendarAlt /> {event.date}
                  </CardText>
                  <CardText style={{ maxHeight: "150px", overflowY: "auto" }}>
                    {event.description}
                  </CardText>
                  <Button
                    href={event.link}
                    target="_blank"
                    style={{ backgroundColor: templeRedColor }}
                  >
                    View All Events
                  </Button>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default EventSection;
