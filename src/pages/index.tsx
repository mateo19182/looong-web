import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "@/pages/components/Navbar";
import Hero from "@/pages/components/Hero";
import Features from "@/pages/components/Features";
import EmailSignup from "@/pages/components/EmailSignup";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Looong Life - Live Longer, Live Better</title>
        <meta name="description" content="Looong Life - Innovative solutions for longevity and better living" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="flex-grow">
        <Hero />
        <Features />
        <EmailSignup />
      </main>

      <footer className="bg-blue-600 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          © 2024 Looong Life. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Home;