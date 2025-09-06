import type {} from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

// ✅ Load Inter font
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

// ✅ Metadata for tab title
export const metadata = {
  title: "lukearound", // <-- This sets the browser tab title
  description: "Explore live opportunities and testimonials",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} font-inter antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
