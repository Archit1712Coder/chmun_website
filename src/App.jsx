import { useRef, useEffect, useState } from "react";
import {
  Box,
  Flex,
  Text,
  VStack,
  HStack,
  Stack,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import chmunLogo from "/chmunlogo.png";
import Navbar from "./components/Navbar";

const MotionText = motion(Text);

const bounceVariants = {
  hidden: { y: 0 },
  visible: (i) => ({
    y: [0, -20, 0],
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      repeat: 0,
    },
  }),
};

export default function App() {
  const aboutRef = useRef(null);
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    setStartAnimation(true);
  }, []);

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const chmunText = "CHMUN'25".split("");

  return (
    <Box bg="black" color="white" minH="100vh" fontFamily="sans-serif">
      <Navbar />
      {/* Hero Section */}
      <VStack spacing={6} py={16} textAlign="center">
        <img src={chmunLogo} alt="CHMUN Logo" style={{ width: "200px" }} />

        <HStack>
          {chmunText.map((char, index) => (
            <MotionText
              key={index}
              custom={index}
              initial="hidden"
              animate={startAnimation ? "visible" : "hidden"}
              variants={bounceVariants}
              fontSize="9xl"
              fontWeight="bold"
            >
              {char}
            </MotionText>
          ))}
        </HStack>

        <Text fontSize="lg">August 23, 24</Text>

        <div
          onClick={scrollToAbout}
          className="cursor-pointer text-white text-8xl hover:scale-125 transition-transform"
        >
          ↓
        </div>
      </VStack>

      {/* About Section */}
      <Box ref={aboutRef} id="about" py={16} px={8}>
        <Text fontSize="3xl" fontWeight="bold" mb={4}>
          About
        </Text>
        <Text fontSize="md" maxW="600px">
          CHMUN is dedicated to fostering a new generation of Indian leaders
          through diplomacy and global dialogue.
        </Text>
      </Box>
    </Box>
  );
}
