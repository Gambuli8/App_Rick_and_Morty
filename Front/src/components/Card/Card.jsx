import { Link } from 'react-router-dom';
import style from './Card.module.css';
import {connect} from 'react-redux';
import { addFavorite, deleteFavorite, } from '../../redux/actions';
import { useState } from 'react';

   function Card({id, name, image, onClose, addFavorite, deleteFavorite }) {

      const [isfav, setIsFav] = useState(false);

      const handlerFavorite = () => {
         if(isfav) {
            setIsFav(false)
         deleteFavorite(id)
         } else {
            setIsFav(true)
            addFavorite({id,name,image,onClose})
         }
      }


   return (
      <div className={style.container}>
      { isfav ? (
         <button className='butonFav' onClick={handlerFavorite}>❤️</button>
      ) : (
         <button className='butonFav' onClick={handlerFavorite}>🤍</button>
      )} 
         <button onClick= {() => onClose(id)} className={style.boton}>X</button>
            <Link to={`/detail/${id}`}><h2 className={style.h2}>{name}</h2></Link>
         <img src={image} alt="" /> 
      </div>
   );
};

const mapDispatchToProps = (dispatch) => {
   return {
      addFavorite: (characters) => {
         dispatch(addFavorite(characters));
      },
      deleteFavorite: (id) => {
         dispatch(deleteFavorite(id));
      },
   }
}



export default connect(null, mapDispatchToProps)(Card);