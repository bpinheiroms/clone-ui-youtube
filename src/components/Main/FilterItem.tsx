import { Box, Button } from "@chakra-ui/react";
import React, { memo } from "react";

interface Props {
  isSelected?: boolean;
  title: string;
}

const FilterItem: React.FC<Props> = ({ isSelected, title }) => {
  return (
    <Button
      borderRadius="100px"
      size="sm"
      ml="20px"
      bg={isSelected ? "white" : "#4a4a4a"}
      color={isSelected ? "black" : "white"}
      _hover={!isSelected ? { backgroundColor: "#5b5959"} : {}}
    >
      {title}
    </Button>
  );
};

export default memo(FilterItem);
