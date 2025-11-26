"use client";
import { useState } from 'react';
import { menuItems, Categoria } from './data';

export default function CartaPage() {
  // Estado para saber qué pestaña está activa (Por defecto: Cócteles)
  const [activeTab, setActiveTab] = useState<Categoria>('cocteles');

  // 1. Filtramos: Solo mostramos los productos de la categoría elegida
  const productosFiltrados = menuItems.filter(item => item.categoria === activeTab);

  // 2. Agrupamos: Organizamos por "Subcategoría" (Ej: De Autor, Clásicos, Tapeo...)
  const porSubcategoria = productosFiltrados.reduce((acc, item) => {
    const sub = item.subcategoria || 'Varios';
    if (!acc[sub]) acc[sub] = [];
    acc[sub].push(item);
    return acc;
  }, {} as Record<string, typeof menuItems>);

  return (
    <main className="min-h-screen bg-black text-white pt-24 px-4 pb-12">
      
      {/* ENCABEZADO */}
      <div className="max-w-4xl mx-auto text-center mb-8 animate-fadeIn">
        <h1 className="text-5xl font-black text-transparent bg-clip-text bg-linear-to-b from-red-500 to-red-800 mb-2 tracking-tighter">
          NUESTRA CARTA
        </h1>
        <p className="text-gray-400 text-sm tracking-widest uppercase">
          Tomate Cocktail Spot
        </p>
      </div>

      {/* PESTAÑAS DE NAVEGACIÓN (STICKY) */}
<div className="sticky top-20 z-40 bg-black/90 backdrop-blur-md py-4 mb-8 border-b border-white/10">
  {/* CAMBIO AQUÍ: Usamos flex-wrap para que bajen de línea y quitamos el scroll */}
  <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-3 px-2">
    {[
      { id: 'cocteles', label: '🍸 CÓCTELES' },
      { id: 'comida', label: '🍔 COMIDA' },
            { id: 'vinos', label: '🍷 BEBIDAS' },
            { id: 'postres', label: '🍰 POSTRES' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as Categoria)}
              className={`whitespace-nowrap px-6 py-2 rounded-full font-bold text-sm transition-all duration-300 border ${
                activeTab === tab.id
                  ? 'bg-red-600 border-red-600 text-white shadow-[0_0_15px_rgba(220,38,38,0.4)]'
                  : 'bg-zinc-900 border-zinc-800 text-gray-400 hover:border-gray-600 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* LISTA DE PRODUCTOS */}
      <div className="max-w-3xl mx-auto space-y-12">
        {Object.entries(porSubcategoria).map(([subcategoria, items]) => (
          <section key={subcategoria} className="animate-slideUp">
            
            {/* Título de la Subcategoría (Ej: DE AUTOR) */}
            <h3 className="flex items-center text-xl font-bold text-red-500 mb-6 uppercase tracking-wider">
              <span className="w-2 h-8 bg-red-600 mr-3 rounded-full"></span>
              {subcategoria}
            </h3>

            {/* Grilla de Ítems */}
            <div className="grid gap-4 md:grid-cols-2">
              {items.map((item) => (
                <article key={item.id} className="group relative bg-zinc-900/40 border border-white/5 p-5 rounded-2xl hover:bg-zinc-900/80 hover:border-red-600/30 transition-all duration-300">
                  
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <h4 className="text-lg font-bold text-white group-hover:text-red-400 transition-colors">
                        {item.nombre}
                      </h4>
                      {item.descripcion && (
                        <p className="text-sm text-gray-400 mt-2 leading-relaxed">
                          {item.descripcion}
                        </p>
                      )}
                    </div>
                    
                    <div className="shrink-0">
                      <span className="block text-red-500 font-bold bg-red-950/20 px-3 py-1 rounded-lg border border-red-900/30 text-sm">
                        {item.precio}
                      </span>
                    </div>
                  </div>

                </article>
              ))}
            </div>
          </section>
        ))}
      </div>

    </main>
  );
}