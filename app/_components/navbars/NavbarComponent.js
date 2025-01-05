"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

// Importing necessary components from reactstrap for the navbar
import { Navbar, NavbarToggler, Nav, NavItem, Collapse } from "reactstrap";

// Navigation links for the navbar
const NAVLINKS = [
  { id: 2, name: "About", href: "/#about" },
  { id: 3, name: "Events", href: "/#events" },
];

function NavbarComponent() {
  // Right-side navigation links (can be extended if needed)
  const rightNavLinks = NAVLINKS;

  // State to manage the opening/closing of the navbar on mobile view
  const [isOpen, setIsOpen] = useState(false);

  // State to manage whether the user has scrolled down the page (to apply styles)
  const [isScrolled, setIsScrolled] = useState(false);

  // Toggle function for handling the collapse/expand of the navbar
  const toggle = () => setIsOpen(!isOpen);

  // useEffect to listen for scroll events and adjust navbar styling accordingly
  useEffect(() => {
    // Scroll event handler to track the position of the scroll
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 0) {
        setIsScrolled(true); // Navbar style changes when scrolled
      } else {
        setIsScrolled(false); // Reverts when at the top
      }
    };

    // Adding scroll event listener to detect page scroll
    window.addEventListener("scroll", handleScroll);

    // Cleanup: removing the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array means this effect runs once after mount

  return (
    <Navbar
      // Dynamic class to change navbar style when the user scrolls down
      className={isScrolled ? "navbar-default isNotTop" : "navbar-default"}
      expand="lg" // Responsive behavior for large screens
      dark // Dark themed navbar
    >
      <div className="navbar-header">
        <Link href="/" className="navbar-brand">
          <div className="nav-content">
            <div className="nav-logo">
              {/* Logo of the club */}
              <img
                src="/images/acm_logo.png"
                alt="ACM logo"
                className="img-fluid"
                style={{ width: 50 }} // Resizing the logo image
              />
            </div>
            <div className="nav-title text-white">
              {/* Brand name with university name */}
              Association for Computing Machinery{" "}
              <span className="brand-uni text-white">Temple University</span>
            </div>
          </div>
        </Link>
      </div>

      {/* Toggler button for mobile view */}
      <NavbarToggler onClick={toggle} navbar />

      {/* Collapsible section for navigation links on smaller screens */}
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ms-auto navbar-nav">
          {/* Rendering the navigation links dynamically */}
          {rightNavLinks.map((link) => {
            return (
              <NavItem key={link.id}>
                <Link className="nav-link" href={link.href}>
                  {link.name} {/* Link text */}
                </Link>
              </NavItem>
            );
          })}
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default NavbarComponent;
