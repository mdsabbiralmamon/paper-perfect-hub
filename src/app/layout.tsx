import type { Metadata } from "next";
import "./globals.css";
import SessionProvider from "@/providers/SessionProvider";
import Footer from "@/components/shared/Footer/Footer";
import { getServerSession } from "next-auth";
import Header from "@/components/shared/Header/Header";

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
          <Header />
            {children}
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
