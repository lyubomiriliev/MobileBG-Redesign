import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReduxProvider from "@/components/ReduxProvider";
import { AuthContextProvider } from "@/context/AuthContext";
import { ListingProvider } from "@/context/ListingContext";

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
    <html lang="en" className="overflow-x-clip font-adventPro">
      <body>
        <AuthContextProvider>
          <ListingProvider>
            <ReduxProvider>
              <Header />
              <main>{children}</main>
              <Footer />
            </ReduxProvider>
          </ListingProvider>
        </AuthContextProvider>
      </body>
    </html>
  );
}
