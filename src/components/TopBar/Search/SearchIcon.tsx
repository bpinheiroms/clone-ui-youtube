import { Box } from "@chakra-ui/react";
import React, { memo } from "react";
import IconHeader from "../IconHeader";
import { MdSearch } from "react-icons/md";
import { useSpecialHeader } from "../../../hooks/useSpecialHeader";

const SearchIcon: React.FC = () => {
  const { setIsMobileSearchOpen } = useSpecialHeader();

  const setIsMobile = () => {
    setIsMobileSearchOpen(true);
  };

  return (
    <Box display={["flex", "flex", "none", "none"]}>
      <IconHeader tooltip="Search" icon={MdSearch} callback={setIsMobile} />
    </Box>
  );
};

export default SearchIcon;
