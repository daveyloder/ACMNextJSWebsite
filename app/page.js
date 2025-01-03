"use client";

import React from "react";
import MainHeader from "@/app/_components/headers/MainHeader";
import OfficerSection from "@/app/_components/sections/OfficersSection";

import { MEMBERS } from "@/app/_shared/MEMBERS";
import AboutSection from "./_components/sections/AboutSection";
import CallToAction from "./_components/sections/CallToAction";
import EventsSection from "./_components/sections/EventsSection";

export default function Home() {
  const headerMetadata = {
    pageTitle: "Welcome to ACM!",
  };
  return (
    <>
      <MainHeader pageHeader={headerMetadata.pageTitle} />
      <AboutSection />
      <CallToAction />
      <OfficerSection members={MEMBERS} />
      <EventsSection />
    </>
  );
}
