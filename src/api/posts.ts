import axios from "axios";

export const getList = async (params) => {
    return (await axios.get('/posts', params)).data
}

export const getPost = async (params) => {
    return (await axios.get('/post/', params)).data
}