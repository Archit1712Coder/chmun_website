import { useEffect, useRef } from "react";
import { Button } from "./components/ui/button";
import { ArrowDown } from "lucide-react";
import chmunLogo from "/chmunlogo.png";
import Navbar from "./components/Navbar";
function App() {
  const aboutRef = useRef(null);

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const letters = document.querySelectorAll(".bounce-letter");
    letters.forEach((letter, index) => {
      letter.style.animationDelay = `${index * 0.1}s`;
      // Remove animation class after animation completes
      setTimeout(
        () => {
          letter.classList.remove("animate-bounce-once");
        },
        index * 100 + 800,
      ); // Match animation duration (800ms) + delay
    });
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center pt-16">
        {/* Logo */}
        <img src={chmunLogo} alt="CHMUN Logo" className="w-48 h-48 mb-8" />

        {/* Bouncing Text */}
        <div className="text-7xl md:text-9xl font-extrabold tracking-tight">
          {"CHMUN'25".split("").map((char, index) => (
            <span
              key={index}
              className="bounce-letter inline-block animate-bounce-once"
              style={{ animationDuration: "0.8s" }}
            >
              {char}
            </span>
          ))}
        </div>

        {/* Date */}
        <p className="mt-8 text-xl md:text-2xl text-gray-300">
          Mark your calendars - 23 and 24 August
        </p>

        {/* Arrow Button */}
        <Button
          variant="ghost"
          className="mt-12 text-white hover:bg-white/10"
          onClick={scrollToAbout}
        >
          <ArrowDown className="w-8 h-8" />
        </Button>
      </section>

      {/* About Section */}
      <section id="about" ref={aboutRef} className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-8">About CHMUN</h2>
          <p className="text-lg text-gray-300">
            CHMUN'25 is a prestigious Model United Nations conference bringing
            together passionate delegates to discuss and debate global issues.
            Join us for an unforgettable experience on 23rd and 24th August.
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
