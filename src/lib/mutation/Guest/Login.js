import { useMutation } from "@tanstack/react-query";
import { Guest } from "../..";
import { useNavigate } from "react-router-dom";
export default function LoginGuest(){
    const navigate=useNavigate();
    const mutation=useMutation({
        mutationKey:['Guest-login'],
        mutationFn:async function(data) {
            const user= await Guest.post('/login',data);
            return user.data
        }, 
        onSuccess:(data)=>{
            window?.localStorage?.setItem('acesstoken_guest',data?.token?.access_token)
            window?.localStorage?.setItem('refreshtoken_guest',data?.token?.refresh_token)
            window.location.reload()
            navigate('/')
        }

        
    })

    return mutation;
}