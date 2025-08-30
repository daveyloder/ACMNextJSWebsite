"use client";
import Link from "next/link";
import React from "react";
import MainHeader from "../_components/headers/MainHeader";
import { EVENTS as hardcodedEvents } from "../_shared/EVENTS";

const EventsPage = () => {
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

    const pastEvents = hardcodedEvents.filter(
        (event) => new Date(event.Date) < startOfWeek
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

                    <div
                        className="card me-3 flex-shrink-0 h-100"
                        style={{
                            minWidth: "250px",
                            maxWidth: "250px",
                            cursor: "pointer",
                        }}
                    >
                        <img
                            src={event.coverImage?.url}
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

                ))}
            </div>
        ) : (
            <p>No events available.</p>
        )}
    </div>
);

export default EventsPage;
