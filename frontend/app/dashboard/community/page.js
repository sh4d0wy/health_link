import Image from "next/image";
import Link from "next/link";

export default function Page() {

    return (
      <>
     <h1 className="text-lg font-medium mx-2 border-b-2 border-black">Community</h1>
     <div className="flex h-fit w-full justify-center items-stretch gap-20 my-4">
    <Link href="/dashboard/individual/doctorconsultant">
      <div className="border-2 border-black rounded-xl w-80 px-2 py-4 flex flex-col items-center justify-center hover:shadow-lg hover:shadow-black">
        {/* <Image src={IndividualIcon} className="w-20"/> */}
        
        <h1 className="font-semibold">Consult with Doctor</h1>
        <Image src="/images/chat.jpg" width={300 } height={300} className="rounded-xl"/>
        <span className="text-center">Wondering if this needs a doctor's touch? Get personalized advice and connect with a qualified healthcare professional today!</span>
      </div>
      </Link>
      <Link href="/dashboard/individual/aiconsultant">
      <div className="border-2 border-black rounded-xl w-80 px-2 py-4 h-full flex flex-col items-center justify-between hover:shadow-lg hover:shadow-black">
        {/* <Image src={CommunityIcon} className="w-20"/> */}
        <h1 className="font-semibold">Symptoms Analyzer AI</h1>
        <Image src="/images/emergency.png" width={300 } height={300} className="rounded-xl"/>
        <span className="text-center mx-2">Unsure what's ailing you? Take our FREE symptom checker ai! It's a quick and easy way to get a read on what might be going on.</span>
      </div>
      </Link>
    </div>
      </>
    );
  }
  