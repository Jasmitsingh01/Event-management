import { useMutation ,useQueryClient} from "@tanstack/react-query";
import { Event } from "../..";
export default function Booked(handleClose){
    const queryClient=useQueryClient()
    const mutation=useMutation({
        mutationFn:async function (data) {

            const Booked=await Event.patch(`/booked/${data}`);

            return Booked.data
            
        },
        mutationKey:['all-booked-events'],
        onSuccess:()=>{
            queryClient.invalidateQueries(['all-events','all-booked-events'])
            handleClose()
        }
    })
    return mutation

}