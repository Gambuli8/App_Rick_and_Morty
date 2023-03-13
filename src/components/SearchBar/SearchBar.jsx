import { useState } from 'react';
import style from './Search.module.css';

export default function SearchBar ({onSearch}) {
   const [id, setid] = useState("");

   const handleChange = (event) => {
      setid(event.target.value);
   }

   return (
      <div className={style.barra}>
      <input type="search" onChange={handleChange} className={style.input}/>
      <button onClick={() => {
            onSearch(id);
      }} className={style.buton}>Agregar</button>
      </div>
   )
}