import React from "react";
import { useForm } from "react-hook-form";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import EditIcon from '@mui/icons-material/Edit';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import PlaceIcon from '@mui/icons-material/Place';
import EditGuest from "../lib/mutation/Guest/EditGuest";
import EditUser from "../lib/mutation/User/Edit";
import uploadAvatarGuest from "../lib/mutation/Guest/UploadGuestAvtar";
import uploadAvatarUser from "../lib/mutation/User/UploadAvtar";
import GetDeatilsofUser from "../lib/query/User/UserDeatils";
import GetDeatilsofGuest from "../lib/query/Guest/GuestDeatils";

const Profile = ({isGuest}) => {
  const { register, handleSubmit, formState: { errors }, setValue } = useForm();
  const [Edit,setEdit]=React.useState(false);
  const {mutate:Guest}=EditGuest();
  const {mutate:User}=EditUser()
  const {mutate:AvatarGuest}=uploadAvatarGuest();
  const {mutate:AvtarUser}=uploadAvatarUser()
  const {data:UserDeatils}=GetDeatilsofUser(isGuest)
  const {data:GuestDeatils}=GetDeatilsofGuest(isGuest)
  const onSubmit = (data) => {
    if(isGuest){
     Guest(data)
    }
    else{
     User(data)
    }
  };

  React.useEffect(() => {
    setValue("email", "sarah.anderson@email.com");
    setValue("phone", "+1 (555) 123-4567");
    setValue("location", "San Francisco, CA");
    setValue("name", "Sarah Anderson") // Set the name
  }, [setValue]);


  return (
    <>
      <div className="w-[1200px] max-w-full mx-auto bg-gradient-to-br from-violet-50 via-purple-50 to-rose-50 p-4 md:p-6 rounded-xl">
        <div className="container mx-auto flex flex-col items-center mb-5">
          <div>
            <details className=" bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <summary className="list-none">
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 relative h-24 bg-violet-100 rounded-full flex items-center justify-center mb-4 group-open:ring-4 ring-violet-200 transition-all duration-300">
                    <span className="material-symbols-outlined text-4xl text-violet-600">
                      <AccountCircleIcon />
                    </span>
                    <input type="file" name="avtar" className=" absolute w-full h-full opacity-0" onChange={(e)=>{
                      isGuest? AvatarGuest(e.target.files[0]) : AvtarUser(e.target.files[0])
                    }} />
                  </div>
                  <div className="text-2xl  font-bold mb-2">
                    <input readOnly={!Edit} type="text" {...register("name", { required: "Name is required" })} className=" w-fit   text-center   focus:outline-none "/>
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                  </div>
                  <p className="text-gray-600 mb-4">Event Enthusiast</p>
                  <div className="flex gap-4 mb-6">
                    <button onClick={()=>setEdit(!Edit)} className="p-2 rounded-full hover:bg-violet-100 transition-all duration-300">
                      <span className="material-symbols-outlined text-violet-600">
                        <EditIcon />
                      </span>
                    </button>
                  </div>
                  <form onSubmit={handleSubmit(onSubmit)}> {/* Form starts here */}
                    <div className="w-full space-y-4">
                      <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-all duration-300">
                        <span className="material-symbols-outlined text-violet-600">
                          <EmailIcon />
                        </span>
                        <input
                        readOnly={!Edit}
                          type="email"
                          {...register("email", { required: "Email is required", pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })}
                          className="w-full bg-transparent focus:outline-none focus:ring-2 ring-violet-200 rounded px-2 py-1"
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}

                      </div>
                      <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-all duration-300">
                        <span className="material-symbols-outlined text-purple-600">
                          <PhoneAndroidIcon />
                        </span>
                        <input
                          type="tel"
                          readOnly={!Edit}
                          {...register("phone", { required: "Phone is required" })}
                          className="w-full bg-transparent focus:outline-none focus:ring-2 ring-purple-200 rounded px-2 py-1"
                        />
                        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                      </div>
                      <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-all duration-300">
                        <span className="material-symbols-outlined text-rose-600">
                          <PlaceIcon />
                        </span>
                        <input
                          type="text"
                          readOnly={!Edit}
                          {...register("location", { required: "Location is required" })}
                          className="w-full bg-transparent focus:outline-none focus:ring-2 ring-rose-200 rounded px-2 py-1"
                        />
                        {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location.message}</p>}
                      </div>
                    </div>
                  </form> {/* Form ends here */}
                </div>
              </summary>
              {
                Edit && <div className="mt-6 space-y-4">
                <button type="submit" className="w-full py-2 bg-violet-100 hover:bg-violet-200 text-violet-600 rounded-xl transition-all duration-300" > {/* Added form attribute */}
                  Save Changes
                </button>
                <button onClick={()=>setEdit(false)} className="w-full py-2 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-xl transition-all duration-300">
                  Cancel
                </button>
              </div>
              }
            </details>
          </div>
        </div>
        <button className="w-full block mx-auto md:w-auto px-5 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl">
          Logout
        </button>
      </div>
    </>
  );
};

export default Profile;