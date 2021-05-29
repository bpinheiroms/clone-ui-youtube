import { Box, Flex } from "@chakra-ui/react";
import React, { memo, useCallback } from "react";
import IconHeader from "../IconHeader";
import InputSearch from "./InputSearch";
import { IoMdArrowBack } from "react-icons/io";
import { MdKeyboardVoice } from "react-icons/md";
import { useSpecialHeader } from "../../../hooks/useSpecialHeader";

const SearchResponsiveHeader: React.FC = () => {
  const { isMobileSearchOpen, setIsMobileSearchOpen } = useSpecialHeader();

  const setIsMobile = () => {
    setIsMobileSearchOpen(false);
  };

  return isMobileSearchOpen ? (
    <Flex width="100%">
      <IconHeader
        tooltip="Voltar"
        icon={IoMdArrowBack}
        callback={setIsMobile}
      />
      <InputSearch />
      <IconHeader tooltip="Search with your voice" icon={MdKeyboardVoice} />
    </Flex>
  ) : (
    <></>
  );
};

export default SearchResponsiveHeader;
