import { NavBar } from "@/components/main-nav";
import "../../styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { SideBar } from "@/components/side-bar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Governaxe",
  description: "Omnichain Governance",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <SideBar>
            <NavBar />
            {children}
          </SideBar>
        </ThemeProvider>
      </body>
    </html>
  );
}
