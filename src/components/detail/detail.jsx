import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from './detail.module.css';

const Detail = () => {
    const { detailId } = useParams();

    const [character, setCharacter] = useState({});

    useEffect(() => {
    const URL_BASE = 'https://be-a-rym.up.railway.app/api';
    const KEY = 'b8e2f06d4ef1.5c46097a13acac51985d';

    fetch(`${URL_BASE}/character/${detailId}/?key=${KEY}`)
    .then((response) => response.json())
    .then((char) => {
        if (char.name) {
        setCharacter(char);
        } else {
        window.alert("No hay personajes con ese ID");
        }
    })
    .catch((err) => {
        window.alert("No hay personajes con ese ID");
    });
    return setCharacter({});
    }, []);

    return (
    <div>
        {character.name ? (
        <div className={style.card_detail}>
            <div className={style.containerh2}>
                <h2 className={style.h2}>id: {character.id}</h2>
                <h2 className={style.h2}>Nombre: {character.name}</h2>
                <h2 className={style.h2}>Specie: {character.species}</h2>
                <h2 className={style.h2}>Gender: {character.gender}</h2>
                <h2 className={style.h2}>Status: {character.status}</h2>
                <h2 className={style.h2}>Origin: {character.origin?.name}</h2>
            </div>
                <img src={character.image} alt="" />
        </div>
        ) : (
                <h3 className={style.h3}>Loading...</h3>
        )}
    </div>
        )
}

export default Detail;