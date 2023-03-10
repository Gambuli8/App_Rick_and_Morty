import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Cards from './components/Cards/Cards.jsx'
import NavBar from './components/nav/nav';
import About from './Views/about/About';
import Landing from './Views/Landing/landing';

function App () {

  const [characters, setCharacters] = useState([
  ]); 

  const onSearch = (id) => {
    const URL_BASE = 'https://be-a-rym.up.railway.app/api';
    const KEY = 'b8e2f06d4ef1.5c46097a13acac51985d';
    
    fetch(`${URL_BASE}/character/${id}/?key=${KEY}`)
    .then((res) => res.json())
    .then((data) => {
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        alert('Algo salio mal!');
      }
    })
  };

  const onClose = (id) => {
    setCharacters(
      characters.filter((char) => char.id !== id));
  };

  return (
    <div className='App'>
      <NavBar onSearch={onSearch} className='navBar' />
      <Routes>
      <Route path='/' element={<Landing />}/>
      <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
      <Route path='/about' element={<About />}/>
      </Routes>
    </div>
  )
}

export default App;
