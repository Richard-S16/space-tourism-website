import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-Barlow text-color-3">{children}</body>
    </html>
  );
}
