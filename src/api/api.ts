import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "fab19197-098e-4362-876a-0c0797e21ac6"
    }

});

export const getUsers = (currentPage: number = 1, pageSize: number = 10) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data)
}

export const followUser = (userId: number) => {
    return instance.post(`follow/${userId}`)
        .then(response => response.data)
}




