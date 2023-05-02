import axios from "axios"

const root = "http://localhost:4000"

export const loginMe = async (body) => {
    return await axios.post(`${root}/auth/login`, body)
}

export const registerMe = async (body) => {

    return await axios.post(`${root}/auth/register`, body)
}

export const getAllUsersByAdmin = async (token) => {

    var config = {
                headers: {
                    'Authorization': 'Bearer ' + token,
                }
            };
    return await axios.get(`${root}/user/allusers`,config)
}


export const updateProfile = async (body,token) => {
    var config = {
        headers: {
            'Authorization': 'Bearer ' + token,
        }
    };
    return await axios.put(`${root}/user/profile/update`, body,config)
}

export const getAllStoreProducts = async () =>  {

    return await axios.get(`${root}/product/allproducts`)

}
