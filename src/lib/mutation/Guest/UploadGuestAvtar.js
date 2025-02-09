import { useMutation ,useQueryClient} from "@tanstack/react-query";
import {  GuestForm } from "../..";

export default function uploadAvatarGuest(){
    const queryClient=useQueryClient()
    const mutation=useMutation({
        mutationKey:['guest'],
        mutationFn:async function(data) {
            const user= await GuestForm.patch('/user-avatar',data);
            return user.data?.data
        }, 
        onSuccess:()=>{
            queryClient.invalidateQueries(['guest'])
        }

        
    })

    return mutation
}