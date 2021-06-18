import { Box } from "@chakra-ui/layout";
import { useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import { IoMdCompass, IoMdHome } from "react-icons/io";
import { MdSubscriptions, MdVideoLibrary } from "react-icons/md";
import IconItem from "./IconItem";

const SideBar: React.FC = () => {
  const canShow = false;
  // const canShow = useBreakpointValue({ base: false, md: true });

  return canShow ? (
    <Box pt="70px" w="80px" h="100vh" bg="primary">
      <IconItem icon={IoMdHome} isSelected onClick={() => {}} title="Home" />
      <IconItem icon={IoMdCompass} onClick={() => {}} title="Explore" />
      <IconItem
        icon={MdSubscriptions}
        onClick={() => {}}
        title="Subscriptions"
      />
      <IconItem icon={MdVideoLibrary} onClick={() => {}} title="Library" />
    </Box>
  ) : (
    <></>
  );
};

export default SideBar;
