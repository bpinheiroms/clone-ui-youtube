import { Box } from "@chakra-ui/react";
import React from "react";

interface Props {
  disableBottom?: boolean;
}

const DivisorDrawer: React.FC<Props> = ({ disableBottom }) => {
  return (
    <Box
      mt="15px"
      mb={disableBottom ? "0px" : "15px"}
      w="320px"
      borderBottom="1px"
      borderColor="iconHover"
    ></Box>
  );
};

export default DivisorDrawer;
