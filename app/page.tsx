'use client';
import Link from 'next/link';  // Import Link from Next.js
import DashedLinesScene from "./components/dashedlinescene";
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

      <p className='aboutme'>
        I'm currently a software developer working on a Java Springboot backend, but also working on an AI project
        to implement RAG in a medical information chatbot for my university project. In private, I experiment with
        different AI infrastructure tools to build my own product.
      </p>


      <ul className='socials'>
      <li>
        <a href="https://github.com/tylertzm" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/?size=100&id=62856&format=png&color=000000" alt="Github Logo" />
          Github
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/tyler-tan-76634724a/" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/?size=100&id=8808&format=png&color=000000" alt="LinkedIn Logo" />
          LinkedIn
        </a>
      </li>
      <li>
        <a href="mailto:TZM2002@protonmail.com">
          <img src="https://img.icons8.com/?size=100&id=b22i9tF4I4yn&format=png&color=000000" alt="Mail Logo" />
          Mail
        </a>
      </li>
    </ul>

      <ColorGradientGrid />




      {/* Dashed Lines Section taking 80% of the height */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full bg-white p-4">
        <DashedLinesScene />
      </div>
    </div>
  );
}