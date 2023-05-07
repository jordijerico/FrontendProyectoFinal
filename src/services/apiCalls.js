import axios from "axios"

const root = "https://backendproyectofinal-production.up.railway.app"

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
    return await axios.get(`${root}/user/allusers`, config)
}


export const updateProfile = async (body, token) => {
    var config = {
        headers: {
            'Authorization': 'Bearer ' + token,
        }
    };
    return await axios.put(`${root}/user/profile/update`, body, config)
}

export const getAllStoreProducts = async () => {

    return await axios.get(`${root}/product/allproducts`)

}

export const deleteUserByAdmin = async (id, token) => {
    var config = {
        headers: {
            'Authorization': 'Bearer ' + token,
        }
    };

    return await axios.delete(`${root}/user/profile/delete/${id}`, config)

}

export const productDetail = async (id) => {
    return await axios.get(`${root}/product/product/${id}`)

}


export const createOrder = async (token) => {
    var config = {
        headers: {
            'Authorization': 'Bearer ' + token,
        }
    };
    return await axios.post(`${root}/order/createorder`, config)

}


export const getAllOrderProductsByUser = async (id,token) => {
    var config = {
        headers: {
            'Authorization': 'Bearer ' + token,
        }
    };
    return await axios.get(`${root}/orderproduct/allorderproducts/${id}`, config)

}









// export const createOrder = async (id,token) => {
//     try {
//       const config = {
//         headers: {
//           'Authorization': 'Bearer ' + token,
//         }
//       };
  
//       const data = {
//         // Aquí puedes agregar los datos del pedido
//         // que deseas enviar al servidor
//         user_id: id,
//         status: 'pending'
//       };
  
//       const response = await axios.post(`${root}/order/createorder`, data, config);
//       return response.data;
//     } catch (error) {
//       throw new Error(error.message);
//     }
//   }