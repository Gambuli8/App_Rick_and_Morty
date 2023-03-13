import { Route } from 'react-router-dom';
import style from './landing.module.css';

export default function landing () {
    return (
    <div className={style.landing}>
        <button className={style.glow} type="button">BUSCAR</button>
    <h1 className={style.h1}>Bienvenidos a la pagina de Rick & Morty</h1>
    <p className={style.p}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt expedita quod pariatur. Incidunt, corrupti quam ipsam reprehenderit voluptatem ipsum? Blanditiis corporis similique ab placeat distinctio dolore cupiditate voluptatibus quod provident.</p>
    <p className={style.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ex nam quasi velit libero architecto sed dolorum in sapiente id maxime repudiandae, ut impedit veniam non aliquid ipsam deserunt omnis!</p>
    <p className={style.p}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus itaque unde tempore architecto minima quasi. Labore sit eos repellat saepe commodi, numquam illo fugit recusandae excepturi maxime. Eum, in nisi.</p>
    </div>
    )
};