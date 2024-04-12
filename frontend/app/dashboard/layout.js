import Link from "next/link";
import DashboardNavbar from "../components/dashboardNavbar/DashboardNavbar";
import UserProvider from "../_Context/UserProvider";

export default function ({ children }) {
  return (
    <>
      <DashboardNavbar />
      <div className="flex flex-row justify-center items-start ml-4">
        <div className=" flex flex-col gap-2">
          <h1 className="text-white px-4 py-2 rounded-s-lg font-medium">
            <Link href="/dashboard/individual">Individual</Link>
          </h1>
          <h1 className="text-white rounded-s-lg px-4 py-2 font-medium">
            <Link href="/dashboard/community">Community</Link>
          </h1>
        </div>
        <div className="bg-white w-[85vw] h-[87vh] rounded-lg p-4 px-8">
          <UserProvider>
          {children}
          </UserProvider>
        </div>
      </div>
    </>
  );
}
