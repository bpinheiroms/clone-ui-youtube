import { Box, Flex, Link, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import VideoItemLoading from "../VideoItemLoading";
import { Image } from "@chakra-ui/react";

interface Props {
  thumb: string;
  title: string;
  views: string;
  timesAgo: string;
  channelName: string;
  channelLogo: string;
  link: string;
}

const VideoItemGroup: React.FC<Props> = ({
  thumb,
  title,
  views,
  timesAgo,
  channelName,
  channelLogo,
  link,
}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Box height="300px" width="90%">
      {loading ? (
        <VideoItemLoading />
      ) : (
        <>
          <Link target="_blank" href={link}>
            <Image
              src={thumb}
              alt={title}
              h="150px"
              width="100%"
              objectFit="inherit"
            />
            <Flex>
              <Image
                src={channelLogo}
                alt={channelName}
                mt="15px"
                h="40px"
                w="40px"
                objectFit="inherit"
                borderRadius="50px"
              />

              <Box flex="1" mt="15px">
                <Box ml="10px" w="80%">
                  <Text
                    color="white"
                    fontSize="14px"
                    fontWeight="bold"
                    noOfLines={[1, 2]}
                  >
                    {title}
                  </Text>
                </Box>
                <Box ml="10px" mt="5px" w="100%">
                  <Text
                    color="#AAAAAA"
                    fontSize="12px"
                    fontWeight="bold"
                    noOfLines={[1]}
                  >
                    {channelName}
                  </Text>
                  <Text
                    color="#AAAAAA"
                    fontSize="12px"
                    fontWeight="bold"
                    noOfLines={[1]}
                  >
                    {views} views • {timesAgo}
                  </Text>
                </Box>
              </Box>
            </Flex>
          </Link>
        </>
      )}
    </Box>
  );
};

export default VideoItemGroup;
