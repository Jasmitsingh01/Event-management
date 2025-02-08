import { useMutation ,useQueryClient} from "@tanstack/react-query";
import { User } from "../..";
export default  function uploadAvatarUser(){
    const queryClient=useQueryClient()
    const mutation=useMutation({
        mutationKey:['user'],
        mutationFn:async function(data) {
            const user= await User.patch('/user-avatar',data);
            return user.data?.data
        }, 
        onSuccess:()=>{
            queryClient.invalidateQueries(['user'])
        }

        
    })

    return mutation
}