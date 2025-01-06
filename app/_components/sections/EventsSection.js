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
import Link from "next/link";

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
          <Col className="text-center text-white mb-4">
            <h4>Click the links below for events!</h4>
            <div className="flex justify-center gap-4">
              <Link
                href="https://discord.gg/EaM5tA62vh"
                target="_blank"
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
              >
                Join Discord
              </Link>
              <Link
                href="https://temple.campuslabs.com/engage/organization/acm/events"
                target="_blank"
                className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
              >
                Owl Connect Events
              </Link>
            </div>
            <p>Please check back soon for more updates</p>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default EventSection;
