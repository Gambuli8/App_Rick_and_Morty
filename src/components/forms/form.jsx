import { useState } from "react";
import style from './forms.module.css';

const Forms = () => {
    const [Forms, setForms] = useState({
        usuario: '',
        contraseña: '',
    });

    const [Errors, setErrors] = useState({
        usuario: '',
        contraseña: '',
    });

    const validacion = (Forms, Errors, setErrors) => {
        if(!Forms.usuario) setErrors({...Errors, usuario: 'Rellene el input'});
        else (setErrors({...Errors, usuario: ''}));
    }

    const handleChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        setForms({...Forms, [property]: value });
        validacion(Forms, Errors, setErrors);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        alert('login excelente');
    };


    return (
    <form onSubmit={submitHandler} className={style.formulario}>
        <div className={style.label}>
        <label htmlFor="">Usuario</label>
        <input type="text" name="usuario" value={Forms.usuario} onChange={handleChange} />
        </div>

        <div className={style.label}>
        <label htmlFor="">Contraseña</label>
        <input type="text" name="contraseña" value={Forms.contraseña}  onChange={handleChange} />
        </div>
        <button className={style.glow}>INGRESAR</button>
    </form>
    )
}

export default Forms;