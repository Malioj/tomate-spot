import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar"; // Aquí importamos tu nueva barra

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tomate Cocktail Spot",
  description: "El mejor bar de cócteles en Villa María",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Navbar />  {/* Aquí colocamos la barra fija arriba */}
        {children}  {/* Aquí se cargará el resto de la página */}
      </body>
    </html>
  );
}