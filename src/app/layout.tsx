import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "@/styles/globals.css";
import QueryProvider from "@/providers/QueryProvider";
import Navbar from "@/features/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Blog App",
  description: "Created by Saeed Khosravi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dim">
      <body className={`${inter.className} bg-primary`}>
        <QueryProvider>
          <Navbar />
          <main className="container min-h-[100dvh] w-full text-primary-content">
            {children}
          </main>
        </QueryProvider>
      </body>
    </html>
  );
}
