import React from "react";
import Link from "next/link";
const PostFooter = () => {
  return (
    <footer>
      <div
        className=" p-4 text-white"
        style={{ backgroundColor: "#000", font: "Poppins" }}
      >
        <div className="d-flex align-items-center">
          <img
            src="/images/acm_logo.png"
            alt="ACM logo"
            className="footer-logo"
          />{" "}
          <p className="footer-text ps-4">
            &copy; Temple University ACM. All Rights Reserved. Developed in
            partnership with{" "}
            <Link
              href="https:tudev.org"
              className="text-reset text-decoration-none"
            >
              TUDev{" "}
              <img
                src="/images/tudevog_logo_white.png"
                alt="TUDev Logo"
                className="img-fluid"
                width={20}
              />
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default PostFooter;
