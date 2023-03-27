import style from './landing.module.css';
import Forms from '../../components/forms/form';

export default function Landing ({Login}) {
    return (
    <div className={style.landing}>
    <h1 className={style.h1}>Bienvenidos a la pagina de Rick & Morty</h1>
        <Forms Login={Login}/>
    </div>
    )
};