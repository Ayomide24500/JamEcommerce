import DashHeader from "./DashHeader";
import Sidebar from "./Sidebar";
import AdminDash from "../../Pages/Dashboard/AdminDash";
import React from "react";

function DashboardLayout() {
  return (
    <div className="flex p-1">
      <div className="min-h-screen">
        <Sidebar />
      </div>
      <div className="lg:flex lg:justify-center lg:items-center p-3 w-full">
        <div className="flex-1 flex flex-col min-h-full">
          <div className="w-full">
            <DashHeader />
          </div>
          <main className="flex-1 lg:p-3 p-4 ">
            <AdminDash />
          </main>
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
