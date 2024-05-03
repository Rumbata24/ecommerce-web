import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/headers/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next ECommerce",
  description: "ECommerce Amazon v2",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="min-h-screen flex flex-col">{children}</div>
        <footer className="footer footer-center p-4 bg-base-300 text-base-content">
          <p>Copyright @ 2023 - All rights reserved by Next Amazon</p>
        </footer>
      </body>
    </html>
  );
}
