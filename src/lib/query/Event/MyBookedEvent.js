import { useQuery } from "@tanstack/react-query";
import { Event } from "../..";

export default function MyBooking(){
    const query=useQuery({
        queryKey:["booked-event"],
        queryFn:async function () {
            const user=await Event.get('/my-booked-event');
            return user.data?.events
        },


        

    })
    return query

}