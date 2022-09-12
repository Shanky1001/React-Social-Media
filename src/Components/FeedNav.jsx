import styled from '@emotion/styled'
import { Logout, Mail, Notifications } from '@mui/icons-material';
import { AppBar, Avatar, Badge, InputBase, Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Context } from '../App';

const StyledToolBar = styled(Toolbar)({
  display: "flex", justifyContent: "space-between"
});

const Search = styled('div')(({ theme }) => ({
  backgroundColor: "white", padding: "0 10px", borderRadius: "5px", width: "40%"
}))
const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));


const FeedNav = () => {
  const navigate = useNavigate();
  const {setLogger} = Context();
  const logout = ()=>{
    navigate('/')
    setLogger({})
  }

  return (
    <AppBar position="sticky" >
      <StyledToolBar>

        {/* Logo  */}

        <Typography variant='h1' sx={{ display: { xs: "none", sm: "block" }, fontSize: "24px" }}>
          <Link to={'/'} style={{ textDecoration: "none", color: "white" }}>
            Connect<span>ing</span></Link>
        </Typography>
        <Typography variant='h1' sx={{ display: { xs: "block", sm: "none" }, fontSize: "24px" }}>
          <Link to={'/'} style={{ textDecoration: "none", color: "white" }}>
            <span>ing</span></Link>
        </Typography>

        {/* Seachbar */}
        <Search><InputBase placeholder='search' fullWidth /></Search>

        {/* Side Icons */}
        <Icons>
          <Logout color="action" sx={{ cursor: "pointer" }} onClick={logout} />
          <Badge badgeContent={4} color="error" sx={{ cursor: "pointer" }}>
            < Mail color="action" />
          </Badge>
          <Badge badgeContent={4} color="error" sx={{ cursor: "pointer" }}>
            <  Notifications color="action" />
          </Badge>
          <Avatar src='https://image.shutterstock.com/image-photo/young-handsome-man-beard-wearing-260nw-1768126784.jpg' sx={{ width: 30, height: 30, cursor: "pointer" }} />
        </Icons>
        <UserBox >
          <Avatar src='https://image.shutterstock.com/image-photo/young-handsome-man-beard-wearing-260nw-1768126784.jpg' sx={{ width: 30, height: 30, cursor: "pointer" }} /> <Typography variant='span'> Shanky</Typography>
        </UserBox>
      </StyledToolBar>
    </AppBar>
  )
}

export default FeedNav