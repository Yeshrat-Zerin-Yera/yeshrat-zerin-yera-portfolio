import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yeshrat Zerin Yera — Developer Portfolio",
  description: "Portfolio of Yeshrat Zerin Yera, a developer focused on learning, problem solving, and building useful web experiences.",
  metadataBase: new URL("https://example.com"),
  openGraph: { title: "Yeshrat Zerin Yera — Developer Portfolio", description: "Building thoughtful digital experiences.", type: "website" }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" data-theme="dark"><body>{children}</body></html>;
}
