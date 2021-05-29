import { Input, InputGroup, InputRightAddon } from "@chakra-ui/react";
import React, { memo } from "react";
import IconHeader from "../IconHeader";
import { MdSearch } from "react-icons/md";

const InputSearch: React.FC = () => {
  return (
    <>
      <InputGroup>
        <Input
          border="transparent"
          bg="#121212"
          placeholder="Search"
          color="white"
        />
        <InputRightAddon
          bg="#323232"
          border="transparent"
          children={
            <IconHeader color="#999999" tooltip="Search" icon={MdSearch} />
          }
        />
      </InputGroup>
    </>
  );
};

export default memo(InputSearch);
