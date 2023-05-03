import React, { useEffect, useState } from 'react'
import { InputText } from '../../common/InputText/InputText'
import { loginMe } from '../../services/apiCalls';
import './Login.css'
import { useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { useDispatch } from "react-redux";
import { login } from "../userSlice"
import { decodeToken } from 'react-jwt';
import { validate } from '../../helpers/useful';
export const Login = () => {

    const dispatch = useDispatch();


    const navigate = useNavigate();
    const [credenciales, setCredenciales] = useState({
        email: "",
        password: "",
    });

    const [credencialesError, setCredencialesError] = useState({
        emailError: "",
        passwordError: "",
    });

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



    const inputHandler = (e) => {
        setCredenciales((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

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




    const loginFunction = async () => {
        if (credenciales.email !== "" || credenciales.password !== "") {
            try {
                const loginResult = await loginMe(credenciales)
                if (loginResult.data.success) {
                    try {
                        const decoded = decodeToken(loginResult.data.data)
                        let datosBackend = {

                            token: loginResult.data.data,
                            usuario: decoded

                        }

                        dispatch(login({ credentials: datosBackend }));

                        setTimeout(() => {
                            navigate("/")
                        }, 1000);
                    } catch (error) {
                        console.log(error);
                    }
                }

            } catch (error) {
                console.log(error);
            }
        }


    }


    return (
        <Container fluid className="loginDesign">
            
            <InputText
                type="email"
                name="email"
                placeholder="Email"
                changeFunction={(e) => inputHandler(e)}
                validateFunction={(e) => inputValidate(e)}
            />
            <div className='divMessageError'>{credencialesError.emailError}</div>
            <InputText
                type="password"
                name="password"
                placeholder="Contraseña"
                changeFunction={(e) => inputHandler(e)}
                // validateFunction={(e) => inputValidate(e)}
            />
            <div className='divMessageError'>{credencialesError.passwordError}</div>


            <div
                className="buttonLoginDesign"
                onClick={
                    registerAct
                        ? () => {
                            loginFunction();
                        }
                        : () => { }
                }
            >
                Iniciar Sesión
            </div>

<div className='divCrearCuenta' onClick={() => { navigate("/register") }}>¿No tiene una cuenta? Cree una aquí &gt;</div>



        </Container>
    )
}
