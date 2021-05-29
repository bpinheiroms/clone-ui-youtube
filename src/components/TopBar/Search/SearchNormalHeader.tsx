import { Box, Spacer } from "@chakra-ui/react";
import React, { memo, useContext } from "react";
import IconHeader from "../IconHeader";
import MenusHeaderList from "../MenusHeaderList";
import MenuYoutube from "../MenuYoutube";
import SearchHeader from "./SearchHeader";
import SearchIcon from "./SearchIcon";
import { MdKeyboardVoice } from "react-icons/md";
import { useSpecialHeader } from "../../../hooks/useSpecialHeader";

const SearchNormalHeader: React.FC = () => {
  const { isMobileSearchOpen } = useSpecialHeader();

  // const renders = React.useRef(0);
  // console.log("SearchNormalHeader", renders.current++);

  return !isMobileSearchOpen ? (
    <>
      <MenuYoutube />
      <Spacer />
      <SearchHeader />
      <IconHeader tooltip="Search with your voice" icon={MdKeyboardVoice} />
      <SearchIcon />
      <Spacer display={["none", "none", "flex", "flex"]} />
      <MenusHeaderList />
    </>
  ) : (
    <></>
  );
};

export default SearchNormalHeader;
