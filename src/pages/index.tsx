import { Flex, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import Main from "../components/Main";
import SideBar from "../components/SideBar";
import DrawerSideBar from "../components/SideBar/DrawerSideBar";
import TopBar from "../components/TopBar";
import { SidebarDrawerProvider } from "../context/SideBarDrawerContext";

const Home: React.FC = () => {
  return (
    <>
      <SidebarDrawerProvider>
        <TopBar />
        <Flex>
          <DrawerSideBar />
          <SideBar />
          <Main />
        </Flex>
      </SidebarDrawerProvider>
    </>
  );
};

export default Home;
