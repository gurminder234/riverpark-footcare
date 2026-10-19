import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Inter } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const inter = Inter({
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: {
    default: "Mobile Foot Care Nurse in Winnipeg | River Park Nursing Foot Care",
    template: "%s | River Park Nursing Foot Care",
  },
verification: {
  google: "so4AVwTegznX3v33h5tPy_2KLmq9mXj_bxhw9qEun_Y",
},
  description:
     "Professional mobile nursing foot care in Winnipeg. River Park Nursing Foot Care offers diabetic foot care, foot health assessments, corn and callus reduction, and care for dry heels.",

  keywords: [
    "foot care nurse",
    "nursing foot care",
    "mobile foot care",
    "senior foot care",
    "diabetic foot care",
    "River Park Nursing Foot Care",
  ],

  authors: [
    {
      name: "River Park Nursing Foot Care",
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className={inter.className}>
  {children}
</body>
    </html>
  );
}
