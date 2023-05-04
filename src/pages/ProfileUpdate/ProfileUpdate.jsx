import { useSelector } from 'react-redux'
import dayjs from 'dayjs'
import './ProfileUpdate.css'
import React, { useEffect, useState } from 'react'
import { InputText } from '../../common/InputText/InputText'
import { loginMe, updateProfile } from '../../services/apiCalls';
import { useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { useDispatch } from "react-redux";
import { validate } from '../../helpers/useful';
import { login } from "../userSlice"
import { decodeToken } from 'react-jwt';
import { userData } from '../../pages/userSlice'
export const ProfileUpdate = () => {

    const dispatch = useDispatch();

    const datosCredencialesRedux = useSelector(userData);
    const navigate = useNavigate();
    const [credenciales, setCredenciales] = useState({
        name: "",
        surname: "",
        phone: "",
        address: "",
        payment: "",
        birthdate: "",
        dni: "",
        email: "",
        password: "",
    });

    const [credencialesError, setCredencialesError] = useState({
        nameError: "",
        surnameError: "",
        phoneError: "",
        addressError: "",
        paymentError: "",
        birthdateError: "",
        dniError: "",
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

    const loginFunction = async () => {

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

                } catch (error) {
                    console.log(error);
                }
            }

        } catch (error) {
            console.log(error);
        }
    }





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

    // const logoutFunction = () => {

    //     dispatch(userout({ credentials: {} }));
    //     setTimeout(() => {
    //         navigate("/")
    //     }, 200);
    // }


    const updateFunction = async () => {
        if (credenciales.email !== "" || credenciales.password !== "" || credenciales.name !== "" || credenciales.surname !== "" || credenciales.address !== "" || credenciales.phone !== "" || credenciales.dni !== "" || credenciales.birthdate !== "" || credenciales.payment !== "") {
            updateProfile(credenciales, datosCredencialesRedux.credentials?.token)
                .then(
                    newProfile => {
                        loginFunction();
                        setTimeout(() => {
                            navigate("/profile")
                        }, 1000);

                    }
                )
                .catch(error => console.log(error));

        }
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
                    <div className='divMessageError'>{credencialesError.nameError}</div>
                    <InputText
                        type="text"
                        name="surname"
                        placeholder="Apellidos"
                        changeFunction={(e) => inputHandler(e)}
                        validateFunction={(e) => inputValidate(e)}
                    />
                    <div className='divMessageError'> {credencialesError.surnameError}</div>
                    <InputText
                        type="phone"
                        name="phone"
                        placeholder="Teléfono"
                        changeFunction={(e) => inputHandler(e)}
                        validateFunction={(e) => inputValidate(e)}
                    />
                    <div className='divMessageError'>{credencialesError.phoneError}</div>
                    <InputText
                        type="text"
                        name="address"
                        placeholder="Dirección"
                        changeFunction={(e) => inputHandler(e)}
                        validateFunction={(e) => inputValidate(e)}
                    />
                    <div className='divMessageError'>{credencialesError.addressError}</div>
                    <InputText
                        type="text"
                        name="payment"
                        placeholder="Método de pago"
                        changeFunction={(e) => inputHandler(e)}
                        validateFunction={(e) => inputValidate(e)}
                    />
                    <div className='divMessageError'>{credencialesError.paymentError}</div>
                    <InputText
                        type="date"
                        name="birthdate"
                        placeholder="Fecha de nacimiento"
                        changeFunction={(e) => inputHandler(e)}
                        validateFunction={(e) => inputValidate(e)}
                    />
                    <div className='divMessageError'>{credencialesError.birthdateError}</div>
                    <InputText
                        type="text"
                        name="dni"
                        placeholder="DNI"
                        changeFunction={(e) => inputHandler(e)}
                        validateFunction={(e) => inputValidate(e)}
                    />
                    <div className='divMessageError'>{credencialesError.dniError}</div>
                    <InputText
                        type="email"
                        name="email"
                        placeholder={datosCredencialesRedux.credentials?.usuario.email}
                        changeFunction={(e) => inputHandler(e)}
                        validateFunction={(e) => inputValidate(e)}
                    />
                    <div className='divMessageError'>{credencialesError.emailError}</div>
                    <InputText
                        type="password"
                        name="password"
                        placeholder="Nueva contraseña"
                        changeFunction={(e) => inputHandler(e)}
                        validateFunction={(e) => inputValidate(e)}
                    />
                    <div className='divMessageError'>{credencialesError.passwordError}</div>

                    <div className='divCenterButtons'>
                        <div
                            className="buttonUpdateProfile"
                            onClick={
                                registerAct
                                    ? () => {
                                        updateFunction();
                                    }
                                    : () => { }
                            }
                        >
                            Guardar
                        </div>
                        <div className='btnAtras' onClick={() => { navigate("/profile") }}>Cancelar</div>
                    </div>
                </>
            ) :
                (<div>Loading profile...</div>)}
        </Container>

    )
}

