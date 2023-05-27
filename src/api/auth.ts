import {AuthLogin, AuthRegister, AuthToken} from "@/api/dto/auth.dto";
import axios from "@/core/axios";

export const login = async (body: AuthLogin): Promise<AuthToken> => {
    return (await axios.post('/auth/login', body)).data
}

export const register = async (body: AuthRegister) => {
    return (await axios.post('/auth/register', body)).data
}