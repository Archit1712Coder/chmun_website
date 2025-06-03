import { useEffect, useRef } from "react";
import { Button } from "./components/ui/button";
import { ArrowDown } from "lucide-react";
import { motion, useInView } from "framer-motion";
import chmunLogo from "/chmunlogo.png";

function App() {
  const aboutRef = useRef(null);
  const secGenRef = useRef(null);
  const principalRef = useRef(null);
  const isAboutInView = useInView(aboutRef, { once: true, amount: 0.3 });
  const isSecGenInView = useInView(secGenRef, { once: true, amount: 0.3 });
  const isPrincipalInView = useInView(principalRef, {
    once: true,
    amount: 0.3,
  });

  const scrollToAbout = () => {
    if (aboutRef.current) {
      const offset = 80; // Adjust this value based on your fixed header height (if any)
      const elementPosition =
        aboutRef.current.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
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

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center pt-7">
        {/* Logo */}
        <img src={chmunLogo} alt="CHMUN Logo" className="w-52 h-52 mb-5" />

        {/* Bouncing Text */}
        <div className="text-9xl md:text-[230px] font-extrabold tracking-tight">
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
          className="mt-12 text-white hover:cursor-pointer hover:bg-white/10"
          onClick={scrollToAbout}
        >
          <ArrowDown className="w-8 h-8" />
        </Button>
      </section>

      {/* About Section */}
      <motion.section
        id="about"
        ref={aboutRef}
        className="py-12 bg-black"
        initial={{ opacity: 0 }}
        animate={isAboutInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-5xl font-extrabold text-white mb-6 relative"
            initial={{ opacity: 0, y: 50 }}
            animate={
              isAboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
            }
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            About CHMUN
            <motion.span
              className="absolute bottom-[-0.5rem] left-0 w-20 h-1 bg-white"
              initial={{ x: -100, opacity: 0 }}
              animate={
                isAboutInView
                  ? { x: 0, opacity: 0.75 }
                  : { x: -100, opacity: 0 }
              }
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
            />
          </motion.h2>
          <motion.p
            className="text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto md:mx-0"
            initial={{ opacity: 0, y: 50 }}
            animate={
              isAboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
            }
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          >
            CHMUN'25 is a prestigious Model United Nations conference bringing
            together passionate delegates to discuss and debate global issues.
            Join us for an unforgettable experience on 23rd and 24th August.
          </motion.p>
        </div>
      </motion.section>

      {/* Letter from Chairman */}
      <motion.section
        id="principal-letter"
        ref={principalRef}
        className="py-12 bg-black"
        initial={{ opacity: 0 }}
        animate={isPrincipalInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-5xl font-extrabold text-white mb-6 relative"
            initial={{ opacity: 0, y: 50 }}
            animate={
              isPrincipalInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
            }
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            Letter from the Chairman
            <motion.span
              className="absolute bottom-[-0.5rem] left-0 w-20 h-1 bg-white"
              initial={{ x: -100, opacity: 0 }}
              animate={
                isPrincipalInView
                  ? { x: 0, opacity: 0.75 }
                  : { x: -100, opacity: 0 }
              }
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
            />
          </motion.h2>
          <motion.div
            className="bg-black/80 text-white p-8 rounded-lg shadow-xl border border-gray-700 max-w-3xl mx-auto md:mx-0"
            initial={{ opacity: 0, y: 50 }}
            animate={
              isPrincipalInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
            }
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          >
            <p className="text-lg leading-relaxed mb-6 font-sans">
              Dear Participants,
            </p>
            <p className="text-lg leading-relaxed mb-6 font-sans">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-lg leading-relaxed mb-6 font-sans">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
            <p className="text-lg leading-relaxed mb-2 font-sans">
              Warm regards,
            </p>
            <motion.p
              className="text-3xl text-gray-300 font-curly italic"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={
                isPrincipalInView
                  ? { opacity: 1, scaleX: 1 }
                  : { opacity: 0, scaleX: 0 }
              }
              transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
            >
              [Chairman's Name]
            </motion.p>
          </motion.div>
        </div>
      </motion.section>
      {/* Letter from Principal */}
      <motion.section
        id="principal-letter"
        ref={principalRef}
        className="py-12 bg-black"
        initial={{ opacity: 0 }}
        animate={isPrincipalInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-5xl font-extrabold text-white mb-6 relative"
            initial={{ opacity: 0, y: 50 }}
            animate={
              isPrincipalInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
            }
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            Letter from the Principal
            <motion.span
              className="absolute bottom-[-0.5rem] left-0 w-20 h-1 bg-white"
              initial={{ x: -100, opacity: 0 }}
              animate={
                isPrincipalInView
                  ? { x: 0, opacity: 0.75 }
                  : { x: -100, opacity: 0 }
              }
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
            />
          </motion.h2>
          <motion.div
            className="bg-black/80 text-white p-8 rounded-lg shadow-xl border border-gray-700 max-w-3xl mx-auto md:mx-0"
            initial={{ opacity: 0, y: 50 }}
            animate={
              isPrincipalInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
            }
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          >
            <p className="text-lg leading-relaxed mb-6 font-sans">
              Dear Participants,
            </p>
            <p className="text-lg leading-relaxed mb-6 font-sans">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-lg leading-relaxed mb-6 font-sans">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
            <p className="text-lg leading-relaxed mb-2 font-sans">
              Warm regards,
            </p>
            <motion.p
              className="text-3xl text-gray-300 font-curly italic"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={
                isPrincipalInView
                  ? { opacity: 1, scaleX: 1 }
                  : { opacity: 0, scaleX: 0 }
              }
              transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
            >
              [Principal's Name]
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Letter from Secretary General */}
      <motion.section
        id="sec-gen-letter"
        ref={secGenRef}
        className="py-12 bg-black"
        initial={{ opacity: 0 }}
        animate={isSecGenInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-5xl font-extrabold text-white mb-6 relative"
            initial={{ opacity: 0, y: 50 }}
            animate={
              isSecGenInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
            }
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            Letter from the Secretary General
            <motion.span
              className="absolute bottom-[-0.5rem] left-0 w-20 h-1 bg-white"
              initial={{ x: -100, opacity: 0 }}
              animate={
                isSecGenInView
                  ? { x: 0, opacity: 0.75 }
                  : { x: -100, opacity: 0 }
              }
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
            />
          </motion.h2>
          <motion.div
            className="bg-black/80 text-white p-8 rounded-lg shadow-xl border border-gray-700 max-w-3xl mx-auto md:mx-0"
            initial={{ opacity: 0, y: 50 }}
            animate={
              isSecGenInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
            }
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          >
            <p className="text-lg leading-relaxed mb-6 font-sans">
              Dear Delegates,
            </p>
            <p className="text-lg leading-relaxed mb-6 font-sans">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-lg leading-relaxed mb-6 font-sans">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
            <p className="text-lg leading-relaxed mb-2 font-sans">
              Yours sincerely,
            </p>
            <motion.p
              className="text-3xl text-gray-300 font-curly italic"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={
                isSecGenInView
                  ? { opacity: 1, scaleX: 1 }
                  : { opacity: 0, scaleX: 0 }
              }
              transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
            >
              [Secretary General's Name]
            </motion.p>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}

export default App;
