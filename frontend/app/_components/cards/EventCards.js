import React from "react";

import {
  Col,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
} from "reactstrap";
import { format } from "date-fns";
import Link from "next/link";

const EventCard = ({ event }) => {
  return (
    <Col xl={3} lg={4} md={6} sm={10} xs={12} className="mb-4 d-flex">
      <Link style={{ textDecoration: "none" }} href={event.eventUrl || "/"}>
        <Card
          className="h-100 shadow-sm "
          style={{ width: "100%", maxWidth: "350px", margin: "0 auto" }}
        >
          {event.coverImage && (
            <img
              src={process.env.STRAPI_URL + event.coverImage.url}
              className="card-img-top"
              alt={event.coverImage.alternativeText || event.Title}
              style={{ objectFit: "cover", height: "180px" }}
            />
          )}
          <CardBody>
            <CardTitle tag="h5">{event.Title}</CardTitle>
            <CardSubtitle className="mb-2 text-muted">
              {format(new Date(event.Date), "PPP")} at{" "}
              {format(new Date(event.Date), "p")}
            </CardSubtitle>
            <div className="mt-3">
              <p className="mb-1">
                <small className="text-muted">Location</small>
              </p>
              <CardText>{event.Location}</CardText>
            </div>
            <div className="mt-3">
              <p className="mb-1">
                <small className="text-muted">Organized by</small>
              </p>
              <CardText>{event.club?.Name || "Unknown"}</CardText>
            </div>
            <div className="mt-3">
              <p className="mb-1">
                <small className="text-muted">Description</small>
              </p>
              <CardText>
                {event.Description[0]?.children[0]?.text ||
                  "No Description availible"}
              </CardText>
            </div>
          </CardBody>
          <div className="card-footer bg-transparent">
            <small className="text-muted">
              Event Type: {event.eventType || "General"}
            </small>
          </div>
        </Card>
      </Link>
    </Col>
  );
};

export default EventCard;
