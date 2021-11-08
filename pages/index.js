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
      <main className="w-full h-screen bg-dunes bg-cover bg-center">
        <Hero />
      </main>
    </div>
  );
}
