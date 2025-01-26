import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import DesktopNavbar from "@/components/customer/layout/navbar/DesktopNavbar";
import Footer from "@/components/customer/layout/footer/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

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
      <body
        className={`${inter.className} bg-background antialiased px-6 md:px-10 xl:px-[100px] py-6 md:py-10 light text-primary-text`}
      >
        <DesktopNavbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
