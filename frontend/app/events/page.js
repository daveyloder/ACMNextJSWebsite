"use client";

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
  <div className="mb-8">
    <h2 className="text-2xl font-semibold mb-4">{title}</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {events.length > 0 ? (
        events.map((event) => (
          <div
            key={event.id}
            className="border p-4 rounded-lg shadow-md transition-transform transform hover:scale-105"
          >
            <img
              src={
                process.env.NEXT_PUBLIC_STRAPI_API_URL + event.coverImage?.url
              }
              alt={event.Title}
              className="w-full h-48 object-cover rounded-lg mb-3"
            />
            <h3 className="text-lg font-semibold">{event.Title}</h3>
            <p className="text-sm text-gray-600">
              {new Date(event.Date).toLocaleDateString()}
            </p>
            <p className="text-sm">{event.Location}</p>
          </div>
        ))
      ) : (
        <p>No events available.</p>
      )}
    </div>
  </div>
);

export default EventsPage;
