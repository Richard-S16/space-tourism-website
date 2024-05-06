import Nav from "./components/Nav";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Page",
};

type RootLayoutTypes = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutTypes) {
  return (
    <html lang="en">
      <body className="font-Barlow text-color-3">
        <Nav />
        {children}
      </body>
    </html>
  );
}
