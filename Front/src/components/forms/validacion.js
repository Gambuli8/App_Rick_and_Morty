const validacion = (form, seterrors, errors) => {
    if(!form.email) seterrors({...errors, email: "Rellene el input"});
    else if (form.email.length > 35)
        seterrors({...errors, email: "Tiene que ser menos de 35 caracteres"});
    else if (
        !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(form.email)
        ) {
            seterrors({...errors, email: "Email invalido"});
        } else {
            seterrors({...errors, email: ''});
        }

        //PASSWORD
        if (form.contraseña.length < 6 || form.contraseña.length > 10) {
            seterrors({ ...errors, contraseña: "Longitud de password inválida" });
        } else if (!/\d/.test(form.contraseña)) {
            seterrors({ ...errors, contraseña: "Debe contener al menos un número" });
        } else {
            seterrors({ ...errors, contraseña: "" });
        }
};





// if (userData.password.length < 6 || userData.password.length > 10) {
//     setErrors({ ...errors, password: "Longitud de password inválida" });
//   } else if (!/\d/.test(userData.password)) {
//     setErrors({ ...errors, password: "Debe contener al menos un número" });
//   } else {
//     setErrors({ ...errors, password: "" });
//   }
// };