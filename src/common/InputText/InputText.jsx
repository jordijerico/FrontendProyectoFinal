
import React from 'react';
import './InputText.css';

export const InputText = ({
    type,
    placeholder,
    name,
    value,
    changeFunction,
    validateFunction
}) => {
    return (
        <>
            <input
                className='inputDesign'
                type={type}
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={changeFunction}
                onBlur={validateFunction}
            />
        </>
    )
}