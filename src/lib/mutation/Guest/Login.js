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
            if (data?.token?.access_token && data?.token?.refresh_token) { // Check if tokens exist
                localStorage.setItem('acesstoken_guest', data.token.access_token);
                localStorage.setItem('refreshtoken_guest', data.token.refresh_token);
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