import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ["500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AirNexa Flight Search Web App",
  description: "AirNexa Find flights using the Amadeus API",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>{children}</body>
    </html>
  );
}
