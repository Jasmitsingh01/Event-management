import { useMutation ,useQueryClient} from "@tanstack/react-query";
import { Event } from "../..";
export default function DeleteEvent(handleClose){
    const queryClient=useQueryClient()
    const mutation=useMutation({
        mutationKey:['all-event'],
        mutationFn:async function(data) {
            const user= await Event.delete(`/remove/${data}`);
            return user.data
        }, 
        onSuccess:()=>{
            queryClient.invalidateQueries(['all-event'])
            handleClose();
        }

        
    })

    return mutation
}