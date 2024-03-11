import type { Metadata } from "next";
import { inter } from "@/components/ui/fonts"
import "./globals.css";

export const metadata: Metadata = {
  title: "Cniper Studio",
  description: "Portfolio website for Cniper Studio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
