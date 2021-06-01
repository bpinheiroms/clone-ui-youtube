import React, { useMemo } from "react";
import { Flex, Icon, IconButton, Text } from "@chakra-ui/react";
import { IconType } from "react-icons/lib";

interface Props {
  title: string;
  icon: IconType;
  onClick: () => void;
  isSelected?: boolean;
}

const IconItem: React.FC<Props> = ({
  onClick,
  icon,
  title,
  isSelected = false,
}) => {
  const colorSelected = useMemo(() => {
    return isSelected ? "white" : "iconGray";
  }, [isSelected]);

  return (
    <Flex
      flexDirection="column"
      cursor="pointer"
      h="80px"
      bg="primary"
      _hover={{ bg: "iconHover" }}
    >
      <IconButton
        onClick={onClick}
        aria-label={title}
        icon={<Icon as={icon} w={6} h={6} color={colorSelected} />}
        colorScheme="transparent"
        color="white"
        m={4}
        h={6}
        mb="8px"
      />
      <Text color={colorSelected} fontSize="10px" align="center">
        {title}
      </Text>
    </Flex>
  );
};

export default IconItem;
