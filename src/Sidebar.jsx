import React from "react";
import {
  FaTachometerAlt,
  FaUserAlt,
  FaDollarSign,
  FaChartLine,
  FaBolt,
  FaCalendarAlt,
  FaFileAlt,
  FaCog,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className=" bg-gray-100 shadow-lg w-[600px]">
      <div className="p-6 text-center">
        <div className="text-2xl font-bold text-purple-600">DW</div>
        <div className="text-xl font-semibold mt-2">DashWind</div>
      </div>
      <ul className="menu p-4 w-full">
        <li>
          <a href="#" className="flex items-center">
            <FaTachometerAlt className="mr-3" />
            Dashboard
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center">
            <FaUserAlt className="mr-3" />
            Leads
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center">
            <FaDollarSign className="mr-3" />
            Transactions
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center">
            <FaChartLine className="mr-3" />
            Analytics
          </a>
        </li>
        <li className="menu-title">
          <span>Integration</span>
        </li>
        <li>
          <a href="#" className="flex items-center">
            <FaBolt className="mr-3" />
            Integration
          </a>
        </li>
        <li className="menu-title">
          <span>More</span>
        </li>
        <li>
          <a href="#" className="flex items-center">
            <FaCalendarAlt className="mr-3" />
            Calendar
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center">
            <FaFileAlt className="mr-3" />
            Pages
          </a>
          <ul className="pl-6">
            <li>
              <a href="#" className="flex items-center">
                Subpage 1
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center">
                Subpage 2
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#" className="flex items-center">
            <FaCog className="mr-3" />
            Settings
          </a>
          <ul className="pl-6">
            <li>
              <a href="#" className="flex items-center">
                Subpage 1
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center">
                Subpage 2
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#" className="flex items-center">
            <FaFileAlt className="mr-3" />
            Documentation
          </a>
          <ul className="pl-6">
            <li>
              <a href="#" className="flex items-center">
                Subpage 1
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center">
                Subpage 2
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};
export default Sidebar;