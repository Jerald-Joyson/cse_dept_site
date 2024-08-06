import React from "react";
import DeptInfo from "@/components/DeptInfo";
import DeptLogo from "@/components/DeptLogo";
import HomePage from "@/components/HomePage/page";
import Acadamics from "@/app/acadamics/page";
import History from "../History";
import AboutusHorizontalScrollCarousel from "./aboutUsHorizontalScroll/page";

export default function About() {
  return (
    <main>
      {/* <HomePage />
      <DeptInfo />
      <DeptLogo />
      <Acadamics />
      <History /> */}
      <AboutusHorizontalScrollCarousel />
    </main>
  );
}
