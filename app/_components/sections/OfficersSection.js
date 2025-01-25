import React from "react";
// Importing components from reactstrap for layout and design
import { Container, Row, Col } from "reactstrap";
// Importing Link from Next.js to handle internal/external navigation
import Link from "next/link";
// Importing icon from react-icons for displaying a group icon
import { MdGroups } from "react-icons/md";

import { getStrapiURL } from "@/app/_utils/api";

async function OfficerSection() {
  const res = await fetch(getStrapiURL("/members"));
  const members = await res.json();

  // // Array of officers, each containing details like name, position, photo, bio, and link to LinkedIn or email
  // const members = [
  //   {
  //     id: 1,
  //     name: "Seth Bern",
  //     position: "President",
  //     photo:
  //       "https://media.licdn.com/dms/image/v2/D4E03AQHHJ7owciOrQQ/profile-displayphoto-shrink_400_400/B4EZSJWQUDGgAg-/0/1737471100953?e=1743033600&v=beta&t=1iEz3dyLfsUjdLbDbQNBz_X6yW40Pt3Z7FvvFgUu3s8",
  //     bio: `IS&T Major`,
  //     link: "https://www.linkedin.com/in/seth-bernstein-b23a36200/",
  //     email: [
  //       {
  //         id: 1,
  //         name: "School Email",
  //         email: "",
  //       },
  //     ],
  //     officer: true,
  //   },
  //   {
  //     id: 2,
  //     name: "Fayzaan Awan",
  //     position: "",
  //     photo:
  //       "https://media.licdn.com/dms/image/v2/D4D03AQEt-pGYwn5Y4A/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1729697233092?e=1741824000&v=beta&t=4Nt3UXgHZUaye_ST4Z2pqyZBvIR_HjsTfDwyBn0DHSQ",
  //     bio: `Honors CS Major`,
  //     link: "https://www.linkedin.com/in/fayzaanawan/",
  //     email: [
  //       {
  //         id: 1,
  //         name: "School Email",
  //         email: "",
  //       },
  //     ],
  //     officer: true,
  //   },
  //   {
  //     id: 3,
  //     name: "Kush Patel",
  //     position: "",
  //     photo:
  //       "https://media.licdn.com/dms/image/v2/D4E03AQEOfWN-1lcDdw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1727487485663?e=1741824000&v=beta&t=nr-TQSXgjexNZmlFQz663nbOpg3rMsD2YL-RODbQw7k",
  //     bio: `Honors CS Major`,
  //     link: "https://www.linkedin.com/in/kushpatel00/",
  //     email: [
  //       {
  //         id: 1,
  //         name: "School Email",
  //         email: "",
  //       },
  //     ],
  //     officer: true,
  //   },
  //   {
  //     id: 4,
  //     name: "Fernando Lucena",
  //     position: "",
  //     photo: "/images/uploads/IMG_20241230_032758_966 - Fernando.webp",
  //     bio: `Honors CS Major`,
  //     link: "https://www.linkedin.com/in/fernando-lucena-83b636254?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  //     githubLink: "",
  //     email: [
  //       {
  //         id: 1,
  //         name: "School Email",
  //         email: "",
  //       },
  //     ],
  //     officer: true,
  //   },
  //   {
  //     id: 5,
  //     name: "Daniel Bicalho",
  //     position: "",
  //     photo:
  //       "https://media.licdn.com/dms/image/v2/D4E03AQG7UgYR53N-6w/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1727051508579?e=1741824000&v=beta&t=PkTqIKTEyLFJ-mO1npYbRvNE1tIQoZWKS8JL-oI4sAg",
  //     bio: `Honors CS Major`,
  //     link: "https://www.linkedin.com/in/danielsbicalho/",
  //     githubLink: "",
  //     email: [
  //       {
  //         id: 1,
  //         name: "School Email",
  //         email: "",
  //       },
  //     ],
  //     officer: true,
  //   },
  //   {
  //     id: 6,
  //     name: "Adyan Chowdhury",
  //     position: "",
  //     photo:
  //       "https://media.licdn.com/dms/image/v2/D4E03AQF2c3xiESLBHQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1708093192880?e=1741824000&v=beta&t=2D27X8FHbVDCeHgU_ZK7wrnRwDCZ-lA3tCILH2ks3TU",
  //     bio: `Honors CS Major`,
  //     link: "https://www.linkedin.com/in/adyan-chowdhury/",
  //     githubLink: "https://github.com/adyan1025",
  //     email: [
  //       {
  //         id: 1,
  //         name: "School Email",
  //         email: "",
  //       },
  //     ],
  //     officer: true,
  //   },
  //   {
  //     id: 7,
  //     name: "Claudia Pine-Simon",
  //     position: "Faculty Advisor",
  //     photo:
  //       "https://cis.temple.edu/assets/img/people/ed6469dfdcd34cb21311df6011ec4c8c.jpg",
  //     bio: "Professor",
  //     link: "https://www.linkedin.com/in/claudia-pine-simon-7b47b11/",
  //     email: [
  //       {
  //         id: 1,
  //         name: "School Email",
  //         email: "",
  //       },
  //     ],
  //     officer: true,
  //   },
  // ];

  // Filtering out only officers (those with officer: true)
  const officers = members.data.filter((member) => member.Role != "Member");

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
                    href="" // Link to the officer's profile
                    className="text-decoration-none" // Removes underline from link
                    target="_blank" // Opens the link in a new tab
                  >
                    {/* Officer's photo */}
                    <img
                      className="img-fluid rounded" // Ensures the image is responsive and rounded
                      width={150} // Fixed width for the image
                      height={150} // Fixed height for the image
                      src={`http://localhost:1338/uploads/${officer.profilePicture.name}`} // Officer's photo URL
                      alt={`${officer.FirstName + " " + officer.LastName} - ${
                        officer.Role
                      }`} // Alt text for the image
                    />
                    {/* Officer's name and position */}
                    <h4 className="text-muted mt-3" style={{ fontWeight: 500 }}>
                      {officer.FirstName + " " + officer.LastName}
                    </h4>
                    <p className="text-muted">{officer.Role}</p>
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

export default OfficerSection;
