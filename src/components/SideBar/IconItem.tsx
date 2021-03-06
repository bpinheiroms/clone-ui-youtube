import React, { memo, useMemo } from "react";
import { Box, Flex, Icon, IconButton, Spacer, Text } from "@chakra-ui/react";
import { IconType } from "react-icons/lib";
import { GoPrimitiveDot } from "react-icons/go";
import { GiAerialSignal } from "react-icons/gi";

export enum eSubscription {
  empty,
  new,
  stream,
}

interface Props {
  title: string;
  icon: IconType;
  onClick: () => void;
  isSelected?: boolean;
  isDrawer?: boolean;
  flexConfig?: FlexConfig;
  textConfig?: TextConfig;
  subscriptionsType?: eSubscription;
}

interface FlexConfig {
  height: string;
  direction: any;
}

interface TextConfig {
  fontSize: string;
  marginTop: string;
}

const IconItem: React.FC<Props> = ({
  onClick,
  icon,
  title,
  isSelected = false,
  isDrawer = false,
  flexConfig = {
    height: "80px",
    direction: "column",
  },
  textConfig = {
    fontSize: "10px",
    marginTop: "0px",
  },
  subscriptionsType = eSubscription.empty,
}) => {
  const colorSelected = useMemo(() => {
    const config = {
      iconColor: "",
      textColor: "",
      backgroundColor: "",
    };

    if (isDrawer) {
      config.iconColor = isSelected ? "white" : "iconGray";
      config.textColor = "white";
      config.backgroundColor = isSelected ? "iconHover" : "primary";
      return config;
    }

    const colorDefault = isSelected ? "white" : "iconGray";
    config.iconColor = colorDefault;
    config.textColor = colorDefault;

    return config;
  }, [isSelected, isDrawer]);

  return (
    <Flex
      flexDirection={flexConfig.direction}
      cursor="pointer"
      h={flexConfig.height}
      bg={colorSelected.backgroundColor}
      _hover={{ bg: "iconHover" }}
      alignItems="center"
      paddingBottom="10px"
    >
      <IconButton
        onClick={onClick}
        aria-label={title}
        icon={<Icon as={icon} w={6} h={6} color={colorSelected.iconColor} />}
        colorScheme="transparent"
        m={4}
        h={6}
        mb="8px"
      />
      <Text
        color={colorSelected.textColor}
        fontSize={textConfig.fontSize}
        mt={textConfig.marginTop}
        align="center"
      >
        {title}
      </Text>

      {subscriptionsType !== eSubscription.empty && (
        <>
          <Spacer />
          <Box w="30px" mt="5px" color="white">
            {subscriptionsType === eSubscription.stream ? (
              <Icon as={GiAerialSignal} w={4} h={4} color="#FF0000" />
            ) : (
              <Icon as={GoPrimitiveDot} w={3} h={3} color="#3D9EEF" />
            )}
          </Box>
        </>
      )}
    </Flex>
  );
};

export default memo(IconItem);
