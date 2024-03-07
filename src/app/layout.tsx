import { Navbar } from "@/components/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = constructMetadata();

function constructMetadata({
  title = `Critical Rationalism Hub`,
  description = `A crowdsourced collection of resources about and adjacent to Critical Rationalism.`,
  image = "https://cdn.prod.www.spiegel.de/images/b00a116b-cbf4-4c7e-9151-12b2bb4bdeee_w996_r1.7774390243902438_fpx30_fpy40.webp",
  icons = "/favicon.ico",
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@moritzw42",
    },
    icons,
    metadataBase: new URL("https://criticalrationalism.org/"),
    // themeColor: '#FFF',
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}

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
