import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import logotipo from "@/assets/logotipo-fiemg-white.svg";
import { fontInter } from "@/functions/font";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "LTI App",
  description: "Em desenvolvimento...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={fontInter.className}>
        <Header logotipoSrc={logotipo} />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
