import axios from "axios"

const root = "http://localhost:4000"


export const registerMe = async (body) => {

    return await axios.post(`${root}/auth/register`, body)
}