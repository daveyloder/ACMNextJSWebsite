import React from "react";
// Importing necessary components from reactstrap for layout and design
import {

  Row,
  Col,

} from "reactstrap";
import Link from "next/link";

// Array of events for display. Each event includes a title, date, description, and link to more details.


// EventSection Component that displays the upcoming events in a card format
const EventsSectionStatic = () => {
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

export default EventsSectionStatic;