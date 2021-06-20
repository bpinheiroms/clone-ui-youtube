import { AppProps } from "next/dist/next-server/lib/router/router";
import { ChakraProvider, extendTheme, Flex } from "@chakra-ui/react";
import theme from "../styles/theme";
import React from "react";
import { SidebarDrawerProvider } from "../context/SideBarDrawerContext";
import TopBar from "../components/TopBar";
import DrawerSideBar from "../components/SideBar/DrawerSideBar";
import SideBar from "../components/SideBar";

const customTheme = extendTheme(theme);

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={customTheme}>
      <SidebarDrawerProvider>
        <TopBar />
        <Flex>
          <DrawerSideBar />
          <SideBar />
          <Flex pt="80px" h="100%" flex="1" bg="secundary">
            <Component {...pageProps}  />
          </Flex>
        </Flex>
      </SidebarDrawerProvider>
    </ChakraProvider>
  );
};

export default MyApp;
