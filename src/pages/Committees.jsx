// src/pages/Committees.jsx
import { Box, Text, VStack, Button } from "@chakra-ui/react";
import Navbar from "../components/Navbar";

const committees = [
  {
    abbrev: "UNSC",
    fullName: "United Nations Security Council",
    agenda: "Global disarmament and nuclear non-proliferation",
    image: "/unsc.avif",
  },
  {
    abbrev: "UNHRC",
    fullName: "United Nations Human Rights Council",
    agenda: "Addressing refugee crises in conflict zones",
    image: "/unhrc.jpeg",
  },
  {
    abbrev: "AIPPM",
    fullName: "All India Political Parties Meet",
    agenda: "Discussing electoral reforms in India",
    image: "/aippm.avif",
  },
  // Add more committees as needed
];

export default function Committees() {
  return (
    <Box bg="black" color="white">
      <Navbar />
      <Box pt="80px">
        {" "}
        {/* space for fixed navbar */}
        {committees.map((committee, idx) => (
          <Box
            key={idx}
            bgImage={`url(${committee.image})`}
            bgSize="cover"
            bgPos="center"
            w="100%"
            minH="100vh"
            display="flex"
            alignItems="center"
            justifyContent="center"
            px={8}
          >
            <VStack
              spacing={4}
              bg="rgba(0,0,0,0.6)"
              p={8}
              borderRadius="md"
              textAlign="center"
              maxW="2xl"
              backdropFilter="blur(4px)"
            >
              <Text fontSize="5xl" fontWeight="bold">
                {committee.abbrev}
              </Text>
              <Text fontSize="xl" fontWeight="semibold">
                {committee.fullName}
              </Text>
              <Text fontSize="md" fontStyle="italic">
                Agenda: {committee.agenda}
              </Text>
              <Button colorScheme="teal" variant="solid" mt={4}>
                Learn More
              </Button>
            </VStack>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
