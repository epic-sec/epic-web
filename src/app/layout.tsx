import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EPIC | Static Analysis for Anchor Programs",
  description: "A compiler front-end for Anchor programs: CFG, SSA, and dominance analysis that tells whether a security check actually guards a privileged write, with witness-backed findings.",
  metadataBase: new URL("https://epic.sh"),
  openGraph: {
    title: "EPIC | Static Analysis for Anchor Programs",
    description: "A compiler front-end for Anchor programs: CFG, SSA, and dominance analysis that tells whether a security check actually guards a privileged write, with witness-backed findings.",
    url: "https://epic.sh",
    siteName: "EPIC",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EPIC | Static Analysis for Anchor Programs",
    description: "A compiler front-end for Anchor programs: CFG, SSA, and dominance analysis that tells whether a security check actually guards a privileged write.",
  }
};

import { ThemeProvider } from "@/components/ThemeProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {/* Global Background Grid & Glow */}
          <div className="fixed inset-0 z-[-1] pointer-events-none bg-epic-bg overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--epic-border)_1.5px,transparent_1.5px),linear-gradient(to_bottom,var(--epic-border)_1.5px,transparent_1.5px)] bg-[size:4.5rem_4.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-85" />
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-epic-accent rounded-full blur-[180px] opacity-[0.04]" />
          </div>

          <div className="relative z-0 flex flex-col min-h-screen overflow-x-hidden">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
