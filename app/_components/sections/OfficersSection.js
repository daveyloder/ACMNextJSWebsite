import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import { MdGroups } from "react-icons/md";

function OfficerSection() {
  const members = [
    {
      id: 1,
      name: "Seth Bern",
      position: "President",
      photo:
        "https://media.licdn.com/dms/image/v2/D4E03AQHErxN3hTQwtg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1665495014614?e=1741219200&v=beta&t=oVUKAZwGDm80GCSeIPhaZa0vmLlkYBiF6xpVwgwth6E",
      bio: `IS&T Major`,
      linkedIn: "https://www.linkedin.com/in/seth-bernstein-b23a36200/",
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
      id: 2,
      name: "David Loder",
      position: "President",
      photo: "/images/uploads/DAvidLoder.jpg",
      bio: `IS&T Major`,
      linkedIn: "https://www.linkedin.com/in/daveloder/",
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
      name: "David Loder",
      position: "President",
      photo: "/images/uploads/DAvidLoder.jpg",
      bio: `IS&T Major`,
      linkedIn: "https://www.linkedin.com/in/daveloder/",
      email: [
        {
          id: 1,
          name: "School Email",
          email: "davidloder92@temple.edu",
        },
      ],
      officer: true,
    },
    {
      id: 4,
      name: "Claudia Pine-Simon",
      position: "Faculty Advisor",
      photo:
        "https://cis.temple.edu/assets/img/people/ed6469dfdcd34cb21311df6011ec4c8c.jpg",
      bio: "Professor",
      linkedIn: "",
      email: [
        {
          id: 1,
          name: "School Email",
          email: "claudia.pine-simon@temple.edu",
        },
      ],
      officer: true,
    },
  ];

  const officers = members.filter((member) => member.officer);
  const templeRedColor = "#621220";

  return (
    <>
      <section id="officers" className="py-5">
        <Container className="mx-auto px-4">
          <Row>
            <Col lg={12}>
              <div className="text-center">
                <MdGroups size={100} style={{ color: templeRedColor }} />
                <h2 className="text-3xl font-bold mb-4">Our E-Board Members</h2>
              </div>
            </Col>
          </Row>
          <Row>
            {officers.map((officer, index) => {
              let className = "text-center col-md-4 col-sm-6 col-xs-6";

              if (officers.length - 1 <= 1) {
                className =
                  "text-center col-md-offset-4 col-md-6 col-sm-6 col-xs-6";
              } else if (officers.length % 2 == 0) {
                className =
                  "text-center col-md-offset-4 col-md-3 col-sm-6 col-xs-6";
              }

              return (
                <div key={officer.id} className={className}>
                  <Link
                    href={officer.linkedIn}
                    className="text-decoration-none"
                    target="_blank"
                  >
                    <img
                      className="img-fluid rounded"
                      width={150}
                      height={150}
                      src={officer.photo}
                      alt={`${officer.name} - ${officer.position}`}
                    />
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
export default OfficerSection;
