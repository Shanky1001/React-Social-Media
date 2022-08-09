import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { user } from '../App';

const Sign = () => {
  const detail = useContext(user);
  const navigate = useNavigate()
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const signin = () => {
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
      const obj = { "email": email, "password": password };
      detail[1]([...detail[0], obj]);
      navigate('/login');
    }
  }

  return (
    <>
      <div id='signContainer'>
        <Link to="/" style={{ fontSize: "5vh", textDecoration: "none", color: "#0a66c2", fontWeight: "700" }}>Connect <span style={{ backgroundColor: "#0a66c2", color: "white", padding: ".2vh .5vh", borderRadius: "1vh" }}>ing</span></Link>
        <h1 style={{ textAlign: "center", fontSize: "5vh", paddingTop: "4vh", fontWeight: "100" }}>Make the most of your professional life</h1>
        <div id='signFormContainer'>
          <div style={{ width: "80%", margin: "auto", marginTop: "5vh" }}>
            <h6 style={{ margin: "2vh 0", fontSize: "3vh", color: "grey" }}>Enter your Email</h6>
            <input type="email" required id='email' />
            <h6 style={{ margin: "2vh 0", fontSize: "3vh", color: "grey" }}>Password (6 or more characters)</h6>
            <input type="password" required id='password' />
            <p style={{ fontSize: "2vh", margin: "2vh 3vh", color: "grey" }}>By clicking Agree & Join, you agree to the LinkedIn User Agreement, Privacy Policy, and Cookie Policy.</p>
          </div>
          <p id='warning'></p>
          <button style={{ width: "80%", margin: "10%", fontSize: "4vh", backgroundColor: "#0a66c2", color: "white", padding: "2vh 5vh", borderRadius: "5vh", cursor: "pointer" }} onClick={signin}>Agree & Join </button>
          <Link to='/login' style={{ fontSize: "2.5vh", color: "grey", fontWeight: "600", textAlign: "center", textDecoration: "none", cursor: "default" }} > <h3>Already on Connecting? <span style={{ color: "#0a66c2", cursor: "pointer" }}>Login now</span></h3></Link>
        </div>
      </div>
    </>
  )
}

export default Sign