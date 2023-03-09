import style from './Card.module.css';

   function Card({name, species, gender, image, onClose}) {
   return (
      <div className={style.container}>
         <button className={style.boton} onClick= {onClose}>X</button>
         <h2>{name}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <img src={image} alt="" /> 
      </div>
   );
}

export default Card;