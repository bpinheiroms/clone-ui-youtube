import { Flex } from "@chakra-ui/react";
import React, { memo } from "react";
import SearchResponsiveHeader from "./Search/SearchResponsiveHeader";
import SearchNormalHeader from "./Search/SearchNormalHeader";
import { HeaderProvider } from "../../context/Header";

const TopBar: React.FC = () => {
  return (
    <Flex pos="fixed" bg="primary" w="100%" p={3}>
      <HeaderProvider>
        <SearchResponsiveHeader />
        <SearchNormalHeader />
      </HeaderProvider>
    </Flex>
  );
};

export default memo(TopBar);
