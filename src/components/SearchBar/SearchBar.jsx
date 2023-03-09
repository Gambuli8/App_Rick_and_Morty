import style from './Search.module.css';

export default function SearchBar({onSearch}) {
   return (
      <div className={style.nav}>
         <input type='search' placeholder='Buscar'/>
      <button onClick={(id) => {onSearch()}}>Agregar</button> 
      </div>
   );
}
