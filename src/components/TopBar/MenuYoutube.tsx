import { Flex, Spacer } from "@chakra-ui/react";
import React, { memo } from "react";
import IconHeader from "./IconHeader";
import { FiMenu } from "react-icons/fi";
import { Image } from "@chakra-ui/react";

const MenuYoutube: React.FC = () => {
  return (
    <>
      <Flex w="140px" h="10">
        <IconHeader disableTooltip tooltip="Menu" icon={FiMenu} />
        <Image ml={2} w={8} src="youtube.svg" alt="youtube" />
      </Flex>
    </>
  );
};

export default memo(MenuYoutube);
