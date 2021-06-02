import { Flex, Text, useMediaQuery } from "@chakra-ui/react";
import React, { memo, useCallback, useMemo } from "react";
import IconHeader from "./IconHeader";
import { FiMenu } from "react-icons/fi";
import { Image } from "@chakra-ui/react";
import { useSidebarDrawer } from "../../context/SideBarDrawerContext";

const MenuYoutube: React.FC = () => {
  const { isOpen, onOpen, onClose } = useSidebarDrawer();

  const [isLargerThan540] = useMediaQuery("(min-width: 540px)");

  const toggle = useCallback(() => {
    if (isOpen) {
      onClose();
    } else {
      onOpen();
    }
  }, [isOpen]);

  const showLogo = useMemo(() => {
    if (isOpen) {
      return true;
    }

    return isLargerThan540;
  }, [isLargerThan540, isOpen]);

  return (
    <>
      <Flex w="140px" h="10" alignItems="center">
        <IconHeader
          disableTooltip
          tooltip="Menu"
          icon={FiMenu}
          callback={toggle}
        />
        <Image ml={2} w={8} src="youtube.svg" alt="youtube" />

        {showLogo && (
          <Text color="white" fontWeight="bold">
            Youtube
          </Text>
        )}
      </Flex>
    </>
  );
};

export default memo(MenuYoutube);
