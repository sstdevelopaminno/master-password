import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Master Password",
  description: "GitHub, Vercel, and Supabase integration workspace.",
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
