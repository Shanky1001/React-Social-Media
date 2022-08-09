import React from 'react'

const Main = () => {
  return (
    <>
      <div id='mainContainer'>
        <div style={{ width: "50%" }}>
          <p style={{ fontSize: "10vh", fontFamily: "Helvetica Neue", color: "#8f5849", fontWeight: "100" }}>Welcome to your professional community</p>

          <div id='cards'>
            <div><h3>Search For Job</h3> <i class="fa-solid fa-angle-right"></i></div>
            <div><h3>Find a Person You Know</h3> <i class="fa-solid fa-angle-right"></i></div>
            <div><h3>Learn a new skill</h3> <i class="fa-solid fa-angle-right"></i></div>
          </div>
        </div>
        <div style={{ width: "50%" }}>
          <img src='https://media.licdn.com/media//AAYQAgSrAAgAAQAAAAAAAEVvdO3Jm6iVQXG5SP9qTlx0OQ.jpg' alt='Find Your Space' />
        </div>
      </div>
    </>
  )
}

export default Main