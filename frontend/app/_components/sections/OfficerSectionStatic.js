import React from "react";
// Importing components from reactstrap for layout and design
import { Container, Row, Col } from "reactstrap";
// Importing Link from Next.js to handle internal/external navigation
import Link from "next/link";
// Importing icon from react-icons for displaying a group icon
import { MdGroups } from "react-icons/md";

function OfficerSectionStatic() {
  // Array of officers, each containing details like name, position, photo, bio, and link to LinkedIn or email
  const members = [
    {
      id: 2,
      name: "Adyan Chowdhury",
      position: "Co-President",
      photo:
        "/images/uploads/Adyan_Chowdhury.jpg",
      bio: `Honors CS Major`,
      link: "https://www.linkedin.com/in/adyan-chowdhury/",
      githubLink: "https://github.com/adyan1025",
      email: [
        {
          id: 1,
          name: "School Email",
          email: "",
        },
      ],
      officer: true,
    },

    {
      id: 3,
      name: "Kush Patel",
      position: "Co-President",
      photo: "/images/uploads/Kush_Patel.jpg",
      bio: `Honors CS Major`,
      link: "https://www.linkedin.com/in/kushpatel00/",
      email: [
        {
          id: 1,
          name: "School Email",
          email: "",
        },
      ],
      officer: true,
    },
    {
      id: 4,
      name: "Chandu Rachamadugu",
      position: "Co-Vice President",
      photo: "https://avatar.iran.liara.run/public/10",
      bio: ``,
      link: "/",
      githubLink: "",
      email: [
        {
          id: 1,
          name: "School Email",
          email: "",
        },
      ],
      officer: true,
    },
    {
      id: 5,
      name: "Dev Patel",
      position: "Co-Vice President",
      photo: "https://avatar.iran.liara.run/public/45",
      bio: ``,
      link: "/",
      githubLink: "",
      email: [
        {
          id: 1,
          name: "School Email",
          email: "",
        },
      ],
      officer: true,
    },
    {
      id: 6,
      name: "Zephyr Consumido",
      position: "Secretary",
      photo: "https://avatar.iran.liara.run/public/53",
      bio: ``,
      link: "/",
      githubLink: "",
      email: [
        {
          id: 1,
          name: "School Email",
          email: "",
        },
      ],
      officer: true,
    },
    {
      id: 7,
      name: "Avery (Ariunjargal) Terbish",
      position: "Treasurer",
      photo: "https://avatar.iran.liara.run/public/41",
      bio: ``,
      link: "/",
      githubLink: "",
      email: [
        {
          id: 1,
          name: "School Email",
          email: "",
        },
      ],
      officer: true,
    },
    {
      id: 7,
      name: "Antonio Lazaro",
      position: "Community Chair",
      photo: "https://avatar.iran.liara.run/public/1",
      bio: ``,
      link: "/",
      githubLink: "",
      email: [
        {
          id: 1,
          name: "School Email",
          email: "",
        },
      ],
      officer: true,
    },
    {
      id: 8,
      name: "Beatriz Souza de Cerqueira",
      position: "Community Outreach",
      photo:
        "https://avatar.iran.liara.run/public/77",
      bio: "",
      link: "/",
      email: [
        {
          id: 1,
          name: "School Email",
          email: "",
        },
      ],
      officer: true,
    },
    {
      id: 9,
      name: "John Kroll",
      position: "Social Media Manager",
      photo:
        "https://avatar.iran.liara.run/public/39",
      bio: "",
      link: "/",
      email: [
        {
          id: 1,
          name: "School Email",
          email: "",
        },
      ],
      officer: true,
    },
    {
      id: 10,
      name: "Kristina Petanaj",
      position: "Social Media Manager",
      photo:
        "https://avatar.iran.liara.run/public/78",
      bio: "/",
      link: "/",
      email: [
        {
          id: 1,
          name: "School Email",
          email: "",
        },
      ],
      officer: true,
    },
    {
      id: 11,
      name: "Manifest (Eric) Akosah Jr.",
      position: "Photographer",
      photo:
        "https://avatar.iran.liara.run/public/26",
      bio: "",
      link: "/",
      email: [
        {
          id: 1,
          name: "School Email",
          email: "",
        },
      ],
      officer: true,
    },
    {
      id: 12,
      name: "David Loder",
      position: "Web Developer",
      photo:
        "/images/uploads/davidloder.jpeg",
      bio: "",
      link: "https://www.linkedin.com/in/daveloder/",
      email: [
        {
          id: 1,
          name: "School Email",
          email: "",
        },
      ],
      officer: true,
    },
    {
      id: 13,
      name: "Claudia Pine-Simon",
      position: "Faculty Advisor",
      photo:
        "https://cis.temple.edu/assets/img/people/ed6469dfdcd34cb21311df6011ec4c8c.jpg",
      bio: "Professor",
      link: "https://www.linkedin.com/in/claudia-pine-simon-7b47b11/",
      email: [
        {
          id: 1,
          name: "School Email",
          email: "",
        },
      ],
      officer: true,
    },
  ];

  // Filtering out only officers (those with officer: true)
  const officers = members.filter((member) => member.officer);

  // Defining the brand color for consistent styling
  const templeRedColor = "#621220";

  return (
    <>
      {/* Officer section */}
      <section
        id="officers" // Section ID for anchoring navigation links to this section
        className=" py-5" // Padding to space out content vertically
        style={{ backgroundColor: "#f8f9fa" }} // Light background color for the section
      >
        <Container className="mx-auto px-4">
          {" "}
          {/* Container for responsive layout */}
          <Row>
            {/* Header for the officers' section */}
            <Col lg={12}>
              <div className="text-center">
                {/* Icon representing a group of people */}
                <MdGroups size={100} style={{ color: templeRedColor }} />
                {/* Section Title */}
                <h2 className="text-3xl font-bold mb-4">Our E-Board Members</h2>
              </div>
            </Col>
          </Row>
          <Row>
            {/* Mapping through the officers and rendering their details */}
            {officers.map((officer) => {
              // Class name adjustment for dynamic layout based on the number of officers
              let className = "text-center col-md-4 col-sm-6 col-xs-6";

              // Special layout adjustments if the number of officers is small or even
              if (officers.length - 1 <= 1) {
                className =
                  "text-center col-md-offset-4 col-md-6 col-sm-6 col-xs-6";
              } else if (officers.length % 2 == 0) {
                className =
                  "text-center col-md-offset-4 col-md-3 col-sm-6 col-xs-6";
              }

              return (
                <div key={officer.id} className={className}>
                  {/* Link to the officer's profile (LinkedIn, personal page, etc.) */}
                  <Link
                    href={officer.link} // Link to the officer's profile
                    className="text-decoration-none" // Removes underline from link
                    target="_blank" // Opens the link in a new tab
                  >
                    {/* Officer's photo */}
                    <img
                      className="img-fluid rounded" // Ensures the image is responsive and rounded
                      width={150} // Fixed width for the image
                      height={150} // Fixed height for the image
                      src={officer.photo} // Officer's photo URL
                      alt={`${officer.name} - ${officer.position}`} // Alt text for the image
                    />
                    {/* Officer's name and position */}
                    <h4 className="text-muted mt-3" style={{ fontWeight: 500 }}>
                      {officer.name}
                    </h4>
                    <p className="text-muted">{officer.position}</p>
                  </Link>
                </div>
              );
            })}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default OfficerSectionStatic;