import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { user } from "../App";

const Feed = () => {
  const detail = useContext(user);
  const file = () => {
    const fi = document.querySelector("#pic").files[0];
    const reader = new FileReader();
    reader.addEventListener("load", () => { localStorage.setItem("image", reader.result) }, false);
    if (fi) {
      reader.readAsDataURL(fi);
    }
    console.log(localStorage.getItem("image"));
  };

  const operations = (e) => {
    const eve = e.target.parentNode.className;
    if (eve === "like") {

    } else if (eve === "comment") {
      e.target.closest("div").nextSibling.classList.toggle('active');
    } else if (eve === "share") {

    }

  }

  return (
    <>
      <div id="navFeed">
        <Link
          to="/"
          style={{
            fontSize: "5vh",
            textDecoration: "none",
            color: "#0a66c2",
            fontWeight: "700",
            marginTop: "2vh",
            marginRight: "30vh",
          }}
        >
          Connect{" "}
          <span
            style={{
              backgroundColor: "#0a66c2",
              color: "white",
              padding: ".2vh .5vh",
              borderRadius: "1vh",
            }}
          >
            ing
          </span>
        </Link>
        <div>
          <i class="fa-solid fa-house"></i>
          <div>Home</div>
        </div>
        <div>
          <i class="fa-solid fa-user-group"></i>
          <div>Friends</div>
        </div>
        <div>
          <i class="fa-solid fa-comment-dots"></i> <div>Messages</div>
        </div>
      </div>
      <div id="mainFeedContainer">
        <div id="navFriends">
          <h1
            style={{
              textAlign: "center",
              fontSize: "3vh",
              marginTop: "0vh",
              marginBottom: "5vh",
              backgroundColor: "#0a66c2",
              margin: "0",
              color: "white",
              borderRadius: "1vh",
              position: "sticky",
              padding: "2vh 0",
              boxShadow: "rgba(0, 0, 0, 0.45) 0px 25px 20px -20px"
            }}
          >
            Friends
          </h1>
          <div id="friendList">
            {detail.feed[0].map((val, index) => {
              return (
                <div key={index}
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    margin: "4vh 3vh",
                    textAlign: "center",
                    color: "dodgerblue",
                    cursor: "pointer",
                    backgroundColor: "#fff",
                    boxShadow:
                      "rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset",
                    alignItems: "center",
                    padding: "1vh 3vh",
                    borderRadius: "5vh",
                  }} >
                  <h1 style={{ display: "inline" }}>{val.friendName}</h1>
                  <i class="fa-solid fa-circle-dot"></i>
                </div>
              );
            })}
          </div>
        </div>
        <div id="navFeedDisplay">
          <div id="posting">
            <input placeholder="What's on Your mind?" type="text" style={{ fontSize: "3vh", width: "80%", height: "10vh", borderRadius: "1vh", textAlign: "left", padding: "0 1vh", outlineColor: "#0a66c2" }} />
            <input type="file" style={{ fontSize: "3vh", width: "70%", margin: "1vh 10vh", textAlign: "center", cursor: "pointer", outline: "none" }} id="pic" accept="image/*" />
            <button onClick={file} style={{ fontSize: "3vh", textAlign: "center", padding: "1vh 3vh", backgroundColor: "#0a66c2", marginLeft: "75%", color: "white", borderRadius: "1vh", cursor: "pointer", borderColor: "white", marginBottom: "2vh", boxShadow: "rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px" }}>Post</button>
          </div>


          {detail.feed[0].map((val, index) => {
            return (
              <div className="feedsPosted" key={index} id={val.id}>
                <div className="imagesPosted">
                  <img src={require(`${val.PostImg}`)} alt={val.postTitle} style={{ width: "100%", height: "18vw", borderTopLeftRadius: "5vh", borderTopRightRadius: "5vh", margin: "0", backgroundColor: "#333" }} />
                  <h3 style={{ color: "Red", marginLeft: "1%", fontSize: "3vh", margin: "1vh" }}>{val.friendName}  posted : <span style={{ color: "white" }}>{val.postTitle}</span></h3>
                </div>
                <div className="operations" onClick={operations} style={{ borderTop: ".2vh solid green", padding: "1vh 0" }}>
                  <span className="like"><i class="fa-regular fa-heart"></i><span style={{ fontSize: "2.5vh", margin: "2% 1%" }} >{val.likes}</span></span>
                  <span className="comment"><i class="fa-regular fa-comment"></i><span style={{ fontSize: "2.5vh", margin: "2% 1%" }}>{Object.keys(val.comments).length}</span></span>
                  <span className="share"><i class="fa-regular fa-share-from-square"></i></span>
                </div>
                <div className="comments">
                  {Object.keys(val.comments).map((val1, index) => { return (<div key={index} style={{ fontSize: "2.5vh", margin: ".8vh 1vh" }}><span>{val1} :</span> {(val.comments[val1])}</div>) })}
                  <input placeholder="comments" className="cmt" style={{ width: "70%", fontSize: "2.5vh", padding: "1vh 2vh", borderRadius: "1vh" }} /> <span style={{ padding: "1vh 2vh", backgroundColor: "grey", fontSize: "2.5vh", color: "white", borderRadius: "1vh", cursor: "pointer" }} onClick={(e) => { }}>comment</span></div>
              </div>
            );
          })}

        </div>
        <div id="navFeedAds">
          <h3 style={{ textAlign: "center", fontSize: "5vh" }}>Ads</h3>
        </div>
      </div>
    </>
  );
};

export default Feed;
