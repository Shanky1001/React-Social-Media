import React from 'react'
import { NavLink } from 'react-router-dom';
import './style.css';

const Nav = () => {
  return (
    <>
      <nav style={nav}>
        <NavLink to='/' style={{marginRight:"35%",fontWeight:"700",fontSize:"5vh"}} id="logo">Connect <span style={{ backgroundColor:"#0a66c2",color:"white",padding:".2vh .5vh",borderRadius:"1vh" }}>ing</span></NavLink>
        <NavLink to='/login'> Sign In </NavLink>
        <NavLink to='/signup' style={{padding:"1.5vh 3vh",border:".2vh solid #0a66c2",borderRadius:"5vh"}} id="signup">Join now</NavLink>
      </nav>
    </>
  )
}

export default Nav;

const nav = {
  width:"100%",
  height:"10vh",
  padding:"0 5%",
  display: "flex",
  justifyContent: "space-around",
  fontSize:"3.5vh",
  color:"white",
  alignItems:"center",
  marginTop:"2vh",
  fontWeight:"600"
}