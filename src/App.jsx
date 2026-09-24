import { useState } from "react";
import Navbar from "./components/Navbar";
// import ParticleBackground from "./components/ParticleBackground";
import IntroAnimation from "./components/IntroAnimation";
import About from "./sections/About";
import Contact from "./sections/Contact";
import CustomCursor from "./components/CustomCurser";
import Experience from "./sections/Experience";
import Footer from "./sections/Footer";
import Home from "./sections/Home";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Testimonials from "./sections/Testimonials";


export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      {showIntro && (
        <IntroAnimation onFinish={() => setShowIntro(false)} />
      )}

      <div className="relative gradient text-white ">
        <CustomCursor />
        {/* <ParticleBackground /> */}

        <Navbar />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Testimonials />
        <Contact />
        <Footer />

      </div>
    </>
  );
}
