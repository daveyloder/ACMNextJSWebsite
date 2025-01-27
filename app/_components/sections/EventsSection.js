import React from "react";
import { useState, useEffect } from "react";
// Importing necessary components from reactstrap for layout and design
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
} from "reactstrap";
import { format } from "date-fns";
// Importing icons from react-icons for displaying event-related icons (calendar, code, etc.)
import { FaCalendarAlt, FaCode, FaUsersCog } from "react-icons/fa";
import LoadingSpinner from "../LoadingSpinner";
import Link from "next/link";

// EventSection Component that displays the upcoming events in a card format
const EventSection = () => {
  const templeRedColor = "#621220"; // Define the brand color for the section
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:1338/api/events?populate=*");
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await res.json();
        setEvents(jsonData);
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
        id="events" // ID to anchor link this section for navigation purposes
        className="py-5" // Padding for spacing
        style={{ backgroundColor: templeRedColor }} // Background color for the section
      >
        <div className="container ">
          <h2 className="text-center text-white mb-4">Upcoming Events</h2>
          <Row>
            <Col className="text-center text-white mb-4">
              <LoadingSpinner />
            </Col>
          </Row>
        </div>
      </section>
    );
  }
  if (error) {
    return (
      <section
        id="events" // ID to anchor link this section for navigation purposes
        className="py-5" // Padding for spacing
        style={{ backgroundColor: templeRedColor }} // Background color for the section
      >
        <div className="container ">
          <h2 className="text-center text-white mb-4">Upcoming Events</h2>
          <Row>
            <Col className="text-center text-white mb-4">
              <p>Unable to load events. Error: {error}</p>
            </Col>
          </Row>
        </div>
      </section>
    );
  }
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
          {events.data.map((event) => (
            <div key={event.id} className="col">
              <div className="card h-100 shadow-sm" style={{ width: "18rem " }}>
                {event.coverImage && (
                  <img
                    src={process.env.STRAPI_URL + event.coverImage.url}
                    className="card-img-top"
                    alt={event.coverImage.alternativeText || event.Title}
                    style={{ objectFit: "cover" }}
                  />
                )}
                <div className="card-body">
                  <h5 className="card-title">{event.Title}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {format(new Date(event.Date), "PPP")} at{" "}
                    {format(new Date(event.Date), "p")}
                  </h6>
                  <div className="mt-3">
                    <p className="mb-1">
                      <small className="text-muted">Location</small>
                    </p>
                    <p className="card-text">{event.Location}</p>
                  </div>
                  <div className="mt-3">
                    <p className="mb-1">
                      <small className="text-muted">Organized by</small>
                    </p>
                    <p className="card-text">{event.club.Name || ""}</p>
                  </div>
                  <div className="mt-3">
                    <p className="mb-1">
                      <small className="text-muted">Description</small>
                    </p>
                    <p className="card-text">
                      {event.Description[0].children[0].text}
                    </p>
                  </div>
                </div>
                <div className="card-footer bg-transparent">
                  <small className="text-muted">
                    Event Type: {event.eventType}
                  </small>
                </div>
              </div>
            </div>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default EventSection;
