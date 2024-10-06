'use client'

import Hero from "@/components/shared/(HomePage)/Hero/Hero";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  const handleClick = () => {
    
    console.log(session);
    
  }
  return (
    <main className="h-screen w-full flex justify-center items-center">
      {/* <button onClick={handleClick} className="btn">user details</button> */}
      <Hero/>
    </main>
  );
}
