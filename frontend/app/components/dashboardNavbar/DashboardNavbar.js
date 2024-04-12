

import Image from "next/image";
import Icon from "../../../public/heartlink.svg";
import { currentUser, UserButton } from "@clerk/nextjs";
import { useContext } from "react";
import UserContext from '../../_Context/UserContext';

export default async function DashboardNavbar() {
  const userContext = useContext(UserContext);
  const user1 = await currentUser();
  console.log(user1)
  console.log(userContext.firstName)
  // if(user1){
  //   userContext.setUser(user1)
  // }


  return (
    <>
      <div className="flex justify-between py-4 px-6">
        <div className="flex items-center gap-2">
          <Image src={Icon} className=" w-10 " />
          <h1 className="text-white text-xl font-semibold">HealthLink</h1>
        </div>
        {user1 && 
        <div className="bg-white py-1 px-1 flex items-center gap-2 rounded-full">
            <h1 className="ml-2 font-medium">{`${user1.firstName} ${user1.lastName}`}</h1>
            <UserButton afterSignOutUrl="/" defaultOpen="/"/>
        </div>
}
      </div>
    </>
  );
}