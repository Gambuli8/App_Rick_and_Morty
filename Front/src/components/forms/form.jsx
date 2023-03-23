import { useState } from "react";
import style from './forms.module.css';
import validacion from './validacion';

const Forms = () => {
    const [form, setform] = useState({
        email:'',
        contraseña:'',
    });

    const [errors, seterrors] = useState({
        email:'',
        contraseña:'',
    });

    const handleChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        setform({...form, [property]: value });
        validacion({...form, [property]: value}, seterrors, errors);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        alert('login excelente');
    };


    return (
    <form onSubmit={submitHandler} className={style.formulario}>
        <div className={style.label}>
        <label htmlFor="email" className={style.email}>Email</label>
        <input type="text" name="email" value={form.email} onChange={handleChange} className={errors.email ? style.error : style.success} />
        <span>{errors.email}</span>
        </div>


        <div className={style.label}>
        <label htmlFor="Password" className={style.label}>Contraseña</label>
        <input type="text" name="contraseña" value={form.contraseña}  onChange={handleChange} className={style.password} />
        </div>
        <button type="submit" className={style.glow}>INGRESAR</button>
    </form>
    )
}

export default Forms;