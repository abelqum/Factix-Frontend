import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Factix",
  description: "SaaS Multi-tenant para facturación e inventarios",
  authors: [
    {
      name: "Abel Mauricio Quiroz Mora",
      url: "https://github.com/abelqum",
    },
  ],
  creator: "Abel Mauricio Quiroz Mora",
  publisher: "Factix",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${inter.variable} h-full antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
