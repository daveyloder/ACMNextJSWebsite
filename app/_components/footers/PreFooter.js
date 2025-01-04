import React from "react";
import { FaTwitter, FaFacebook, FaGithub, FaEnvelope } from "react-icons/fa";
import Link from "next/link";
import { SOCIALLINKS } from "@/app/_shared/LINKS";

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
          <a
            href="https://twitter.com/TempleACM"
            target="_blank"
            className="btn btn-social-icon footer-social"
            rel="noopener noreferrer"
          >
            <FaTwitter size={30} />
          </a>
          <a
            href="https://www.facebook.com/TempleACM/"
            target="_blank"
            className="btn btn-social-icon footer-social"
            rel="noopener noreferrer"
          >
            <FaFacebook size={30} />
          </a>
          <a
            href="https://github.com/zachgoncalves/Temple-ACM-Theme"
            target="_blank"
            className="btn btn-social-icon footer-social"
            rel="noopener noreferrer"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="mailto:tuacm@temple.edu"
            title="Email the Temple ACM"
            target="_blank"
            className="btn btn-social-icon footer-social"
            rel="noopener noreferrer"
          >
            <FaEnvelope size={30} />
          </a>
        </div>
      </div>
    </div>
  );
};
export default PreFooter;
