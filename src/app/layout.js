import { Inter } from "next/font/google";
import "./globals.css";
import FloatingWhatsapp from "@/components/ui/FloatingWhatsapp";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Aluminium & Kaca 1001",
  description: "Kontraktor aluminium dan kaca tempered. Melayani pengiriman ke seluruh Indonesia.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={inter.className}>
        {children}
        <FloatingWhatsapp />
      </body>
    </html>
  );
}