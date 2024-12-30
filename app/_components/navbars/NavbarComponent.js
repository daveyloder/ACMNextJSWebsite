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
      className={isScrolled ? "navbar-default isTop" : "navbar-default"}
      fixed="top"
      expand="lg"
      light
    >
      <div className="navbar-header">
        <Link href="/" className="navbar-brand">
          Association for Computing Machinery
        </Link>
      </div>
      <NavbarToggler onClick={toggle} navbar />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto navbar-nav">
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
