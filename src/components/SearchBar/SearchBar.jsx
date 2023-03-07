export default function SearchBar({onSearch}) {
   return (
      <div>
         <input type='search' />
      <button onClick={(id) => {onSearch()}}>Agregar</button> 
      </div>
   );
}
