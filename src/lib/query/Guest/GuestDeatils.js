import { useQuery } from "@tanstack/react-query";
import { Guest } from "../..";



export default function GetDeatilsofGuest(isGuest){
    const query=useQuery({
        queryKey:["guest"],
        queryFn:async function () {
            const user=await Guest.get('/profile');
            return user.data
        },
        enabled:isGuest

    })
    return query

}