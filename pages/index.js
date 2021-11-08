import Head from "next/head";
import Hero from "../components/Hero";

import fallDrive from "../public/falldrive.jpg";

import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Visit Georgia</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="relative h-screen w-screen">
        <Image
          src={fallDrive}
          alt="A picture of a road through trees with fall colors."
          className="absolute inset-0 w-full h-full object-cover"
        />
        <Hero />
      </main>
    </div>
  );
}
