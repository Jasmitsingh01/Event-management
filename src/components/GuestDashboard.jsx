import React, { useState, useEffect } from "react";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import ClassIcon from '@mui/icons-material/Class';
import SearchIcon from '@mui/icons-material/Search';
import EventIcon from '@mui/icons-material/Event';
function GuestDashboard() {
  return (
    <div id="webcrumbs">
      <div className="w-[1200px] max-w-full mx-auto bg-gradient-to-br from-violet-50 via-purple-50 to-rose-50 p-4 md:p-6 rounded-xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
            <div className="flex items-center justify-between gap-3 p-2 mb-6">
              <span className="material-symbols-outlined text-2xl text-violet-600">
                <CalendarMonthIcon/>
              </span>
              <div>
                <h3 className="text-lg text-nowrap font-semibold">My Events</h3>
                <p className="text-2xl font-bold text-violet-600">12</p>
              </div>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Upcoming: 8</span>
              <span className="text-gray-600">Past: 4</span>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
            <div className="flex items-center justify-between gap-3 p-2 mb-6">
              <span className="material-symbols-outlined text-3xl text-purple-600">
                <LocalActivityIcon/>
              </span>
              <div>
                <h3 className="text-xl font-semibold">Tickets</h3>
                <p className="text-3xl font-bold text-purple-600">5</p>
              </div>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Active: 3</span>
              <span className="text-gray-600">Used: 2</span>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
            <div className="flex items-center justify-between gap-3 p-2 mb-6">
              <span className="material-symbols-outlined text-3xl text-rose-600">
               <ClassIcon/>
              </span>
              <div>
                <h3 className="text-xl font-semibold">Saved Events</h3>
                <p className="text-3xl font-bold text-rose-600">15</p>
              </div>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">This Week: 7</span>
              <span className="text-gray-600">Next Week: 8</span>
            </div>
          </div>


          <div className="lg:col-span-1 bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
            <h3 className="text-xl font-semibold mb-4">Quick Actions</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 px-2">
              <button className="p-2 rounded-xl border border-gray-200 hover:bg-violet-50 transition-all duration-300 flex items-center gap-3">
                <span className="material-symbols-outlined text-violet-600">
                  <SearchIcon/>
                </span>
                <span>Find Events</span>
              </button>
             
              
              <button className="p-2 rounded-xl border w-fit border-gray-200 hover:bg-violet-50 transition-all duration-300 flex items-center gap-3">
                <span className="material-symbols-outlined text-violet-600">
                <CalendarMonthIcon/>
                </span>
                <span className=" text-nowrap">Add to Calendar</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-2 bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
            <h3 className="text-xl font-semibold mb-4">Upcoming Events</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-all duration-300">
                <span className="material-symbols-outlined text-violet-600">
                  <EventIcon/>
                </span>
                <div>
                  <p className="font-medium">Summer Music Festival</p>
                  <p className="text-sm text-gray-600">Saturday, 2:00 PM</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-all duration-300">
              <span className="material-symbols-outlined text-violet-600">
                  <EventIcon/>
                </span>
                <div>
                  <p className="font-medium">Comedy Night</p>
                  <p className="text-sm text-gray-600">Sunday, 8:00 PM</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-all duration-300">
              <span className="material-symbols-outlined text-violet-600">
                  <EventIcon/>
                </span>
                <div>
                  <p className="font-medium">Food & Wine Tasting</p>
                  <p className="text-sm text-gray-600">Next Friday, 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GuestDashboard;
