import { useMutation } from "@tanstack/react-query";
import { Guest } from "../..";
export default function RegisterGuest(){
    const mutation=useMutation({
        mutationKey:['guest-register'],
        mutationFn:async function(data) {
            const user= await Guest.post('/register',data);
            return user.data
        }, 
        onSuccess:(data)=>{

            window?.localStorage?.setItem('acesstoken_guest',data?.token?.access_token)
            window?.localStorage?.setItem('refreshtoken_guest',data?.token?.refresh_token)        }

        
    })

    return mutation;
}