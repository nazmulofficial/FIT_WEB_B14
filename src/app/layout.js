import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/share/Navbar";

const inter = Inter({
  subsets: ["latin"],
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
});

export const metadata = {
  title: "FitLog",
  description: "Workout Library",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${oswald.variable} min-h-screen flex flex-col bg-black` }
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}