import type { Metadata } from "next";
import "./globals.css";
import SessionProvider from "@/providers/SessionProvider";
import Navbar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/Footer/Footer";
import { getServerSession } from "next-auth";

export const metadata: Metadata = {
  title: "Paper Perfect Hub",
  description: "Excellence in your assignments",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();
  return (
    <html lang="en" data-theme="light">
      <body>
        <SessionProvider session={session}>
          <header>
            <Navbar />
          </header>
          
            {children}
          
          <footer>
            <Footer />
          </footer>
        </SessionProvider>
      </body>
    </html>
  );
}
