import axios from "axios";

export const baseURL = "https://eventmangement-evd5.onrender.com";

export const User = axios.create({
  baseURL: baseURL + "/api/v1/user",
  headers: {
    'Authorization':window?.localStorage?.getItem('accesstoken') && window?.localStorage?.getItem('accesstoken') !==''? window?.localStorage?.getItem('accesstoken'):'',    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    'Access-Control-Allow-Credentials':true
  },
  withCredentials: true,
});


export const UserForm = axios.create({
  baseURL: baseURL + "/api/v1/user",
  headers: {
'Authorization':window?.localStorage?.getItem('accesstoken') && window?.localStorage?.getItem('accesstoken') !==''? window?.localStorage?.getItem('accesstoken'):'',    "Content-Type": "application/json",
        "Content-Type": "multipart/form-data",

  },
  withCredentials: true,
});
export const Guest = axios.create({
  baseURL: baseURL + "/api/v1/guest",
  headers: {
    'Authorization':window?.localStorage?.getItem('accesstoken_guest') && window?.localStorage?.getItem('accesstoken_guest') !==''? window?.localStorage?.getItem('accesstoken_guest'):'',    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    'Access-Control-Allow-Credentials':true
  },
  withCredentials: true,
});


export const GuestForm = axios.create({
  baseURL: baseURL + "/api/v1/guest",
  headers: {
'Authorization':window?.localStorage?.getItem('accesstoken_guest') && window?.localStorage?.getItem('accesstoken_guest') !==''? window?.localStorage?.getItem('accesstoken_guest'):'',    "Content-Type": "application/json",
    "Content-Type": "multipart/form-data",

  },
  withCredentials: true,
});
export const Event = axios.create({
  baseURL: baseURL + "/api/v1/event",
  headers: {
    'Authorization':window?.localStorage?.getItem('accesstoken') && window?.localStorage?.getItem('accesstoken') !==''? window?.localStorage?.getItem('accesstoken_guest'):'',
    "Content-Type": "application/json",
    
  },
  withCredentials: true,
});
