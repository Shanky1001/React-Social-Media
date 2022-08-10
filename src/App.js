
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, createContext } from 'react';
import Nav from "./Components/Nav"
import Main from './Components/Main'
import Feed from './Components/Feed'
import Login from './Components/Login';
import SignUp from './Components/Sign';
import friend from './Components/feeds.json'


export const user = createContext();
function App() {

  const [details, setDetails] = useState([]);
  var [friends, setFriends] = useState(friend)

  return (
    <>
      <user.Provider value={{details:[details, setDetails],feed:[friends, setFriends]}}>
        <div id='container' style={{ width: "90%", margin: "auto" }}>
          <Router>
            <Routes>
              <Route path='/' element={<><Nav /> <Main /></>} />
              <Route path='/feed' element={<Feed />} />
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<SignUp />} />
            </Routes>
          </Router>
        </div>
      </user.Provider>
    </>
  );
}

export default App;
