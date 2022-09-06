import { Box } from '@mui/material'
import React from 'react'
import { Context } from '../App'
import AddPost from './AddPost';
import FeedsCard from './FeedsCard';

const Feeds = () => {
  const { details } = Context();

  return (
    <Box flex={4} p={3} >
      <AddPost />
      {details.map((val) => { return (<FeedsCard val={val} key={val.id} />) })}
    </Box>
  )
}

export default Feeds