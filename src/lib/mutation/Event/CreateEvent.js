import { useMutation ,useQueryClient} from "@tanstack/react-query";
import { Event } from "../..";
export default function CreateEvent(){
    const queryClient=useQueryClient()
    const mutation=useMutation({
        mutationKey:['all-event'],
        mutationFn:async function(data) {
            const user= await Event.post('/create',data);
            return user.data?.data
        }, 
        onSuccess:()=>{
            queryClient.invalidateQueries(['all-event'])
            

        }

        
    })

    return mutation
}