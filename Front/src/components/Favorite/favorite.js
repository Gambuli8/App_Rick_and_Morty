import { useSelector } from "react-redux";
import Card from "../Card/Card";

const Favorite = () => {

    const favorite = useSelector((state) => state.myFavorite);

    return (
    <>
        {favorite?.map(({id, name, species, gender, image}) => {
            return  ( 
                <Card
                key={id}
                id={id}
                name = {name}
                species = {species}
                gender = {gender}
                image = {image}
             />
          );
        })}
    </>
    );
};


export default Favorite;