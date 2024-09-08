import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Decarb Earth | Decarbonization Solutions for Enterprises, Financiers, and Developers",
  description: "Denis Decarb Earth provides innovative solutions to help enterprises, financiers, and developers manage decarbonization efforts efficiently. Our platform offers tools for tracking carbon emissions, user registration, and real-time data insights.",
  keywords: [
    "Decarbonization",
    "Climate Change",
    "Carbon Emissions",
    "Sustainability",
    "Enterprises",
    "Financiers",
    "Developers",
    "Next.js",
    "GraphQL",
    "Carbon Tracking",
    "Apollo Client",
    "Redux Toolkit",
    "Tailwind CSS",
  ],
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
