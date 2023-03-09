import Card from '../Card/Card';
import style from './Cards.module.css';
// import style from './Cards.module.css';

export default function Cards({characters}) {
   // const { characters } = props;
   const onClose = () => window.alert('Emulamos que se cierra la card');
   return (
   <div className={style.container}>
      {
         characters.map(({name, species, gender, image}) => {
            return ( <Card
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
}
