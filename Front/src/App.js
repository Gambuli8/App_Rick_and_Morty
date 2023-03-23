import { useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import './App.css'
import Cards from './components/Cards/Cards.jsx'
import NavBar from './components/nav/nav';
import About from './Views/about/About';
import Detail from './components/detail/detail';
import Landing from './Views/Landing/landing';
import Forms from './components/forms/form';

function App () {

  const [characters, setCharacters] = useState([
  ]); 

  const [access, setAccess] = useState(false);
  const navigate = useNavigate();

  const gmail = 'gerogambuli2002@gmail.com';
  const password = 'gero1234';

  const {pathname} = useLocation();

  const onSearch = (id) => {
    const URL_BASE = 'http://localhost:3001/rickandmorty';
    
    fetch(`${URL_BASE}/onsearch/${id}`)
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

  const login = (form) => {
    if (form.email === gmail && form.contraseña === password) {
      setAccess(true);
      navigate('/home');
    } else {
      alert('datos incorretctos');
    }
  }

  return (
    <div className='App'>
      { pathname !== '/' && <NavBar onSearch={onSearch} className='navBar' />}
      <Routes>
      <Route path='/' element={<Landing />}/>
      <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
      <Route path='/about' element={<About />}/>
      <Route path='/detail/:detailId' element={<Detail/>} />
      <Route path='/forms' element = {<Forms/>}/>
      </Routes>
    </div>
  )
}

export default App;
