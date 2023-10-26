import { Flex, Box, Center, Heading, Spacer, Text } from "@chakra-ui/react";
import "../assets/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = ({ loggedInUser }) => {
  return (
    <Flex marginBottom="50px">
      <Link to="/">
        <Box w="170px" h="50px" bg="tomato">
          <Center h="50px">
            <Heading size="lg" color="black">
              NC News
            </Heading>
          </Center>
        </Box>
      </Link>
      <Spacer />
      <a href="#">
        <Box w="150px" h="50px" bg="tomato">
          <Center h="50px">
            <Text color="white">Topics</Text>
          </Center>
        </Box>
      </a>
      <a href="#">
        <Box w="150px" h="50px" bg="tomato">
          <Center h="50px">
            <Text color="white">Users</Text>
          </Center>
        </Box>
      </a>
      <Box w="50px" h="50px" bg="tomato">
        <Center h="50px">
          <Text color="white">P</Text>
        </Center>
      </Box>
      <Box w="150px" h="50px" bg="tomato">
        <Center h="50px">
          <Text color="white">{loggedInUser}</Text>
        </Center>
      </Box>
    </Flex>
  );
};

export default Navbar;
