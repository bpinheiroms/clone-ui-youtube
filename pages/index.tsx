import { Box, Flex, HStack, Spacer } from "@chakra-ui/react";
import React from "react";
import { FiMenu } from "react-icons/fi";
import { Icon, IconButton, Image } from "@chakra-ui/react";

const Home: React.FC = () => {
  return (
    <Flex bg="primary" w="100%" p={3}>
      <Flex w="156px" h="10">
        <IconButton
          aria-label="Menu"
          icon={<Icon as={FiMenu} w={6} h={6} color="white" />}
          colorScheme="transparent"
          color="white"
          m={2}
          h={6}
        />
        <Image ml={2} w={8} src="youtube.svg" alt="youtube" />
      </Flex>
      <Spacer />
      <Box w="170px" h="10" bg="red.500" />
      <Spacer />
      <Box w="225px" h="10" bg="red.500" />
    </Flex>
  );
};

export default Home;
