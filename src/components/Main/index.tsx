import { Box, Flex, Icon, IconButton, useMediaQuery } from "@chakra-ui/react";
import React, { useMemo } from "react";
import FilterItem from "./FilterItem";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

const Main: React.FC = () => {
  const filters = useMemo(() => {
    return [
      {
        id: 1,
        name: "All",
        isSelected: true,
      },
      {
        id: 2,
        name: "Music",
      },
      {
        id: 3,
        name: "Cryptocurrency",
      },
      {
        id: 4,
        name: "Courses",
      },
      {
        id: 5,
        name: "Recently uploaded",
      },
      {
        id: 6,
        name: "Live",
      },
      {
        id: 7,
        name: "Cameras",
      },
      {
        id: 8,
        name: "Podcasts",
      },
      {
        id: 9,
        name: "Apple",
      },
      {
        id: 10,
        name: "Computers",
      },
      {
        id: 11,
        name: "Computer programming",
      },
      {
        id: 12,
        name: "Mixed",
      },
      {
        id: 13,
        name: "Acoustic guitar",
      },
      {
        id: 14,
        name: "Amazon Alexa",
      },
      {
        id: 15,
        name: "Comedies",
      },
    ];
  }, []);

  return (
    <Flex
      borderTop="1px"
      borderBottom="1px"
      borderColor="iconHover"
      mt="-16px"
      h="60px"
      bg="primary"
      p="13px"
      pl="20px"
      f="1"
      position="fixed"
    >
      <Box>
        <IconButton
          aria-label="Previous"
          color="white"
          icon={<Icon w={6} h={6} as={MdNavigateBefore} color="white" />}
          colorScheme="transparent"
        />
      </Box>
      <Box flex="1" display="inline-block" overflowY="hidden" width="50%">
        {filters.map((filter) => (
          <FilterItem
            key={filter.id}
            title={filter.name}
            isSelected={filter.isSelected}
          />
        ))}
      </Box>
      <Box>
        <IconButton
          aria-label="Next"
          color="white"
          icon={<Icon w={6} h={6} as={MdNavigateNext} color="white" />}
          colorScheme="transparent"
        />
      </Box>
    </Flex>
  );
};

export default Main;
