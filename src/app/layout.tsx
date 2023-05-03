import "./globals.css";
import { Inter } from "next/font/google";

import AppHeader from "@/components/app-header";
import AppFooter from "@/components/app-footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Visão Libertária",
  description: "",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-zinc-950`}>
        <AppHeader />
        {children}
        <AppFooter />
      </body>
    </html>
  );
}
