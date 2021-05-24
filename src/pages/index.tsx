import {
  Box,
  Flex,
  InputGroup,
  InputRightAddon,
  Spacer,
} from "@chakra-ui/react";
import React from "react";
import { FiMenu } from "react-icons/fi";
import { Image } from "@chakra-ui/react";
import { RiVideoAddFill } from "react-icons/ri";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { MdNotificationsNone, MdKeyboardVoice, MdSearch } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import IconHeader from "../components/IconHeader";
import { Input } from "@chakra-ui/react";

const Home: React.FC = () => {
  return (
    <Flex bg="primary" w="100%" p={3}>
      <Flex w="140px" h="10">
        <IconHeader disableTooltip tooltip="Menu" icon={FiMenu} />
        <Image ml={2} w={8} src="youtube.svg" alt="youtube" />
      </Flex>
      <Spacer/>
      <Box
        display={["none", "none", "flex", "flex"]}
        width={[
          "0%", // 0-30em
          "25%", // 30em-48em
          "40%", // 48em-62em
          "55%", // 62em+
        ]}
        h="10"
      >
        <InputGroup>
          <Input
            border="transparent"
            bg="#121212"
            placeholder="Search"
            color="white"
          />
          <InputRightAddon
            bg="#323232"
            border="transparent"
            children={
              <IconHeader color="#999999" tooltip="Search" icon={MdSearch} />
            }
          />
        </InputGroup>
      </Box>
      <IconHeader tooltip="Search with your voice" icon={MdKeyboardVoice} />
      <Box display={["flex", "flex", "none", "none"]}>
        <IconHeader tooltip="Search" icon={MdSearch} />
      </Box>

      <Spacer display={["none", "none", "flex", "flex"]} />
      <Box w="225px" h="10">
        <IconHeader tooltip="Create" icon={RiVideoAddFill} />
        <IconHeader tooltip="YouTube apps" icon={BsFillGrid3X3GapFill} />
        <IconHeader tooltip="Notifications" icon={MdNotificationsNone} />
        <IconHeader disableTooltip icon={CgProfile} />
      </Box>
    </Flex>
  );
};

export default Home;
