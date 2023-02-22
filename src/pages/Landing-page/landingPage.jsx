import React from "react";
import { Footer } from "../../components/footer/footer";
import { Navbar } from "../../components/navbar/navbar";
import { Hero } from "./hero";
import { CallToAction } from "./callToAction";
import { Services } from "./services";
import { Testimonials } from "./testimonials";
import Contact from "./contact";

export const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <CallToAction />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};
