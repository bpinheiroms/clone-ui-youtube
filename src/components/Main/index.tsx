import { Flex } from "@chakra-ui/react";
import React from "react";
import FilterContainer from "./FilterContainer";
import Footer from "./Footer";
import VideoContainer from "./VideoContainer";

const Main: React.FC = () => {
  return (
    <>
      <Flex direction="column" w="100%">
        <FilterContainer />
        <VideoContainer />
        <Footer />
      </Flex>
    </>
  );
};

export default Main;
