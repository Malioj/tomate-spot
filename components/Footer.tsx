export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-12 mt-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* 1. Identidad */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-white tracking-widest">TOMATE</h2>
          <p className="text-gray-500 text-sm mt-1">COCKTAIL SPOT</p>
        </div>

        {/* 2. Info Clave (Dirección Clickable y Horarios) */}
        <div className="text-center text-sm text-gray-400">
          <a 
            href="https://www.google.com/maps/search/?api=1&query=San+Juan+729,+Villa+María" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mb-2 block hover:text-red-500 transition cursor-pointer"
          >
            📍 San Juan 729, Villa María
          </a>
          <p>Mié - Dom | 20:00 - Cierre</p>
        </div>

        {/* 3. Redes y Detalle sutil */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <a 
            href="https://www.instagram.com/tomate.cocktailspot/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-red-500 transition font-medium flex items-center gap-2"
          >
            Seguinos en Instagram ↗
          </a>
          
          <span className="text-xs text-zinc-600 border border-zinc-800 px-2 py-1 rounded">
            Cocina 100% Gluten Free
          </span>
        </div>

      </div>
      
      <div className="text-center text-zinc-700 text-xs mt-12">
        © {new Date().getFullYear()} Tomate Cocktail Spot. Todos los derechos reservados.
      </div>
    </footer>
  );
}