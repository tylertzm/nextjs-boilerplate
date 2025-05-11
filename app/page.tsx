'use client';
import Link from 'next/link';  // Import Link from Next.js
import DashedLinesScene from "./components/dashedlinescene";
import LogoMarquee from "./components/logomarque";
import ColorGradientGrid from './components/gradient'

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
            {/* Name Section */}
            <div className="name text-black text-center bg-white text-2xl p-4 mb-10">
        Tyler Tan
      </div>

      <ColorGradientGrid />



      {/* Dashed Lines Section taking 80% of the height */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full bg-white p-4">
        <DashedLinesScene />
      </div>
    </div>
  );
}