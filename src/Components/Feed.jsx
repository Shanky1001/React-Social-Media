import { Box } from "@mui/material";
import React from "react";
import FeedNav from './FeedNav'
import Feeds from "./Feeds";
import RightBar from "./RightBar";
import LeftBar from "./LeftBar";
import { Stack } from "@mui/system";

const Feed = () => {

  return (
    <Box>
      <FeedNav />
      <Stack direction="row" spacing={2} justifyContent="space-between" >
        <LeftBar />
        <Feeds />
        <RightBar />
      </Stack>
    </Box>
  );
};

export default Feed;
