import DashHeader from "./DashHeader";
import Sidebar from "./Sidebar";
import AdminDash from "../../Pages/Dashboard/AdminDash";

function DashboardLayout() {
  return (
    <div className="h-screen flex">
      <Sidebar />
      <div className="lg:flex lg:justify-center lg:items-center p-3 w-full">
        <div className="flex-1 flex flex-col min-h-full">
          <div className="w-full">
            <DashHeader />
          </div>
          <main className="flex-1 lg:p-6 p-4 ">
            <AdminDash />
          </main>
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
