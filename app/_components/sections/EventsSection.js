import React from "react";
// Importing necessary components from reactstrap for layout and design
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
// Importing icons from react-icons for displaying event-related icons (calendar, code, etc.)
import { FaCalendarAlt, FaCode, FaUsersCog } from "react-icons/fa";

// Array of events for display. Each event includes a title, date, description, and link to more details.
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

// EventSection Component that displays the upcoming events in a card format
const EventSection = () => {
  const templeRedColor = "#621220"; // Define the brand color for the section

  return (
    <section
      id="events" // ID to anchor link this section for navigation purposes
      className="py-5" // Padding for spacing
      style={{ backgroundColor: templeRedColor }} // Background color for the section
    >
      <div className="container ">
        {/* Section heading */}
        <h2 className="text-center text-white mb-4">Upcoming Events</h2>

        {/* Check if there are any events to display */}
        <Row>
          {events.length == 0 ? (
            // If no events, show a message
            <Col className="text-center text-white mb-4">
              <h4>Currently No Events</h4>
              <p>Please check back soon!</p>
            </Col>
          ) : (
            // If there are events, map over the events array and display each event in a card
            events.map((event, index) => (
              <Col md="4" key={index} className="mb-4">
                <Card className="d-flex flex-column h-100">
                  {/* Card Body */}
                  <CardBody
                    style={{
                      display: "flex", // Flexbox for layout inside the card
                      flexDirection: "column", // Stack content vertically
                      justifyContent: "space-between", // Ensure spacing between content
                    }}
                  >
                    {/* Event Title */}
                    <CardTitle tag="h5">{event.title}</CardTitle>

                    {/* Event Date with Icon */}
                    <CardText className="text-muted">
                      <FaCalendarAlt /> {event.date}
                    </CardText>

                    {/* Event Description (limited height and scrollable if too long) */}
                    <CardText style={{ maxHeight: "150px", overflowY: "auto" }}>
                      {event.description}
                    </CardText>

                    {/* Button to link to the event page */}
                    <Button
                      href={event.link} // Link to the event details
                      target="_blank" // Open in a new tab
                      style={{ backgroundColor: templeRedColor }} // Custom button color
                    >
                      View Event
                    </Button>
                  </CardBody>
                </Card>
              </Col>
            ))
          )}
        </Row>
      </div>
    </section>
  );
};

export default EventSection;
