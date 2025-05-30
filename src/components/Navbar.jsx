import { Flex, HStack, Link as ChakraLink, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
export default function Navbar() {
  return (
    <Flex
      justify="space-between "
      align="center"
      px={8}
      py={4}
      borderBottom="1px solid white"
    >
      <Text fontWeight="bold" fontSize="xl">
        CHMUN
      </Text>
      <HStack fontWeight="bold" spacing={6} fontSize="lg">
        <ChakraLink as={RouterLink} to="/" mx={5}>
          Home
        </ChakraLink>
        <ChakraLink href="#about" mx={5}>
          About
        </ChakraLink>
        <ChakraLink as={RouterLink} to="/committees" mx={5}>
          Committees
        </ChakraLink>
        <ChakraLink href="#register" mx={5}>
          Register
        </ChakraLink>
      </HStack>
    </Flex>
  );
}
