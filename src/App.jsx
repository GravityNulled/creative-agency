import { useState } from "react";
import About from "./components/About";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Services from "./components/Services";
import Sponsors from "./components/Sponsors";
import Testimonial from "./components/Testimonial";
function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Testimonial />
      <Pricing />
      <Blogs />
      <Sponsors />
      <Footer />
    </>
  );
}

export default App;
