import Image from "next/image";
import Icon from "../../../public/heartlink.svg";
import { GiHealthNormal, GiHealthCapsule} from "react-icons/gi";
import { RiMentalHealthLine, RiHealthBookLine } from "react-icons/ri";
import { TbHealthRecognition } from "react-icons/tb";
import Link from "next/link";

const Jumboster = () => {
  return (
    <>
      <div className="flex md:flex-row flex-col-reverse md:justify-around justify-center items-center gap-10 md:items-start md:m-[5rem] mt-[5rem] mx-2 md:relative">
        <div>
        <h1 className="text-white font-bold md:text-6xl text-4xl border-b-2 pb-10">
          Make A Place
          <br />
          Safe to
          <br />
          Live.
        </h1>
        <div className="flex justify-around text-white text-2xl pt-3 px-2">
        <GiHealthNormal />
        <GiHealthCapsule/>
        <RiMentalHealthLine />
        <TbHealthRecognition />
        <RiHealthBookLine/>
        </div>
        </div>
        <div className="md:-mt-8">
          <Image src={Icon} className="md:w-[400px] md:h-[400px] w-full h-full" />
        </div>
        <div className="absolute bottom-[6.5rem] left-[24%]  md:bottom-[-2.6rem] md:left-[39%] border-4 border-white rounde  overflow-visible h-12 w-48" />
        <div className="absolute bottom-[5.5rem] left-[31%] md:bottom-[-3.8rem] md:left-[42%] border-4 border-white rounde  overflow-visible h-12 w-48" />
        <Link href="/sign-up" className="text-xl  text-white font-semibold rounded-xl px-14 py-2 bg-[#51b533] hover:bg-[#4ba530] absolute bottom-[6rem] md:bottom-[-3rem] md:left-[40%]">
          Join Now
        </Link>
      </div>
    </>
  );
};

export default Jumboster;
