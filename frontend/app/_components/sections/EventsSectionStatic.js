"use client";
import React from "react";
import Link from "next/link";
import { Row, Col, Container } from "reactstrap";
import { EVENTS as hardcodedEvents } from "@/app/_shared/EVENTS";

const EventsSectionStatic = () => {
  const templeRedColor = "#621220";

  // Helper to sort events

  const sortedEvents = (events) => {
    return [...events].sort(
      (a, b) => new Date(a.Date) - new Date(b.Date)
    )
  }

  // Event filtering logic,same as EventsPage
  const now = new Date();
  const startOfWeek = new Date();
  startOfWeek.setDate(now.getDate() - now.getDay());
  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(startOfWeek.getDate() + 6);

  const currentEvents = hardcodedEvents.filter((event) => {
    const eventDate = new Date(event.Date);
    return eventDate >= startOfWeek && eventDate <= endOfWeek;
  });

  const upcomingEvents = hardcodedEvents.filter(
    (event) => new Date(event.Date) > endOfWeek
  );

  // Show "current events" first, fallback to "upcoming events"
  const displayEvents = sortedEvents(currentEvents.length > 0 ? currentEvents : upcomingEvents);

  return (
    <section
      id="events"
      className="py-5"
      style={{ backgroundColor: templeRedColor }}
    >
      <Container>
        <h2 className="text-center text-white mb-4">Upcoming Events</h2>

        {displayEvents.length > 0 ? (
          <Row>
            {displayEvents.map((event) => (
              <Col
                key={event.id}
                xs="12"
                sm="6"
                md="4"
                lg="3"
                className="mb-4"
              >

                <div className="card h-100">
                  {event.coverImage?.url && (
                    <img
                      src={event.coverImage.url}
                      alt={event.Title}
                      className="card-img-top"
                      style={{ height: "160px", objectFit: "cover" }}
                    />
                  )}
                  <div className="card-body">
                    <h5 className="card-title">{event.Title}</h5>
                    <p className="card-text mb-1 text-muted">
                      {new Date(event.Date).toLocaleDateString()}
                    </p>
                    <p className="card-text">{event.Time}</p>
                    <p className="card-text">{event.Location}</p>
                  </div>
                </div>

              </Col>
            ))}
            <div className="text-center mt-4">
              <Link href="/events" className="btn btn-light fw-bold">
                See All Events
              </Link>
            </div>
          </Row>

        ) : (
          <Row>
            <Col className="text-center text-white mb-4">
              <h4>Click the links below for events!</h4>
              <div className="d-flex justify-content-center gap-3 mb-3">
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
        )}
      </Container>
    </section>
  );

};

export default EventsSectionStatic;
