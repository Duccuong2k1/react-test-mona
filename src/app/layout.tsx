import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";
import { NextUIProviders } from "@/lib/providers/nextui-proivder";
import { DefaultProvider } from "@/lib/providers/default-provider";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Do Duc Cuong - Test React",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextUIProviders>
          <DefaultProvider>
            <div className="min-h-screen ">
              {children}
             
            </div>
            <Footer />
          </DefaultProvider>
        </NextUIProviders>
      </body>
    </html>
  );
}
