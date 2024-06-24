import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const nunitoSans = Nunito_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "List Country",
  description: "A List of the country, created with NEXT 14",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunitoSans.className}>
        <main className="bg-gray-100 min-h-screen flex flex-col items-center">
          <nav className="w-full bg-white h-16 flex items-center justify-center">
            <section className="container flex items-center gap-3">
              <Image
                src="/logo.svg"
                alt="logo application - emoji globe"
                width={48}
                height={48}
              />
              <h1 className="font-bold text-2xl">List Country</h1>
            </section>
          </nav>
          {children}
        </main>
      </body>
    </html>
  );
}
