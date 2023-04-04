import { Link } from 'react-router-dom';
import style from './Card.module.css';
import {connect} from 'react-redux';
import { deleteFavorite, getFavorites } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';


   function Card({id, name, image, gender, species, onClose, myFavorite }) {

      const [isfav, setIsFav] = useState(false);
      const dispatch = useDispatch();

      const addFavorite = (character) => {
         axios.post('http://localhost:3001/rickandmorty/fav', character)
         .then((res) => {console.log('ok')})
      };

      const deleteFavorite = async (id) => {
         await axios.delete(`http://localhost:3001/rickandmorty/fav/${id}`);
         dispatch(getFavorites());
        alert('Eliminado de favoritos');
      }

      const handlerFavorite = () => {
         if(isfav) {
            setIsFav(false)
         deleteFavorite(id)
         } else {
            setIsFav(true)
            addFavorite({id,name,image,gender,species});
         }
      };

      useEffect(() => {
         myFavorite?.forEach((fav) => {
            if (fav.id === id) {
              setIsFav(true);
            }
          });
        }, [myFavorite]);


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
      deleteFavorite: (id) => {
         dispatch(deleteFavorite(id));
      },
   };
};

const mapStateToProps = (state) => {
   return {
     myFavorite: state.myFavorite,
   };
 };


export default connect(mapStateToProps, mapDispatchToProps)(Card);