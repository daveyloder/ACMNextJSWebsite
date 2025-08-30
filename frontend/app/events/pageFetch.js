"use client";
import Link from "next/link";

import React, { useState, useEffect } from "react";
import MainHeader from "../_components/headers/MainHeader";
import LoadingSpinner from "../_components/LoadingSpinner";

const EventsPage = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/events?populate=*`) // Change this to your actual API endpoint
      .then((res) => res.json())
      .then((data) => {
        setEvents(data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching events:", error);
        setLoading(false);
      });
  }, []);

  const now = new Date();
  const startOfWeek = new Date();
  startOfWeek.setDate(now.getDate() - now.getDay()); // Start of the current week (Sunday)
  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(startOfWeek.getDate() + 6); // End of the current week (Saturday)

  const currentEvents = events.filter((event) => {
    const eventDate = new Date(event.Date);
    return eventDate >= startOfWeek && eventDate <= endOfWeek;
  });

  const upcomingEvents = events.filter(
    (event) => new Date(event.Date) > endOfWeek
  );
  const pastEvents = events.filter(
    (event) => new Date(event.Date) < startOfWeek
  );

  if (loading)
    return (
      <>
        <MainHeader pageHeader={"Events"} />
        <div className="container mx-auto p-4">
          <LoadingSpinner />
        </div>
      </>
    );

  return (
    <>
      <MainHeader pageHeader={"Events"} />
      <div className="container mx-auto p-4">
        <EventSection title="Current Events" events={currentEvents} />
        <EventSection title="Upcoming Events" events={upcomingEvents} />
        <EventSection title="Past Events" events={pastEvents} />
      </div>
    </>
  );
};

const EventSection = ({ title, events }) => (
  <div className="mb-5">
    <h2 className="h4 mb-3">{title}</h2>
    {events.length > 0 ? (
      <div className="d-flex overflow-auto pb-3">
        {events.map((event) => (
          <Link
            href={event.eventUrl || "/"} // Adjust the URL path as needed
            key={event.id}
            className="text-decoration-none text-dark"
          >
            <div
              className="card me-3 flex-shrink-0 h-100"
              style={{
                minWidth: "250px",
                maxWidth: "250px",
                cursor: "pointer",
              }}
            >
              <img
                src={
                  process.env.NEXT_PUBLIC_STRAPI_API_URL + event.coverImage?.url
                }
                alt={event.Title}
                className="card-img-top"
                style={{ height: "160px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{event.Title}</h5>
                <p className="card-text mb-1 text-muted">
                  {new Date(event.Date).toLocaleDateString()}
                </p>
                <p className="card-text">{event.Location}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    ) : (
      <p>No events available.</p>
    )}
  </div>
);

export default EventsPage;
