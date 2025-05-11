'use client';
import Link from 'next/link';  // Import Link from Next.js
import DashedLinesScene from "./components/dashedlinescene";
import LogoMarquee from "./components/logomarque";

export default function Home() {
  // Define the logos array with image paths
  const logos = [
    "/images/vercel.png",  // Correct path to logo 1
    "/images/github.png",  // Correct path to logo 2
    "/images/gitlab.png",  // Correct path to logo 3
    "/images/figma.png",   // Correct path to logo 4
  ];

  return (
    <div className="flex flex-col h-screen">
      {/* Header Grid taking 20% of the height */}
      <div className="grid grid-cols-4 gap-4 w-full bg-white p-4">
        <Link href="/person" className="tylertan text-center hover:underline flex items-center justify-center">
          <h1>Person</h1>
        </Link>
        <Link href="/developer" className="tylertan text-center hover:underline flex items-center justify-center">
          <h1>Developer</h1>
        </Link>
        <Link href="/berlin" className="tylertan text-center hover:underline flex items-center justify-center">
          <h1>Berlin</h1>
        </Link>
        <Link href="/timeline" className="tylertan text-center hover:underline flex items-center justify-center">
          <h1>Timeline</h1>
        </Link>
      </div>

      {/* Name Section */}
      <div className="name text-black text-center bg-white text-2xl p-4">
        Tyler Tan
      </div>



      {/* Dashed Lines Section taking 80% of the height */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full bg-white p-4">
        <DashedLinesScene />
      </div>
    </div>
  );
}