import React, { useState, useEffect } from "react";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SearchIcon from '@mui/icons-material/Search';
import EventIcon from '@mui/icons-material/Event';
import { Link } from "react-router-dom";
import AllEvents from "../lib/query/Event/AllEvents";
import { io } from "socket.io-client";
import { baseURL } from "../lib";
import { useQueryClient } from "@tanstack/react-query";
import BookedDialog from "./BookedDialog";
import MyBooking from "../lib/query/Event/MyBookedEvent";
function GuestDashboard() {
  const {data}=AllEvents();
  const {data:Booking}=MyBooking()
    const queryClient = useQueryClient();
  
  useEffect(() => {
      const socket = io(baseURL,{
        extraHeaders:{
          "Access-Control-Allow-Origin": "*",
          'Access-Control-Allow-Credentials':true,
  
        }
        ,
        withCredentials:true
      }
    
    );
      socket.on("connect", () => {
        console.log("connected to server", socket?.id);
      });
      function LoadRealTimeData() {
        queryClient.invalidateQueries(["all-event",'all-booked-events']);
      }
      socket.on("updateEvent", () => LoadRealTimeData());
      socket.on("deletEvent", () => LoadRealTimeData());
      socket.on("createEvent", () => LoadRealTimeData());
      socket.on("bookedEvent", () => LoadRealTimeData());
  
      return () => {
        if (socket) {
          socket.on("disconnect", () => {
            console.log("disconnerted");
          });
        }
      };
    }, []);

    const [Id,setId]=useState('')
    const [openDialog,setDialog]=useState(false);

  return (
    <div >
      <div className="w-[1200px] max-w-full mx-auto bg-gradient-to-br from-violet-50 via-purple-50 to-rose-50 p-4 md:p-6 rounded-xl">
      <header className="flex flex-col md:flex-row items-center justify-between mb-6 md:mb-8 gap-4">
          <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Event Management Dashboard
          </h1>
          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-4 w-full md:w-auto">
            <Link to="/profile">
              <img
                src="https://cdn-icons-png.flaticon.com/512/219/219983.png"
                alt="avtar"
                className="w-[50px] h-[50px] md:w-auto  bg-gradient-to-r from-white to-gray-50 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 border border-gray-100"
              />
            </Link>
            <button onClick={()=>{window?.localStorage?.clear(); window.location.reload()}} className="w-full md:w-auto px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl">
              Logout
            </button>
          </div>
        </header>
        
        <div className="flex flex-col gap-6">
          


          <div className="lg:col-span-1 bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
            <h3 className="text-xl font-semibold mb-4">My Booking</h3>
            <div className="space-y-4">
           {
          Booking?.map((value,index)=><div  key={index} className={`flex items-center gap-4 p-3 shadow rounded-lg hover:bg-gray-100 transition-all duration-300 bg-gradient-to-r `}>
          <span className="material-symbols-outlined text-violet-600">
            <EventIcon/>
          </span>
          <div className=" w-full">
            <div className=" flex flex-row gap-5 w-full justify-between items-center">
            <p className="font-medium">{value?.title}</p>
            
            
            <p className="font-bold ">                    {value?.bookedBy?.length}/{value?.attendees}
            </p>
            
            </div>
            <p className="text-sm text-gray-600"> {value?.date}, {value?.time}</p>
          </div>
        </div>)
           }
            </div>
          </div>

          <div className="lg:col-span-2 bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
            <h3 className="text-xl font-semibold mb-4">Upcoming Events</h3>
            <div className="space-y-4">
             {
              data?.map((value,index)=>{
                let status = "full";
              if (
                Math.max(value?.bookedBy?.length - value?.attendees) < 15 &&
                Math.max(value?.bookedBy?.length - value?.attendees) !== 0
              ) {
                status = "Fast Filling";
              } else if (
                Math.max(value?.bookedBy?.length - value?.attendees) !== 0 &&
                Math.max(value?.bookedBy?.length - value?.attendees) > 15
              ) {
                status = "open";
              }

              
                function OPENBOOKEDDIALOG(){
                  setId(value?._id);
                  setDialog(true)
                }
                return (
                  value?.date >= new Date().toLocaleDateString() &&<div onClick={()=>{
                    
                    value?.bookedBy?.length < value?.attendees?OPENBOOKEDDIALOG():'' }} key={index} className={`flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-all duration-300 bg-gradient-to-r  ${
                        status === "open"
                          ? "from-green-100 to-emerald-100 text-green-800"
                          : status === "full"
                          ? "from-red-100 to-rose-100 text-red-800"
                          : "from-yellow-100 to-amber-100 text-yellow-800"
                      }`}>
                  <span className="material-symbols-outlined text-violet-600">
                    <EventIcon/>
                  </span>
                  <div className=" w-full">
                    <div className=" flex flex-row gap-5 w-full justify-between items-center">
                    <p className="font-medium">{value?.title}</p>
                    <div className=" flex flex-col justify-between items-center">
                    <p className="font-bold ">{status}</p>
                    <p className="font-bold ">                    {value?.bookedBy?.length}/{value?.attendees}
                    </p>
                    </div>
                    </div>
                    <p className="text-sm text-gray-600"> {value?.date}, {value?.time}</p>
                  </div>
                </div>
                )
              })
             } 
              
            </div>
          </div>
        </div>
        <BookedDialog handleClose={()=>setDialog(false)} open={openDialog} id={Id}/>
      </div>
    </div>
  );
}

export default GuestDashboard;
