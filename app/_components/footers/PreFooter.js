import Link from "next/link";
import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaDiscord,
  FaEnvelope,
  FaInstagram,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const links = [
  {
    id: 1,
    name: "Twitter",
    href: "https://twitter.com/TempleACM",
    FaIcon: FaXTwitter,
  },

  // {
  //   id: 2,
  //   name: "Facebook",
  //   href: "/",
  //   FaIcon: FaFacebook,
  // },
  {
    id: 3,
    name: "Instagram",
    href: "https://www.instagram.com/acm.temple/",
    FaIcon: FaInstagram,
  },
  // {
  //   id: 4,
  //   name: "Github",
  //   href: "/",
  //   FaIcon: FaGithub,
  // },
  {
    id: 5,
    name: "Discord",
    href: "https://discord.gg/EaM5tA62vh",
    FaIcon: FaDiscord,
  },
  {
    id: 6,
    name: "Email",
    href: "mailto:tuacm@temple.edu",
    FaIcon: FaEnvelope,
  },
];

const PreFooter = () => {
  return (
    <div className="footer-pre">
      <div className="container">
        <address>
          <img src="" className="logo" alt="" />
          <p>
            Temple University Student Chapter of <br />
            the Association for Computing Machinery
          </p>
          <p>
            1925 N 12th St
            <br />
            Philadelphia, PA 19122 <br />
            Office 364
          </p>
          <p>
            <a href="mailto:tuacm@temple.edu" title="Email the Temple ACM">
              tuacm@temple.edu
            </a>
          </p>
        </address>
        <div className="footer-social-container">
          {links.map((link) => {
            return (
              <a
                key={link.id}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-social-icon footer-social"
                title={link.name}
              >
                {/* Dynamically render the corresponding icon */}
                <link.FaIcon size={30} />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default PreFooter;
