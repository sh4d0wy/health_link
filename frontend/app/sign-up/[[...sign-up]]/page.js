import { SignUp, auth } from "@clerk/nextjs";
import Image from "next/image";
import Icon from "../../../public/heartlink.svg"
import { useContext } from "react";
import UserContext from "../../_Context/UserContext";
 
export default async function Page() {
  // const {setUser} = useContext(UserContext);
  const authuser = auth();
  console.log(authuser);
  return(
  <>
  <div>
    <div className="absolute right-4 bottom-4 flex justify-center items-center gap-2">
    <Image src={Icon} className=" w-10 "/>
    <h1 className="text-lg text-white font-semibold">HealthLink</h1>
    </div>
    <h1 className="text-lg text-white mx-20 mt-10 font-semibold">
        Just Signup To Get Started!...
    </h1>
  </div>
  <div className="flex justify-center w-full h-full items-center mt-20">
  <SignUp />
  </div>
   </>);
}
