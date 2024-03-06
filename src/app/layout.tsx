import { Navbar } from "@/components/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Navbar />
      <body className={inter.className}>{children}</body>
      <footer className="m-4 bottom-0">
        © {new Date().getFullYear()}, Built by{" "}
        <a href="https://twitter.com/MoritzW42/">Moritz</a>
      </footer>
    </html>
  );
}
