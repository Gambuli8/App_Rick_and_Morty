import Card from '../Card/Card';
import style from './Cards.module.css';

function Cards({characters, onClose}) {
   // const { characters } = props;
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


export default Cards
