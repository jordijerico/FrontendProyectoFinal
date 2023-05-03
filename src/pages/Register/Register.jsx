import React, { useEffect, useState } from 'react'
import { InputText } from '../../common/InputText/InputText'
import './Register.css'
import { registerMe } from '../../services/apiCalls'
import { useNavigate } from 'react-router-dom'
import { validate } from '../../helpers/useful';

export const Register = () => {
    const navigate = useNavigate();

    const [credenciales, setCredenciales] = useState({
        name: "",
        email: "",
        password: "",

    });

    const [credencialesError, setCredencialesError] = useState({
        nameError: "",
        emailError: "",
        passwordError: "",
    });


    const inputHandler = (e) => {
        setCredenciales((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const [registerAct, setRegisterAct] = useState(false);


    useEffect(() => {
        for (let error in credencialesError) {
            if (credencialesError[error] !== "" && credenciales !== "") {
                setRegisterAct(false);
                return;
            }
        }
        setRegisterAct(true);
    });


    const inputValidate = (e) => {


        let error = "";

        let checked = validate(
            e.target.name,
            e.target.value,
        );

        error = checked.message;


        setCredencialesError((prevState) => ({
            ...prevState,
            [e.target.name + "Error"]: error,
        }));
    };




    const registerFunction = () => {

        registerMe(credenciales)
            .then(
                userData => {
                    setTimeout(() => {
                        navigate("/login")
                    }, 1000);
                }
            )
            .catch(error => console.log(error));
    }


    return (
        <div className='registerDesign'>
            <InputText
                type="text"
                name="name"
                placeholder="Nombre"
                changeFunction={(e) => inputHandler(e)}
                validateFunction={(e) => inputValidate(e)}
            />
            <div className='divMessageError'>{credencialesError.nameError}</div>   

            <InputText
                type="email"
                name="email"
                placeholder="Email"
                changeFunction={(e) => inputHandler(e)}
                validateFunction={(e) => inputValidate(e)}
            />
            <div className='divMessageError'> {credencialesError.emailError}</div>

            <InputText
                type="password"
                name="password"
                placeholder="Contraseña"
                changeFunction={(e) => inputHandler(e)}
                validateFunction={(e) => inputValidate(e)}
            />
            <div className='divMessageError'>{credencialesError.passwordError}</div>

            <div
                className="buttonRegisterDesign"
                onClick={
                    registerAct
                        ? () => {
                            registerFunction();
                        }
                        : () => { }
                }
            >
                Register
            </div>

        </div>
    )
}
