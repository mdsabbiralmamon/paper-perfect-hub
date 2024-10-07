'use client'

import Features from "@/components/shared/(HomePage)/Features/Features";
import Hero from "@/components/shared/(HomePage)/Hero/Hero";
import Reviews from "@/components/shared/(HomePage)/Reviews/Reviews";
import Services from "@/components/shared/(HomePage)/Services/Services";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  const handleClick = () => {
    
    console.log(session);
    
  }
  return (
    <main className="h-screen w-full">
      {/* <button onClick={handleClick} className="btn">user details</button> */}
      <Hero/>
      <Services/>
      <Features/>
      <Reviews/>
    </main>
  );
}
