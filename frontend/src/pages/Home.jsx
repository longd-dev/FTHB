import React from "react";
import Hero from "../components/Hero";
import Scoring from "../components/Scoring";
import CTA from "../components/CTA";
import ValueProps from "../components/ValueProps";
import ProcessSnapshot from "../components/ProcessSnapshot";

const Home = () => {
  return (
    <div className='bg-slate-50 text-slate-900'>
      {/* HERO SECTION */}
      <Hero />

      {/* VALUE PROPS */}
      <ValueProps />

      {/* PROCESS SNAPSHOT */}
      <ProcessSnapshot />

      {/* SCORING SECTION */}
      <Scoring />

      {/* CTA SECTION*/}
      <CTA />
    </div>
  );
};

export default Home;
