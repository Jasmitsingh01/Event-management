import React, { useEffect } from 'react';
import { Button, Dialog, DialogContent, DialogTitle } from '@mui/material';
import EditEvent from '../lib/mutation/Event/EditEvent';
import { useForm } from "react-hook-form";
import PostAddIcon from "@mui/icons-material/PostAdd";

const EditEventFormDialog = ({ handleClose, open, values }) => {
    const { mutate } = EditEvent(handleClose);
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();

    const onSubmit = (data) => {
        if (data?.dateTime) {
            const date = new Date(data?.dateTime);
            delete data?.dateTime;
            const payload = {
                data:{
                  ...data,
                date: date.toLocaleDateString(),
                time: date.toLocaleTimeString(),
                },
                id: values?._id
            };
            mutate(payload);
        }
    };

    useEffect(() => {
        if (values) {
            const { attendees, title, description, date, time, type } = values || {};
            setValue('title', title || "");
            setValue('attendees', attendees || "");
            setValue('description', description || "");
            setValue('type', type || ""); // Handle potential undefined type
            if (date && time) { // Only set dateTime if both date and time exist
              setValue('dateTime', `${date}T${time}`); // Correct format for datetime-local
            }

        }
    }, [values, setValue]);

    return (
        <Dialog onClose={handleClose} open={open}>
            <div className='p-5 relative w-full'>
                <DialogTitle className='text-center text-5xl font-bold'>Edit Event</DialogTitle> {/* More appropriate title */}
                <DialogContent>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div className="flex justify-end">
                            <button
                                type='submit'
                                className="w-full sm:w-auto px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl flex items-center justify-center sm:justify-start"
                            >
                                <PostAddIcon className="mr-2" /> {/* Use MUI icon directly */}
                                Edit Event
                            </button>
                        </div>

                        <div>
                            <input
                                type="text"
                                placeholder="Event Name"
                                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 bg-white/50"
                                {...register("title", { required: "Event name is required" })}
                            />
                            {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>}
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
                </DialogContent>
                <Button onClick={handleClose} className='!absolute top-0 right-0 w-fit'>X</Button>
            </div>
        </Dialog>
    )
}

export default EditEventFormDialog;