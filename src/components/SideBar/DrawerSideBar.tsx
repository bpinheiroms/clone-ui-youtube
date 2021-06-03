import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/react";
import React, { memo, useMemo } from "react";
import { IoMdCompass, IoMdHome, IoMdSettings } from "react-icons/io";
import { FaLightbulb, FaTrophy, FaYoutube } from "react-icons/fa";
import {
  MdSubscriptions,
  MdVideoLibrary,
  MdSchedule,
  MdKeyboardArrowDown,
  MdLocalMovies,
  MdFlag,
} from "react-icons/md";
import { BiHelpCircle, BiHistory } from "react-icons/bi";
import { AiOutlinePlaySquare } from "react-icons/ai";
import { useSidebarDrawer } from "../../context/SideBarDrawerContext";
import MenuYoutube from "../TopBar/MenuYoutube";
import DivisorDrawer from "./DivisorDrawer";
import IconItem, { eSubscription } from "./IconItem";
import { CgProfile } from "react-icons/cg";
import { GiAerialSignal, GiGamepad, GiHanger } from "react-icons/gi";
import { BsExclamationSquareFill } from "react-icons/bs";

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
      {
        idGroup: 3,
        title: "Subscriptions",
        itens: [
          {
            id: 9,
            icon: CgProfile,
            isSelected: false,
            title: "Canal 1",
            subscriptionsType: eSubscription.stream,
            onClick: () => {},
          },
          {
            id: 10,
            icon: CgProfile,
            isSelected: false,
            title: "Canal 2",
            subscriptionsType: eSubscription.new,
            onClick: () => {},
          },
          {
            id: 11,
            icon: CgProfile,
            isSelected: false,
            title: "Canal 3",
            onClick: () => {},
          },
          {
            id: 12,
            icon: MdKeyboardArrowDown,
            isSelected: false,
            title: "Show 204 more",
            onClick: () => {},
          },
        ],
      },
      {
        idGroup: 4,
        title: "MORE FROM YOUTUBE",
        itens: [
          {
            id: 13,
            icon: FaYoutube,
            isSelected: false,
            title: "Youtube Premium",
            onClick: () => {},
          },
          {
            id: 14,
            icon: MdLocalMovies,
            isSelected: false,
            title: "Movies",
            onClick: () => {},
          },
          {
            id: 15,
            icon: GiGamepad,
            isSelected: false,
            title: "Gaming",
            onClick: () => {},
          },
          {
            id: 16,
            icon: GiAerialSignal,
            isSelected: false,
            title: "Live",
            onClick: () => {},
          },
          {
            id: 17,
            icon: GiHanger,
            isSelected: false,
            title: "Fashion & Beauty",
            onClick: () => {},
          },
          {
            id: 18,
            icon: FaLightbulb,
            isSelected: false,
            title: "Learning",
            onClick: () => {},
          },
          {
            id: 19,
            icon: FaTrophy,
            isSelected: false,
            title: "Sports",
            onClick: () => {},
          },
        ],
      },
      {
        idGroup: 5,
        itens: [
          {
            id: 20,
            icon: IoMdSettings,
            isSelected: false,
            title: "Settings",
            onClick: () => {},
          },
          {
            id: 21,
            icon: MdFlag,
            isSelected: false,
            title: "Report history",
            onClick: () => {},
          },
          {
            id: 22,
            icon: BiHelpCircle,
            isSelected: false,
            title: "Help",
            onClick: () => {},
          },
          {
            id: 23,
            icon: BsExclamationSquareFill,
            isSelected: false,
            title: "Send feedback",
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
                {group.title && (
                  <Box
                    color="iconGray"
                    ml="25px"
                    mb="10px"
                    fontWeight="bold"
                    as="p"
                    fontSize="15px"
                  >
                    {group.title}
                  </Box>
                )}
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
                    subscriptionsType={item.subscriptionsType}
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
