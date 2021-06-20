import { Box, Flex, Skeleton } from "@chakra-ui/react";
import React from "react";

const VideoItemLoading: React.FC = () => {
  return (
    <>
      <Box bg="#202020" h="150px" w="100%"></Box>
      <Flex>
        <Box bg="#202020" borderRadius="30px" mt="15px" h="50px" w="50px"></Box>
        <Box flex="1" mt="20px">
          <Box bg="#202020" ml="20px" h="15px" w="80%"></Box>
          <Box bg="#202020" ml="20px" mt="10px" h="15px" w="60%"></Box>
        </Box>
      </Flex>
    </>
  );
};

export default VideoItemLoading;
