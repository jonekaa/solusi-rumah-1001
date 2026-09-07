import { Inter } from "next/font/google";
import "./globals.css";
import FloatingWhatsapp from "@/components/ui/FloatingWhatsapp";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Aluminium & Kaca 1001",
  description: "Kontraktor aluminium dan kaca tempered. Melayani pengiriman ke seluruh Indonesia.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        {children}
        <FloatingWhatsapp />
        <SpeedInsights />
      </body>
    </html>
  );
}