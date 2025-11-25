import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo / Nombre */}
          <Link href="/" className="text-xl font-bold text-white tracking-widest hover:text-red-500 transition">
            TOMATE
          </Link>

          {/* Enlaces (Menú) */}
          <div className="flex gap-6">
            <Link href="/carta" className="text-sm text-gray-300 hover:text-red-500 transition">
              LA CARTA
            </Link>
            <Link href="/reservas" className="text-sm text-gray-300 hover:text-red-500 transition">
              RESERVAS
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
}