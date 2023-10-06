import './App.css';
import { Routes, Route } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import Home from './components/Home.js';
import Login from './components/Login.js';
import SignUp from './components/SignUp.js'
import NavBar from './components/NavBar.js'

function App() {

  const [user, setUser] = useState(null);
  // const [games, setGames] = useState([]);

  // useEffect(() => {
  //   fetch('/games').then(res => {
  //     if (res.ok) {
  //       res.json().then(games =>
  //         setGames(games),
  //       )
  //     };
  //   });
  // }, []);

  return <div>
  <main>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home user={user}  setUser={setUser} />} exact />
        <Route path='/login' element={<Login user={user}  setUser={setUser} />} exact />
        <Route path='/signup' element={<SignUp user={user}  setUser={setUser} />} exact />
      </Routes>
    
  </main>
</div>;
}


export default App;