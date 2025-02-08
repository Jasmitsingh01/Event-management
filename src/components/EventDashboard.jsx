import React from "react";
import Chart from "react-apexcharts";

import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import GroupIcon from "@mui/icons-material/Group";
import StoreIcon from "@mui/icons-material/Store";
import VerifiedIcon from "@mui/icons-material/Verified";

import { Link } from "react-router-dom";
import CreateEventForm from "./CreateEventForm";
import ListEvent from "./ListEvent";

const EventDashboard = () => {
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
            <button className="w-full md:w-auto px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl">
              Logout
            </button>
          </div>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
          <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-4 md:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-indigo-100">
            <div className="flex justify-between items-center mb-4">
              <span className="material-symbols-outlined text-indigo-600 text-2xl md:text-3xl hover:scale-110 transition-transform">
                {" "}
                <CalendarMonthIcon />
              </span>
              <span className="text-emerald-500 font-semibold">+24</span>
            </div>
            <h3 className="text-base md:text-lg font-semibold mb-1 text-indigo-900">
              Upcoming Events
            </h3>
            <p className="text-xl md:text-2xl font-bold text-indigo-700">156</p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-4 md:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-blue-100">
            <div className="flex justify-between items-center mb-4">
              <span className="material-symbols-outlined text-blue-600 text-2xl md:text-3xl hover:scale-110 transition-transform">
                {" "}
                <GroupIcon />
              </span>
              <span className="text-emerald-500 font-semibold">+138</span>
            </div>
            <h3 className="text-base md:text-lg font-semibold mb-1 text-blue-900">
              Total Attendees
            </h3>
            <p className="text-xl md:text-2xl font-bold text-blue-700">2,847</p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-fuchsia-50 p-4 md:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-purple-100">
            <div className="flex justify-between items-center mb-4">
              <span className="material-symbols-outlined text-purple-600 text-2xl md:text-3xl hover:scale-110 transition-transform">
                <StoreIcon />
              </span>
              <span className="text-emerald-500 font-semibold">+12</span>
            </div>
            <h3 className="text-base md:text-lg font-semibold mb-1 text-purple-900">
              Active Events
            </h3>
            <p className="text-xl md:text-2xl font-bold text-purple-700">48</p>
          </div>

          <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-4 md:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-pink-100">
            <div className="flex justify-between items-center mb-4">
              <span className="material-symbols-outlined text-pink-600 text-2xl md:text-3xl hover:scale-110 transition-transform">
                <VerifiedIcon />
              </span>
              <span className="text-emerald-500 font-semibold">98%</span>
            </div>
            <h3 className="text-base md:text-lg font-semibold mb-1 text-pink-900">
              RSVP Rate
            </h3>
            <p className="text-xl md:text-2xl font-bold text-pink-700">4.9/5</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <CreateEventForm />

          <div className="bg-gradient-to-br from-white to-gray-50 p-4 md:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
            <h2 className="text-lg md:text-xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Event Categories
            </h2>
            <Chart
              type="donut"
              height={250}
              series={[35, 25, 20, 15, 5]}
              options={{
                labels: [
                  "Corporate",
                  "Social",
                  "Educational",
                  "Entertainment",
                  "Other",
                ],
                colors: ["#4f46e5", "#60a5fa", "#818cf8", "#c084fc", "#f472b6"],
                legend: { position: "bottom" },
                plotOptions: {
                  pie: {
                    donut: {
                      size: "70%",
                    },
                  },
                },
              }}
            />
          </div>
        </div>

        <ListEvent/>
      </div>
    </>
  );
};

export default EventDashboard;
