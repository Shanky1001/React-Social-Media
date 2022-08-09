import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { user } from '../App';

const Login = () => {
  const detail = useContext(user);
  const navigate = useNavigate();
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  var flag = true;
  const log = ()=>{
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    if(email === "" || password === ""){
      document.querySelector("#warning").innerHTML = "Please fill in details to sign up."
      document.querySelector("#warning").style = "color:red;font-size:3vh;text-align:center;"
    }else if(validRegex.test(email) === false){
      document.querySelector("#warning").innerHTML = "Please fill valid email."
      document.querySelector("#warning").style = "color:red;font-size:3vh;text-align:center;"
    }
    else{
      document.querySelector("#warning").style = "display:none";
      detail[0].forEach((val)=>{
        if((val.email).toLowerCase() === email.toLowerCase() && val.password === password){
          navigate('/feed');
          flag = false;
        }
      })
      if(flag){
        document.querySelector("#warning").innerHTML = "No Email id or password matches found"
      document.querySelector("#warning").style = "color:red;font-size:3vh;text-align:center;"
      }
    }
  }
  return (
    <div id='signContainer'>
        <Link to="/" style={{ fontSize: "5vh", textDecoration: "none", color: "#0a66c2", fontWeight: "700" }}>Connect <span style={{ backgroundColor: "#0a66c2", color: "white", padding: ".2vh .5vh", borderRadius: "1vh" }}>ing</span></Link>
        <h1 style={{ textAlign: "center", fontSize: "5vh", paddingTop: "4vh", fontWeight: "100" }}>Stay updated on your professional world</h1>
        <div id='signFormContainer'>
          <h2 style={{textAlign:"center"}}>Sign In</h2>
          <div style={{ width: "80%", margin: "auto", marginTop: "5vh" }}>
            <h6 style={{ margin: "2vh 0", fontSize: "3vh", color: "grey" }}>Enter your Email</h6>
            <input type="email" required id='email' />
            <h6 style={{ margin: "2vh 0", fontSize: "3vh", color: "grey" }}>Password (6 or more characters)</h6>
            <input type="password" required id='password' />
          </div>
          <p id='warning'></p>
          <button style={{ width: "80%", margin: "10%", fontSize: "4vh", backgroundColor: "#0a66c2", color: "white", padding: "2vh 5vh", borderRadius: "5vh", cursor: "pointer" }} onClick={log}>Sign in</button>
          <Link to='/signup' style={{ fontSize: "2.5vh", color: "grey", fontWeight: "600", textAlign: "center", textDecoration: "none", cursor: "default" }} > <h3>Not on Connecting? <span style={{ color: "#0a66c2", cursor: "pointer" }}>Join now</span></h3></Link>
        </div>
      </div>
  )
}

export default Login