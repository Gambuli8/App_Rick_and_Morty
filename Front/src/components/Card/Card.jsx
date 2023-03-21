import { Link } from 'react-router-dom';
import style from './Card.module.css';

   function Card({id, name, image, onClose}) {
   return (
      <div className={style.container}>
         <button onClick= {() => onClose(id)} className={style.boton}>X</button>
         <Link to={`/detail/${id}`}><h2 className={style.h2}>{name}</h2></Link>
         <img src={image} alt="" /> 
      </div>
   );
}

export default Card;