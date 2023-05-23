import axios from "axios";
import {AuthLogin, AuthRegister} from "@/api/dto/auth.dto";

export const login = async (body: AuthLogin) => {
    return (await axios.post('/auth/login', body)).data
}

export const register = async (body: AuthRegister) => {
    return (await axios.post('/auth/register', body)).data
}