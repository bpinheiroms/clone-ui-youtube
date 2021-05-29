import { Box, Spacer } from "@chakra-ui/react";
import React, { memo } from "react";
import IconHeader from "./IconHeader";
import { RiVideoAddFill } from "react-icons/ri";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { MdNotificationsNone } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

const MenusHeaderList: React.FC = () => {
  return (
    <>
      <Box w="225px" h="10">
        <IconHeader tooltip="Create" icon={RiVideoAddFill} />
        <IconHeader tooltip="YouTube apps" icon={BsFillGrid3X3GapFill} />
        <IconHeader tooltip="Notifications" icon={MdNotificationsNone} />
        <IconHeader disableTooltip icon={CgProfile} />
      </Box>
    </>
  );
};

export default memo(MenusHeaderList);
