import React from 'react';

// --- TU BASE DE DATOS DE TRAGOS ---
// Aquí es donde editarás los precios y nombres en el futuro
const tragos = [
  {
    id: 1,
    nombre: "Tomate Signature",
    descripcion: "Nuestra especialidad. Gin macerado con albahaca, cordial de tomate y tónica.",
    precio: "$5.500",
    categoria: "De Autor"
  },
  {
    id: 2,
    nombre: "Negroni Clásico",
    descripcion: "Gin London Dry, Campari y Vermouth Rosso. El equilibrio perfecto.",
    precio: "$4.800",
    categoria: "Clásicos"
  },
  {
    id: 3,
    nombre: "Penicillin",
    descripcion: "Scotch Whisky, limón, miel, jengibre y un ahumado de Islay.",
    precio: "$5.200",
    categoria: "Clásicos"
  },
  {
    id: 4,
    nombre: "Tropical Vibes",
    descripcion: "Ron dorado, maracuyá fresco, lima y un toque de picante.",
    precio: "$4.500",
    categoria: "De Autor"
  },
  {
    id: 5,
    nombre: "Old Fashioned",
    descripcion: "Bourbon, azúcar, angostura y piel de naranja.",
    precio: "$5.000",
    categoria: "Clásicos"
  },
  {
    id: 6,
    nombre: "Aperol Spritz",
    descripcion: "Aperol, Prosecco y golpe de soda. Refrescante.",
    precio: "$4.200",
    categoria: "Aperitivos"
  }
];

export default function CartaPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-24 px-4 pb-12">
      
      {/* Título de la sección */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-red-600 mb-2">NUESTRA CARTA</h1>
        <p className="text-gray-400">Cócteles diseñados para momentos únicos.</p>
      </div>

      {/* Grilla de Tragos */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {tragos.map((trago) => (
          <div key={trago.id} className="bg-zinc-900/50 border border-white/10 p-6 rounded-2xl hover:border-red-600/50 transition duration-300 group">
            
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-bold text-white group-hover:text-red-500 transition">
                {trago.nombre}
              </h3>
              <span className="text-red-500 font-bold bg-red-900/20 px-3 py-1 rounded-full text-sm">
                {trago.precio}
              </span>
            </div>
            
            <p className="text-gray-400 text-sm mb-4">
              {trago.descripcion}
            </p>

            <span className="text-xs text-gray-500 uppercase tracking-widest border border-gray-700 px-2 py-1 rounded">
              {trago.categoria}
            </span>

          </div>
        ))}
      </div>

    </main>
  );
}