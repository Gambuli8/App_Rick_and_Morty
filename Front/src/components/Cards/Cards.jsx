import Card from '../Card/Card';
import style from './Cards.module.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getFavorites } from '../../redux/actions';

function Cards({characters, onClose}) {
   const dispatch = useDispatch();
    
    useEffect (() => {
        dispatch(getFavorites());
    }, []);
   return (
   <div className={style.container}>
      {
         characters.map(({id, name, species, gender, image}) => {
            return ( <Card
                     key={id}
                     id={id}
                     name = {name}
                     species = {species}
                     gender = {gender}
                     image = {image}
                     onClose = {onClose}
                  />
               );
            })
         }
      </div>
   )
};


export default Cards;
