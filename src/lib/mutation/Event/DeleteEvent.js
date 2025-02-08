import { useMutation ,useQueryClient} from "@tanstack/react-query";
import { Event } from "../..";
export default function DeleteEvent(){
    const queryClient=useQueryClient()
    const mutation=useMutation({
        mutationKey:['Event'],
        mutationFn:async function(data) {
            const user= await Event.delete(`/remove/${data}`);
            return user.data?.data
        }, 
        onSuccess:()=>{
            queryClient.invalidateQueries(['Event'])
        }

        
    })

    return mutation
}