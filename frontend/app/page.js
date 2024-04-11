import { redirect } from 'next/navigation';
import { auth } from '@clerk/nextjs';
import Navbar from "./components/navbar/Navbar";
import Jumboster from "./components/jumboster/Jumboster";




export default async function Home() {

  const { userId } = await auth();

  console.log(userId)

  if (userId) {
    redirect('/dashboard');
  }


  return (
    <main className="">
      <Navbar/>
      <Jumboster/>


    </main>
  );
}
