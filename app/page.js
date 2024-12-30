"use client";

import React from "react";
import MainHeader from "@/app/_components/headers/MainHeader";
import OfficerSection from "@/app/_components/sections/OfficersSection";

import { MEMBERS } from "@/app/_shared/MEMBERS";

export default function Home() {
  const headerMetadata = {
    pageTitle: "Welcome to ACM!",
  };
  return (
    <>
      <MainHeader pageHeader={headerMetadata.pageTitle} />
      <OfficerSection members={MEMBERS} />
    </>
  );
}
