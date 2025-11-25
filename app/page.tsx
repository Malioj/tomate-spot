import Link from "next/link"; // Importante: Traemos el conector

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white px-4 relative overflow-hidden">
      
      {/* Fondo con efecto de luz (Opcional, le da toque profesional) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-red-600/20 rounded-full blur-[100px] -z-10"></div>

      {/* Título Principal */}
      <h1 className="text-5xl md:text-8xl font-black text-transparent bg-clip-text bg-linear-to-b from-red-500 to-red-800 tracking-tighter text-center mb-2">
        TOMATE
      </h1>
      
      <span className="text-xl md:text-2xl font-light tracking-[0.5em] text-center text-gray-400 mb-12">
        COCKTAIL SPOT
      </span>

      {/* Botones de acción (AHORA SÍ FUNCIONAN) */}
      <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto px-8">
        
        <Link 
          href="/carta" 
          className="bg-red-600 hover:bg-red-700 text-white text-center font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-lg hover:shadow-red-900/50 hover:-translate-y-1"
        >
          VER CARTA
        </Link>
        
        <Link 
          href="/reservas"
          className="border border-white/30 hover:bg-white hover:text-black text-white text-center font-bold py-4 px-10 rounded-full transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm"
        >
          RESERVAR MESA
        </Link>

      </div>

    </main>
  );
}
