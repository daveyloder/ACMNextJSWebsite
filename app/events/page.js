"use client";

import React from "react";
import MainHeader from "../_components/headers/MainHeader";
import EventCard from "../_components/cards/EventCards";
import { EVENTS } from "../_shared/EVENTS";
import { Row } from "reactstrap";

const EventsPage = () => {
    const now = new Date();
    const startOfWeek = new Date();
    startOfWeek.setDate(now.getDate() - now.getDay());
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6);

    const currentEvents = EVENTS.filter((event) => {
        const eventDate = new Date(event.Date);
        return eventDate >= startOfWeek && eventDate <= endOfWeek;
    });

    const upcomingEvents = EVENTS.filter(
        (event) => new Date(event.Date) > endOfWeek
    );

    const pastEvents = EVENTS.filter(
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
    <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        {events.length > 0 ? (
            <Row>
                {events.map((event) => (
                    <EventCard key={event.id} event={event} />
                ))}
            </Row>
        ) : (
            <p className="text-gray-500">No events available.</p>
        )}
    </div>
);

export default EventsPage;
