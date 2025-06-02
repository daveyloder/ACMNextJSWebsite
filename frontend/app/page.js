"use client";

import React from "react";
import MainHeader from "@/app/_components/headers/MainHeader";
import OfficerSectionStatic from "@/app/_components/sections/OfficerSectionStatic";
import EventsSectionStatic from "@/app/_components/sections/EventsSectionStatic";
import AboutSection from "./_components/sections/AboutSection";
import CallToAction from "./_components/sections/CallToAction";


export default function Home() {
  const headerMetadata = {
    pageTitle: "Welcome to ACM!",
  };
  return (
    <>
      <MainHeader pageHeader={headerMetadata.pageTitle} />
      <AboutSection />
      <CallToAction />
      <OfficerSectionStatic />
      <EventsSectionStatic />
    </>
  );
}
