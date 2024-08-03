import { Link } from "react-router-dom";
import { useAuth } from "../../hook/useAuth";
import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const { firstName } = useAuth();
  return (
    <div className="w-full bg-white min-h-full shadow-lg lg:block hidden">
      <div className="p-6">
        {/* <h2 className="text-2xl font-bold">Admin Dashboard</h2> */}
        {firstName && <p className="text-lg mt-4">Welcome, {firstName}!</p>}
      </div>
      <nav className="mt-6 text-[14px] font-medium">
        <ul>
          <li className="px-6 py-2 hover:bg-gray-200 text-[10px]">
            <Link to="">Admin Dashboard</Link>
          </li>
          <li className="px-6 py-2 hover:bg-gray-200 text-[12px]">
            <NavLink to="history">History</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
