import Head from "next/head";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Visit Georgia</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="relative h-screen w-screen">
        <img
          src="/falldrive.jpg"
          alt="main background image"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </main>
    </div>
  );
}
