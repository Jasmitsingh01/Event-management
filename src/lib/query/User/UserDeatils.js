import { useQuery } from "@tanstack/react-query";
import { User } from "../..";


export default function GetDeatilsofUser(isGuest){
    const query=useQuery({
        queryKey:["user"],
        queryFn:async function () {
            const user=await User.get('/profile');
            return user.data
        },
        enabled:!isGuest

    })
    return query

}