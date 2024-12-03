import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mobile.bg - Продажба на нови и употребявани автомобили.",
  description: "Продажба на нови и употребявани автомобили.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
