import { Libre_Franklin } from "next/font/google";
import localFont from "next/font/local";
import "@/app/globals.css";

const mtDalatSans = localFont({
  src: "./../../public/assets/fonts/MTDalatSans.otf",
  variable: "--font-mt-dalat-sans",
  display: "swap",
});

const libreFranklin = Libre_Franklin({
  variable: "--font-libre-franklin",
  subsets: ["latin", "vietnamese"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body
        className={`${libreFranklin.variable} ${mtDalatSans.variable} 
        antialiased font-sans min-h-screen flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}
