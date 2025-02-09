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
            if (data?.token?.access_token && data?.token?.refresh_token) { // Check if tokens exist
                localStorage.setItem('accesstoken', data.token.access_token);
                localStorage.setItem('refreshtoken', data.token.refresh_token);
                window.location.reload()
            } else {
                // Handle the case where tokens are missing.  Perhaps display an error message.
                console.error("Tokens missing from server response:", data);
                // Optionally, you might choose to reload if you absolutely must, but it's generally better to handle it without a full reload.
                // window.location.reload(); // Only if absolutely necessary and after handling the missing token case
            }
        }

        
    })

    return mutation;
}