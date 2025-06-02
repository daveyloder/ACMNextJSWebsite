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
  const descriptionText =
    event.Description?.[0]?.children?.[0]?.text || event.Description || "No description available";

  const imageUrl = event.coverImage?.url?.startsWith("http")
    ? event.coverImage.url
    : process.env.STRAPI_URL
      ? process.env.STRAPI_URL + event.coverImage?.url
      : event.coverImage?.url;

  return (
    <Col xl={3} lg={4} md={6} sm={10} xs={12} className="mb-4 d-flex">
      <Link href={event.eventUrl || "/"} style={{ textDecoration: "none", width: "100%" }}>
        <Card className="h-100 shadow-sm" style={{ maxWidth: "350px", margin: "0 auto" }}>
          {event.coverImage?.url && (
            <img
              src={imageUrl}
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
              <CardText>{descriptionText}</CardText>
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
