import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home.js';
import Login from './components/Login.js';
import SignUp from './components/SignUp.js'
import NavBar from './components/NavBar.js'

function App() {
  return <div>
  <main>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>} exact />
        <Route path='/login' element={<Login/>} exact />
        <Route path='/signup' element={<SignUp/>} exact />
      </Routes>
    
  </main>
</div>;
}


export default App;