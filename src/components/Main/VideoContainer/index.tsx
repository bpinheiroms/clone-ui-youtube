import { Box, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { videos } from "../../../data/index";
import VideoItemGroup from "./VideoItemGroup";

const VideoContainer: React.FC = () => {
  return (
    <Box flex="1" mt="60px" pl="50px" pr="50px">
      <SimpleGrid minChildWidth="250px" spacing="1px">
        {videos.map((video, index) => (
          <VideoItemGroup
            key={index}
            thumb={video.thumb}
            title={video.title}
            views={video.views}
            timesAgo={video.timesAgo}
            channelName={video.channel.name}
            channelLogo={video.channel.logo}
            hover={video.hover}
            link={video.link}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default VideoContainer;
