import React, { useEffect } from "react";

import { Link } from "react-router-dom";
import CreateEventForm from "./CreateEventForm";
import ListEvent from "./ListEvent";
import { io } from "socket.io-client";
import { baseURL } from "../lib";
import { useQueryClient } from "@tanstack/react-query";
const EventDashboard = () => {
  const queryClient = useQueryClient();
  useEffect(() => {
    const socket = io(baseURL);
    socket.on("connect", () => {
      console.log("connected to server", socket?.id);
    });
    function LoadRealTimeData() {
      queryClient.invalidateQueries(["all-event"]);
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
  return (
    <>
      <div className="w-[1200px] max-w-full mx-auto bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-4 md:p-6 rounded-xl">
        <header className="flex flex-col md:flex-row items-center justify-between mb-6 md:mb-8 gap-4">
          <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Event Management Dashboard
          </h1>
          <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4 w-full md:w-auto">
            <Link to="/profile">
              <img
                src="https://cdn-icons-png.flaticon.com/512/219/219983.png"
                alt="avtar"
                className="w-[50px] h-[50px] md:w-auto  bg-gradient-to-r from-white to-gray-50 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 border border-gray-100"
              />
            </Link>
            <button
              onClick={() => {
                window?.localStorage?.clear();
                window.location.reload();
              }}
              className="w-full md:w-auto px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
            >
              Logout
            </button>
          </div>
        </header>

        <div className=" flex flex-col gap-6 ">
          <CreateEventForm />

          <ListEvent />
        </div>
      </div>
    </>
  );
};

export default EventDashboard;
