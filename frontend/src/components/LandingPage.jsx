import React from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

const LandingPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="landing-section bg-cover bg-center text-white h-screen" style={{backgroundImage: 'url(/Event.jpg)'}}>
      <div className="bg-black bg-opacity-60 h-full flex flex-col justify-center items-center p-6">
        <h1 data-aos="fade-up" className="text-4xl md:text-6xl font-bold mb-4">Reimagine Banking with Finastra</h1>
        <p data-aos="fade-up" data-aos-delay="300" className="text-lg md:text-2xl max-w-2xl text-center">Join us for an exclusive event exploring innovation in banking with top industry leaders.</p>
      </div>
    </div>
  );
};

export default LandingPage;