import Head from "next/head";
import Hero from "../components/Hero";

import image from "../public/falldrive.jpg";

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
          src={image}
          alt="Picture of a road through trees with fall colors."
          className="absolute inset-0 w-screen h-screen object-fill"
        />
        <Hero />
      </main>
    </div>
  );
}
