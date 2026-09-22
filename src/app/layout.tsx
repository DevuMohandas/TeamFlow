import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Sider } from "@/components/molecules/sider/sider";
import { TopBar } from "@/components/molecules/topBar/topBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TeamFlow",
  description: "Project & Task Management Platform",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <TopBar />
        <div className="flex flex-1 overflow-hidden">
          <Sider
            title="TeamFlow"
            options={[
              { option: "Dashboard", href: "/" },
              { option: "Projects", href: "/projects" },
              { option: "Tasks", href: "/tasks" },
              { option: "Team", href: "/team" },
            ]}
          />
          <main className="flex-1 overflow-y-auto p-6">{children}</main>
        </div>
      </body>
    </html>
  );
}