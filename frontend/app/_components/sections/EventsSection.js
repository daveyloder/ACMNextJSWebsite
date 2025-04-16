import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { getStrapiURL } from "@/app/_utils/api";
import LoadingSpinner from "@/app/_components/LoadingSpinner";
import EventCard from "@/app/_components/cards/EventCards";

const EventSection = () => {
  const templeRedColor = "#621220";
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(getStrapiURL("/events"));
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await res.json();
        const now = new Date();
        const upcomingEvents = jsonData.data.filter((event) => {
          const eventDate = new Date(event.Date);
          return eventDate >= now;
        });
        setEvents({ ...jsonData, data: upcomingEvents });
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const renderSection = (content) => (
    <section
      id="events"
      className="py-5"
      style={{ backgroundColor: templeRedColor }}
    >
      <Container>
        <h2 className="text-center text-white mb-4">Upcoming Events</h2>
        <Row className="justify-content-center text-white">{content}</Row>
      </Container>
    </section>
  );

  if (loading) {
    return renderSection(
      <Col className="text-center">
        <LoadingSpinner />
      </Col>
    );
  }

  if (error) {
    return renderSection(
      <Col className="text-center">
        <p>Unable to load events. Error: {error}</p>
      </Col>
    );
  }

  if (!events.data || events.data.length === 0) {
    return renderSection(
      <>
        <Col className="text-center">
          <p>
            There are no events currently or upcoming. Please check back again
            later.
          </p>
        </Col>
        <Col xs="12" className="text-center mt-4">
          <Button
            color="light"
            href="/events"
            style={{ color: templeRedColor, fontWeight: "bold" }}
          >
            Check Out All Events
          </Button>
        </Col>
      </>
    );
  }

  return renderSection(
    <>
      {events.data.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
      <Col xs="12" className="text-center mt-4">
        <Button
          color="light"
          href="/events"
          style={{ color: templeRedColor, fontWeight: "bold" }}
        >
          Check Out More Events
        </Button>
      </Col>
    </>
  );
};

export default EventSection;
