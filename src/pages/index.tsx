import { Flex, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import Main from "../components/Main";
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";

const Home: React.FC = () => {
  const canShow = useBreakpointValue({ base: false, md: true });

  return (
    <>
      <TopBar />

      <Flex>
        {canShow && <SideBar />}
        <Main />
      </Flex>
    </>
  );
};

export default Home;
