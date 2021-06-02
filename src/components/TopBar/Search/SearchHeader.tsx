import { Box } from "@chakra-ui/react";
import React, { memo } from "react";
import InputSearch from "./InputSearch";

const SearchHeader: React.FC = () => {
  return (
    <Box
      display={["none", "none", "flex", "flex"]}
      width={[
        "0%", // 0-30em
        "25%", // 30em-48em
        "30%", // 48em-62em
        "45%", // 62em+
      ]}
      h="10"
    >
      <InputSearch />
    </Box>
  );
};

export default memo(SearchHeader);
