import Image from "next/image";
import Icon from "../../../public/heartlink.svg";
import { currentUser, UserButton } from "@clerk/nextjs";

export default async function DashboardNavbar() {
  const user = await currentUser();
  console.log(user)
  return (
    <>
      <div className="flex justify-between py-4 px-6">
        <div className="flex items-center gap-2">
          <Image src={Icon} className=" w-10 " />
          <h1 className="text-white text-xl font-semibold">HealthLink</h1>
        </div>
        {user && 
        <div className="bg-white py-1 px-1 flex items-center gap-2 rounded-full">
            <h1 className="ml-2 font-medium">{`${user.firstName} ${user.lastName}`}</h1>
            <UserButton afterSignOutUrl="/" defaultOpen="/"/>
        </div>
}
      </div>
    </>
  );
}