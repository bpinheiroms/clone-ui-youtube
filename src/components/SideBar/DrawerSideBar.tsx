import {
  Box,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Stack,
} from "@chakra-ui/react";
import React, { memo, useMemo } from "react";
import { IoMdCompass, IoMdHome } from "react-icons/io";
import {
  MdSubscriptions,
  MdVideoLibrary,
  MdSchedule,
  MdKeyboardArrowDown,
} from "react-icons/md";
import { BiHistory } from "react-icons/bi";
import { AiOutlinePlaySquare } from "react-icons/ai";
import { useSidebarDrawer } from "../../context/SideBarDrawerContext";
import MenuYoutube from "../TopBar/MenuYoutube";
import DivisorDrawer from "./DivisorDrawer";
import IconItem from "./IconItem";

const DrawerSideBar: React.FC = () => {
  const { isOpen, onClose } = useSidebarDrawer();

  const configsSizeItens = useMemo(() => {
    return {
      flexConfig: { height: "40px", direction: "row" },
      textConfig: { fontSize: "15px", marginTop: "8px" },
    };
  }, []);

  const groupItems = useMemo(() => {
    return [
      {
        idGroup: 1,
        itens: [
          {
            id: 1,
            icon: IoMdHome,
            isSelected: true,
            title: "Home",
            onClick: () => {},
          },
          {
            id: 2,
            icon: IoMdCompass,
            isSelected: false,
            title: "Explore",
            onClick: () => {},
          },
          {
            id: 3,
            icon: MdSubscriptions,
            isSelected: false,
            title: "Subscriptions",
            onClick: () => {},
          },
        ],
      },
      {
        idGroup: 2,
        itens: [
          {
            id: 4,
            icon: MdVideoLibrary,
            isSelected: false,
            title: "Library",
            onClick: () => {},
          },
          {
            id: 5,
            icon: BiHistory,
            isSelected: false,
            title: "History",
            onClick: () => {},
          },
          {
            id: 6,
            icon: AiOutlinePlaySquare,
            isSelected: false,
            title: "Your videos",
            onClick: () => {},
          },
          {
            id: 7,
            icon: MdSchedule,
            isSelected: false,
            title: "Watch later",
            onClick: () => {},
          },
          {
            id: 8,
            icon: MdKeyboardArrowDown,
            isSelected: false,
            title: "Show more",
            onClick: () => {},
          },
        ],
      },
    ];
  }, []);

  return (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent bg="primary">
          <DrawerHeader pl="0px" pr="0px">
            <Box w="320px" pl="8px">
              <MenuYoutube />
            </Box>
            <DivisorDrawer disableBottom />
          </DrawerHeader>
          <DrawerBody
            pl="0px"
            pr="0px"
            css={{
              "&::-webkit-scrollbar": {
                width: "10px",
                borderRadius: "10px",
                backgroundColor: "secundary",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: `#606060`,
                borderRadius: "10px",
              },
            }}
          >
            {groupItems.map((group) => (
              <div key={group.idGroup}>
                {group.itens.map((item) => (
                  <IconItem
                    key={item.id}
                    icon={item.icon}
                    isSelected={item.isSelected}
                    isDrawer
                    flexConfig={configsSizeItens.flexConfig}
                    textConfig={configsSizeItens.textConfig}
                    onClick={item.onClick}
                    title={item.title}
                  />
                ))}
                <DivisorDrawer />
              </div>
            ))}
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default memo(DrawerSideBar);
