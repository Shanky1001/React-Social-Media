import React,{useContext} from 'react'
import { Link } from 'react-router-dom';
import { user } from '../App';


const Feed = () => {
  const detail = useContext(user);

  return (
    <>
      <div id='navFeed'>
        <Link to="/" style={{ fontSize: "5vh", textDecoration: "none", color: "#0a66c2", fontWeight: "700", marginTop: "2vh", marginRight: "30vh" }}>Connect <span style={{ backgroundColor: "#0a66c2", color: "white", padding: ".2vh .5vh", borderRadius: "1vh" }}>ing</span></Link>
        <div><i class="fa-solid fa-house"></i><div>Home</div></div>
        <div><i class="fa-solid fa-user-group"></i><div>Friends</div></div>
        <div><i class="fa-solid fa-comment-dots"></i> <div>Messages</div></div>
      </div>
      <div id='mainFeedContainer'>
        <div id='navFriends'>
          <h1 style={{textAlign:"center",fontSize:"4vh",marginTop:"2vh",marginBottom:"5vh"}}>Friends</h1>
            {detail.feed[0].map((val)=>{
              
              return (
               <div style={{display:"flex",justifyContent:"space-around",margin:"2vh 1vh",textAlign:"center",color:"dodgerblue",cursor:"pointer"}}><h1 style={{display:"inline"}}>{val.friendName}</h1><i class="fa-solid fa-circle-dot"></i></div>
                
              )
            })}
        </div>
        <div id='navFeedDisplay'>

        </div>
      </div>
    </>
  )
}

export default Feed;