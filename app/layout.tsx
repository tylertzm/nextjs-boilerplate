import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Tyler Tan - AI Expert",
  description: "Your AI expert in developing future solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <div className="grid grid-cols-4 gap-4 w-full bg-white p-4">
        <Link href="/" className="tylertan text-center hover:underline flex items-center justify-center">
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
        {children}
      </body>
    </html>
  );
}


