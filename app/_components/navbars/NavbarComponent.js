"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

import { NAVLINKS } from "@/app/_shared/LINKS";
import { Navbar, NavbarToggler, Nav, NavItem, Collapse } from "reactstrap";

function NavbarComponent() {
  const leftNavLinks = NAVLINKS;

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar
      className={isScrolled ? "navbar-default isNotTop" : "navbar-default"}
      expand="lg"
      dark
    >
      <div className="navbar-header">
        <Link href="/" className="navbar-brand">
          <div className="nav-content">
            <div className="nav-logo">
              <img
                src="/images/acm_logo.png"
                alt="ACM logo"
                className="img-fluid"
                style={{ width: 50 }}
              />
            </div>
            <div className="nav-title text-white">
              Association for Computing Machinery{" "}
              <span className="brand-uni text-white">Temple University</span>
            </div>
          </div>
        </Link>
      </div>
      <NavbarToggler onClick={toggle} navbar />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ms-auto navbar-nav">
          {leftNavLinks.map((link) => {
            return (
              <NavItem key={link.id}>
                <Link className="nav-link" href={link.href}>
                  {link.name}
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
