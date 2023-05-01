
import { useSelector } from 'react-redux'
import { userData } from '../userSlice'
import   dayjs  from 'dayjs'
import './ProfileUpdate.css'
import React, { useEffect, useState } from 'react'
import { InputText } from '../../common/InputText/InputText'
import { updateProfile } from '../../services/apiCalls';
import { useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { useDispatch } from "react-redux";
import { validate } from '../../helpers/useful';

export const ProfileUpdate = () => {

    const dispatch = useDispatch();

    const datosCredencialesRedux = useSelector(userData);
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




    const updateFunction = async () => {
        updateProfile(credenciales, datosCredencialesRedux.credentials?.token)
            .then(
                newProfile => {
                    console.log(newProfile);
                    setTimeout(() => {
                        navigate("/")
                    }, 1000);
                }
            )
            .catch(error => console.log(error));


    }

    const perfil = useSelector(userData);
    return (
        <Container fluid className="updateDesign">
            {perfil?.credentials?.token !== undefined ? (
                <>
   
            <InputText
                type="text"
                name="name"
                placeholder="Nombre"
                changeFunction={(e) => inputHandler(e)}
                validateFunction={(e) => inputValidate(e)}
            />
            <div>{credencialesError.nameError}</div>
            <InputText
                type="text"
                name="surname"
                placeholder="Apellidos"
                changeFunction={(e) => inputHandler(e)}
                validateFunction={(e) => inputValidate(e)}
            />
            <div>{credencialesError.surnameError}</div>
            <InputText
                type="phone"
                name="phone"
                placeholder="Telefono"
                changeFunction={(e) => inputHandler(e)}
                validateFunction={(e) => inputValidate(e)}
            />
            <div>{credencialesError.phoneError}</div>
            <InputText
                type="text"
                name="address"
                placeholder="Dirección"
                changeFunction={(e) => inputHandler(e)}
                validateFunction={(e) => inputValidate(e)}
            />
            <div>{credencialesError.addressError}</div>
            <InputText
                type="text"
                name="payment"
                placeholder="Metodo de pago"
                changeFunction={(e) => inputHandler(e)}
                validateFunction={(e) => inputValidate(e)}
            />
            <div>{credencialesError.paymentError}</div>
            <InputText
                type="date"
                name="birthdate"
                placeholder="Fecha de nacimiento"
                changeFunction={(e) => inputHandler(e)}
                validateFunction={(e) => inputValidate(e)}
            />
            <div>{credencialesError.birthdateError}</div>
            <InputText
                type="email"
                name="email"
                placeholder="Email nuevo"
                changeFunction={(e) => inputHandler(e)}
                validateFunction={(e) => inputValidate(e)}
            />
            <div>{credencialesError.emailError}</div>
            <InputText
                type="password"
                name="password"
                placeholder="Contraseña nueva"
                changeFunction={(e) => inputHandler(e)}
                validateFunction={(e) => inputValidate(e)}
            />
            <div>{credencialesError.passwordError}</div>

            
            <div
                className="buttonLoginDesign"
                onClick={
                    registerAct
                        ? () => {
                            updateFunction();
                        }
                        : () => { }
                }
            >
                Guardar Cambios
            </div>

                </>
            ) :
                (<div>Loading profile...</div>)}
        </Container>

    )
}

