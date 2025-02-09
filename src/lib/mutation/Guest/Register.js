import { useMutation } from "@tanstack/react-query";
import { Guest } from "../..";
import { useNavigate } from "react-router-dom";
export default function RegisterGuest(){
    const navigate=useNavigate();
    const mutation=useMutation({
        mutationKey:['guest-register'],
        mutationFn:async function(data) {
            const user= await Guest.post('/register',data);
            return user.data
        }, 
        onSuccess:(data)=>{

            if (data?.token?.access_token && data?.token?.refresh_token) { // Check if tokens exist
                localStorage.setItem('acesstoken_guest', data.token.access_token);
                localStorage.setItem('refreshtoken_guest', data.token.refresh_token);
                window.location.reload()
            } else {
                console.error("Tokens missing from server response:", data);
                 }    }

        
    })

    return mutation;
}