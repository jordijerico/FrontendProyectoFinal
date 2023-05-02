
import { useSelector } from 'react-redux'
import   dayjs  from 'dayjs'
import './ProfileUpdate.css'
import React, { useEffect, useState } from 'react'
import { InputText } from '../../common/InputText/InputText'
import { updateProfile } from '../../services/apiCalls';
import { useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { useDispatch } from "react-redux";
import { validate } from '../../helpers/useful';
import { userData, userout } from '../../pages/userSlice'
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

    const logoutFunction = () => {

        dispatch(userout({ credentials: {} }));
        setTimeout(() => {
            navigate("/")
        }, 200);
    }


    const updateFunction = async () => {
        updateProfile(credenciales, datosCredencialesRedux.credentials?.token)
            .then(
                newProfile => {
                    logoutFunction();
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
                placeholder={datosCredencialesRedux.credentials?.usuario.name}
                changeFunction={(e) => inputHandler(e)}
                validateFunction={(e) => inputValidate(e)}
            />
            <div>{credencialesError.nameError}</div>
            <InputText
                type="text"
                name="surname"
                placeholder={datosCredencialesRedux.credentials?.usuario.surname}
                changeFunction={(e) => inputHandler(e)}
                validateFunction={(e) => inputValidate(e)}
            />
            <div>{credencialesError.surnameError}</div>
            <InputText
                type="phone"
                name="phone"
                placeholder={datosCredencialesRedux.credentials?.usuario.phone}
                changeFunction={(e) => inputHandler(e)}
                validateFunction={(e) => inputValidate(e)}
            />
            <div>{credencialesError.phoneError}</div>
            <InputText
                type="text"
                name="address"
                placeholder={datosCredencialesRedux.credentials?.usuario.address}
                changeFunction={(e) => inputHandler(e)}
                validateFunction={(e) => inputValidate(e)}
            />
            <div>{credencialesError.addressError}</div>
            <InputText
                type="text"
                name="payment"
                placeholder={datosCredencialesRedux?.credentials?.usuario?.payment}
                changeFunction={(e) => inputHandler(e)}
                validateFunction={(e) => inputValidate(e)}
            />
            <div>{credencialesError.paymentError}</div>
            <InputText
                type="date"
                name="birthdate"
                placeholder={datosCredencialesRedux.credentials?.usuario.birthdate}
                changeFunction={(e) => inputHandler(e)}
                validateFunction={(e) => inputValidate(e)}
            />
            <div>{credencialesError.birthdateError}</div>
            <InputText
                type="text"
                name="dni"
                placeholder={datosCredencialesRedux.credentials?.usuario.dni}
                changeFunction={(e) => inputHandler(e)}
                validateFunction={(e) => inputValidate(e)}
            />
            <div>{credencialesError.dniError}</div>
            <InputText
                type="email"
                name="email"
                placeholder={datosCredencialesRedux.credentials?.usuario.email}
                changeFunction={(e) => inputHandler(e)}
                validateFunction={(e) => inputValidate(e)}
            />
            <div>{credencialesError.emailError}</div>
            <InputText
                type="password"
                name="password"
                placeholder= "Nueva contraseña"
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

