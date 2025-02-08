import { useMutation } from "@tanstack/react-query";
import { User } from "../..";
export default function LoginUser(){
    const mutation=useMutation({
        mutationKey:['user-login'],
        mutationFn:async function(data) {
            const user= await User.post('/login',data);
            return user.data?.data
        }, 
        onSuccess:(data)=>{
            console.log(data)
            window?.localStorage?.setItem('acesstoken',data?.token?.access_token)
            window?.localStorage?.setItem('refreshtoken',data?.token?.refresh_token)
        }

        
    })

    return mutation;
}