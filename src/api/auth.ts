import axios from "axios";
import {AuthLogin, AuthRegister, AuthToken} from "@/api/dto/auth.dto";

export const login = async (body: AuthLogin): Promise<AuthToken> => {
    return (await axios.post('/auth/login', body)).data
}

export const register = async (body: AuthRegister) => {
    return (await axios.post('/auth/register', body)).data
}