import { useMutation ,useQueryClient} from "@tanstack/react-query";
import { Event } from "../..";
export default function EditEvent(handleClose){
    const queryClient=useQueryClient()
    const mutation=useMutation({
        mutationKey:['all-event'],
        mutationFn:async function(data) {
            const user= await Event.put(`/update/${data?.id}`,data?.data);
            return user.data?.data
        }, 
        onSuccess:()=>{
            queryClient.invalidateQueries(['all-event']);
            handleClose()
        }

        
    })

    return mutation
}