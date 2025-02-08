import React from "react";
import FilterListIcon from "@mui/icons-material/FilterList";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const ListEvent = () => {
  return (
    <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 md:p-6 border border-gray-100 overflow-x-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h2 className="text-lg md:text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Upcoming Events
        </h2>
        <details className="relative w-full sm:w-auto">
          <summary className="flex items-center justify-between sm:justify-start gap-2 px-4 py-2 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg cursor-pointer hover:from-gray-100 hover:to-gray-200 transition-all duration-300">
            <span className="material-symbols-outlined">
              <FilterListIcon />
            </span>
            Filter Events
            <span className="material-symbols-outlined">
              <ExpandMoreIcon />
            </span>
          </summary>
          <div className="absolute right-0 mt-2 w-full sm:w-48 bg-white rounded-lg shadow-xl p-2 z-10 border border-gray-100">
            <a
              className="block px-4 py-2 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 rounded-lg transition-colors duration-300"
              href="#"
            >
              All Events
            </a>
            <a
              className="block px-4 py-2 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 rounded-lg transition-colors duration-300"
              href="#"
            >
              Corporate
            </a>
            <a
              className="block px-4 py-2 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 rounded-lg transition-colors duration-300"
              href="#"
            >
              Social
            </a>
            <a
              className="block px-4 py-2 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 rounded-lg transition-colors duration-300"
              href="#"
            >
              Educational
            </a>
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
            <tr className="border-b border-gray-200 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 transition-colors duration-200">
              <td className="py-3">Annual Tech Conference</td>
              <td className="py-3">2023-12-15</td>
              <td className="py-3">Corporate</td>
              <td className="py-3">245/300</td>
              <td className="py-3">
                <span className="px-3 py-1 bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 rounded-full text-sm font-medium">
                  Open
                </span>
              </td>
            </tr>
            <tr className="border-b border-gray-200 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 transition-colors duration-200">
              <td className="py-3">Networking Mixer</td>
              <td className="py-3">2023-12-20</td>
              <td className="py-3">Social</td>
              <td className="py-3">89/100</td>
              <td className="py-3">
                <span className="px-3 py-1 bg-gradient-to-r from-yellow-100 to-amber-100 text-yellow-800 rounded-full text-sm font-medium">
                  Filling Fast
                </span>
              </td>
            </tr>
            <tr className="hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 transition-colors duration-200">
              <td className="py-3">Web Development Workshop</td>
              <td className="py-3">2023-12-25</td>
              <td className="py-3">Educational</td>
              <td className="py-3">50/50</td>
              <td className="py-3">
                <span className="px-3 py-1 bg-gradient-to-r from-red-100 to-rose-100 text-red-800 rounded-full text-sm font-medium">
                  Full
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListEvent;
