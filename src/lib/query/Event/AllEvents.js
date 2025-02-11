import { useQuery } from "@tanstack/react-query";
import { Event } from "../..";

export default function AllEvents(){
    const query=useQuery({
        queryKey:["all-event"],
        queryFn:async function () {
            const user=await Event.get('/all');
            return user.data
        },
        

    })
    return query

}