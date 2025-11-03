import "@/app/globals.css";
import { siteMeta } from "@/lib/seo";
import localFont from "next/font/local";

const generalSans = localFont({
  src: [
    { path: "./fonts/GeneralSans-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/GeneralSans-Semibold.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-general-sans",
});

export const metadata = {
  title: siteMeta.title,
  description: siteMeta.description,
  openGraph: siteMeta.openGraph,
  twitter: siteMeta.twitter,
  metadataBase: new URL(siteMeta.url),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${generalSans.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
