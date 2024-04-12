import Image from "next/image";
import IndividualIcon from "../../public/individual.png";
import CommunityIcon from "../../public/viral-marketing.png";
import Link from "next/link";

export default async function Page() {

  return (
    <>
    <div className="mx-10 my-2">
      <h1 className="text-xl font-semibold border-b-2 border-gray-800">Welcome to Dashboard!.</h1>
    </div>
    
    <div className="flex h-full w-full justify-center items-center gap-20">
    <Link href="/dashboard/individual">
      <div className="border-2 border-black rounded-xl w-80 px-2 py-4 flex flex-col items-center justify-center hover:shadow-lg hover:shadow-black">
        <Image src={IndividualIcon} className="w-20"/>
        <h1 className="font-semibold">Individual</h1>
        <ul className="text-sm list-disc flex justify-center gap-10 my-2">
          <li>Consultant</li>
          <li>Symptoms Analyzer</li>
        </ul>
      </div>
      </Link>
      <Link href="/dashboard/community">
      <div className="border-2 border-black rounded-xl w-[30rem] px-2 py-4 flex flex-col items-center justify-center hover:shadow-lg hover:shadow-black">
        <Image src={CommunityIcon} className="w-20"/>
        <h1 className="font-semibold">Community</h1>
        <ul className="text-sm list-disc flex flex-row flex-warp justify-center gap-10 my-2">
          <li>Community Chat</li>
          <li>Priority Message</li>
          <li>Blood Donation</li>
        </ul>
      </div>
      </Link>
    </div>
    </>
  );
}
