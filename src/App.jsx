import { useState } from "react";
import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Services from "./components/Services";
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
    </>
  );
}

export default App;
