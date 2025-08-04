import type { Metadata } from "next";
import "@/styles/global.css";
import { inter } from "@/ui/fonts";
import Link from "next/link";
import Header from "@/ui/Header";
import Footer from "@/ui/Footer";

export const metadata: Metadata = {
  title: "김재영 | Frontend Developer",
  description:
    "React 및 React Native 기반의 프로젝트를 주도하며 기획, 개발, 운영 전 과정을 경험해 온 프론트엔드 개발자입니다.",
  keywords: [
    "김재영",
    "Frontend Developer",
    "React",
    "React Native",
    "TypeScript",
    "Next.js",
  ],
  authors: [{ name: "김재영" }],
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "김재영 | Frontend Developer",
    description:
      "React 및 React Native 기반의 프로젝트를 주도하며 기획, 개발, 운영 전 과정을 경험해 온 프론트엔드 개발자입니다.",
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={`${inter.className} antialiased`}>
        <Link
          href="#about"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50"
        >
          메인으로 건너뛰기
        </Link>
        <Header />
        <main className="min-h-screen bg-white">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
