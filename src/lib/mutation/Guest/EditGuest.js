import { useMutation ,useQueryClient} from "@tanstack/react-query";
import { Guest } from "../..";
export default function EditGuest(){
    const queryClient=useQueryClient()
    const mutation=useMutation({
        mutationKey:['guest'],
        mutationFn:async function(data) {
            const user= await Guest.put('/update',data);
            return user.data?.data
        }, 
        onSuccess:()=>{
            queryClient.invalidateQueries(['guest'])
        }

        
    })

    return mutation
}