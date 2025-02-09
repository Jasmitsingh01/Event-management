import React from "react";
import { useForm } from "react-hook-form";
import PostAddIcon from "@mui/icons-material/PostAdd";
import CreateEvent from "../lib/mutation/Event/CreateEvent";
const CreateEventForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
 const {mutate}=CreateEvent()
  const onSubmit = (data) => {
    if(data?.dateTime){
      const date= new Date(data?.dateTime)
      delete data?.dateTime;
      const payload={
        ...data,
        date:date.toLocaleDateString(),
        time:date.toLocaleTimeString()
      }
      mutate(payload)
    }
  };

  return (
    <div className="md:col-span-2 bg-gradient-to-br from-white to-gray-50 p-4 md:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h2 className="text-lg md:text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
         Event Form
        </h2>
        
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4"> {/* Wrap form with handleSubmit */}
     <div className=" flex justify-end">
     <button
          type='submit'
          className="w-full sm:w-auto px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl flex items-center justify-center sm:justify-start"
        >
          <span className="material-symbols-outlined mr-2">
            <PostAddIcon />
          </span>
          Create Event
        </button>
     </div>
        <div> 
          <input
            type="text"
            placeholder="Event Name"
            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 bg-white/50"
            {...register("title", { required: "Event name is required" })} // Register with react-hook-form
          />
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>} {/* Error display */}
        </div>

        <div>
          <select
            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 bg-white/50"
            {...register("type", { required: "Category is required" })} 
          >
            <option value="Corporate">Corporate</option>
            <option value="Social">Social</option>
            <option value="Education">Education</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Other">Other</option>
          </select>
          {errors.type && <p className="text-red-500 text-sm mt-1">{errors.type.message}</p>}
        </div>

        <div>
          <textarea
            placeholder="Event Description"
            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 bg-white/50"
            rows="3"
            {...register("description", { required: "Description is required" })} 
          />
          {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <input
              type="datetime-local"
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 bg-white/50"
              {...register("dateTime", { required: "Date and time is required" })} 
            />
            {errors.dateTime && <p className="text-red-500 text-sm mt-1">{errors.dateTime.message}</p>}
          </div>

          <div>
            <input
              type="number"
              placeholder="Max Attendees"
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 bg-white/50"
              {...register("attendees", { required: "Max attendees is required", min: 1 })} 
            />
            {errors.attendees && <p className="text-red-500 text-sm mt-1">{errors.attendees.message}</p>}
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateEventForm;