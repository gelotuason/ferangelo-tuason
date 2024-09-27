import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Nav from "../components/nav";
import Footer from "@/components/footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ferangelo Tuason - Portfolio",
  description: "Portfolio Website | Front End Web Developer | ReactJS, NextJS, Tailwind CSS, Shadcn",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${montserrat.className}`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
