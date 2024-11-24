import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Menu from "@/app/components/menu/Menu";
import GenresList from "./components/genres/GenresList";
import styles from "./page.module.css";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Home Page",
  description: "Start page of movie sandbox with novelties",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
      <Menu/>
      <div className={styles.basicBlock}>
          <GenresList/>
          {children}
      </div>
      </body>
    </html>
  );
}
