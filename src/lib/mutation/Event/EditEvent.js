import { useMutation ,useQueryClient} from "@tanstack/react-query";
import { Event } from "../..";
export default function EditEvent(){
    const queryClient=useQueryClient()
    const mutation=useMutation({
        mutationKey:['Event'],
        mutationFn:async function(data) {
            const user= await Event.put(`/update/${data?.id}`,data?.data);
            return user.data?.data
        }, 
        onSuccess:()=>{
            queryClient.invalidateQueries(['Event'])
        }

        
    })

    return mutation
}