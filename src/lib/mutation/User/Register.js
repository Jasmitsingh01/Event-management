import { useMutation } from "@tanstack/react-query";
import { User } from "../..";
import { useNavigate } from "react-router-dom";
export default function ResgisterUser(){
    const navigate=useNavigate();
    const mutation=useMutation({
        mutationKey:['user-register'],
        mutationFn:async function(data) {
            const user= await User.post('/register',data);
            return user.data
        }, 
        onSuccess:(data)=>{
            window?.localStorage?.setItem('acesstoken',data?.token?.access_token)
            window?.localStorage?.setItem('refreshtoken',data?.token?.refresh_token)
            
            navigate('/')
        }

        
    })

    return mutation;
}