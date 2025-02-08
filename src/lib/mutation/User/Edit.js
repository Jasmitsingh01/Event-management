import { useMutation ,useQueryClient} from "@tanstack/react-query";
import { User } from "../..";
export default function EditUser(){
    const queryClient=useQueryClient()
    const mutation=useMutation({
        mutationKey:['user'],
        mutationFn:async function(data) {
            const user= await User.put('/update',data);
            return user.data?.data
        }, 
        onSuccess:()=>{
            queryClient.invalidateQueries(['user'])
        }

        
    })

    return mutation
}