import React, { useState, useMemo } from "react";
import FilterListIcon from "@mui/icons-material/FilterList";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AllEvents from "../lib/query/Event/AllEvents";
import ActionDialog from "./ActionDialog";
import moment from "moment"; // For date formatting and comparison

const ListEvent = () => {
  const { data: allEvents } = AllEvents(); // Renamed for clarity
  const [openDialog, setDialog] = useState(false);
  const [selectedType, setSelectedType] = useState("all"); // State for selected type
  const [selectedDate, setSelectedDate] = useState(""); // State for selected date
  const [Values, setValues] = useState({});

  const filteredEvents = useMemo(() => {
    if (!allEvents) return []; // Handle loading state

    return allEvents.filter((event) => {
      const typeMatch = selectedType === "all" || event.type === selectedType;
      const dateMatch =
        selectedDate === "" || moment(event.date).isSame(selectedDate, 'day'); // Compare dates

      return typeMatch && dateMatch;
    });
  }, [allEvents, selectedType, selectedDate]);

  const handleTypeFilter = (type) => {
    setSelectedType(type);
  };

  const handleDateFilter = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 md:p-6 border border-gray-100 overflow-x-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h2 className="text-lg md:text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Upcoming Events
        </h2>
        <details className="relative w-full sm:w-auto">
          <summary className="flex items-center justify-between sm:justify-start gap-2 px-4 py-2 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg cursor-pointer hover:from-gray-100 hover:to-gray-200 transition-all duration-300">
            <FilterListIcon />
            Filter Events
            <ExpandMoreIcon />
          </summary>
          <div className="absolute right-0 mt-2 w-full sm:w-48 bg-white rounded-lg shadow-xl p-2 z-10 border border-gray-100">
            <button
              className={`block w-full px-4 py-2 rounded-lg transition-colors duration-300 ${
                selectedType === "all"
                  ? "bg-gradient-to-r from-indigo-50 to-purple-50"
                  : "hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50"
              }`}
              onClick={() => handleTypeFilter("all")}
            >
              All Events
            </button>
            <button
              className={`block w-full px-4 py-2 rounded-lg transition-colors duration-300 ${
                selectedType === "Corporate"
                  ? "bg-gradient-to-r from-indigo-50 to-purple-50"
                  : "hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50"
              }`}
              onClick={() => handleTypeFilter("Corporate")}
            >
              Corporate
            </button>
            <button
              className={`block w-full px-4 py-2 rounded-lg transition-colors duration-300 ${
                selectedType === "Social"
                  ? "bg-gradient-to-r from-indigo-50 to-purple-50"
                  : "hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50"
              }`}
              onClick={() => handleTypeFilter("Social")}
            >
              Social
            </button>
            <button
              className={`block w-full px-4 py-2 rounded-lg transition-colors duration-300 ${
                selectedType === "Educational"
                  ? "bg-gradient-to-r from-indigo-50 to-purple-50"
                  : "hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50"
              }`}
              onClick={() => handleTypeFilter("Educational")}
            >
              Educational
            </button>
            {/* Date Filter */}
            <input
              type="date"
              className="block w-full px-4 py-2 mt-2 rounded-lg border border-gray-300"
              value={selectedDate}
              onChange={(e) => handleDateFilter(e.target.value)}
            />
          </div>
        </details>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px]">
        <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 font-semibold text-indigo-900">
                Event Name
              </th>
              <th className="text-left py-3 font-semibold text-indigo-900">
                Date
              </th>
              <th className="text-left py-3 font-semibold text-indigo-900">
                Category
              </th>
              <th className="text-left py-3 font-semibold text-indigo-900">
                Attendees
              </th>
              <th className="text-left py-3 font-semibold text-indigo-900">
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            {filteredEvents.map((value, index) => {
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

              return (
                <tr
                  key={index}
                  onClick={() => {
                    setDialog(true);
                    setValues(value);
                  }}
                  className="border-b border-gray-200 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 transition-colors duration-200"
                >
                                    <td className="py-3">{value?.title}</td>
                  <td className="py-3">{value?.date}</td>
                  <td className="py-3">{value?.type}</td>
                  <td className="py-3">
                    {value?.bookedBy?.length}/{value?.attendees}
                  </td>
                  <td className="py-3">
                    <span
                      className={`px-3 py-1 bg-gradient-to-r  ${
                        status === "open"
                          ? "from-green-100 to-emerald-100 text-green-800"
                          : status === "full"
                          ? "from-red-100 to-rose-100 text-red-800"
                          : "from-yellow-100 to-amber-100 text-yellow-800"
                      } rounded-full text-sm font-medium`}
                    >
                      {status}
                    </span>
                  </td>

                </tr>
              );
            })}
          </tbody>
        </table>
        <ActionDialog values={Values} open={openDialog} handleClose={() => setDialog(false)} />
      </div>
    </div>
  );
};

export default ListEvent;