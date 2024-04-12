import React from "react";
import Image from 'next/image';

export default async function Page() {
    return (
        <>
        <div className="flex flex-col gap-6 w-full h-full items-center">
            <div className="text-4xl text-blue-400 font-extrabold">Consult with doctors</div>
            <div>
                <div className="h-86` w-58 bg-gray-200 gap-4 rounded-xl p-10  flex flex-col justify-between items-center">
                    <span>Doctor Name</span>
                    <Image src="/images/doctor.jpeg" width={500} height={500} className="rounded-xl"/>
                    <div className="flex gap-4 items-center">User Rating: 4.5/5</div>
                    <div>Spcialisation: Physiology,Pediatirician</div>
                    <button>Consult</button>
                </div>
            </div>
0
        </div>
        </>
    )
}