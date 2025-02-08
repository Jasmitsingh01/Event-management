import axios from "axios";

export const baseURL='http://localhost:5000'

export const User=axios.create({
    baseURL:baseURL+'/api/v1/user',
    headers:{
        Authorization:''
    },
    withCredentials:true
})



export const Guest=axios.create({
    baseURL:baseURL+'/api/v1/guest',
    headers:{
        Authorization:''
    },
    withCredentials:true
})



export const Event=axios.create({
    baseURL:baseURL+'/api/v1/event',
    headers:{
        Authorization:''
    },
    withCredentials:true
})