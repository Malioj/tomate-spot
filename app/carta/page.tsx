"use client";
import { useState, useMemo, useEffect } from 'react';
import { menuItems, Categoria } from './data';

export default function CartaPage() {
  const [activeTab, setActiveTab] = useState<Categoria>('cocteles');
  const [activeSubTab, setActiveSubTab] = useState<string>('Todos');

  // 1. Primero filtramos por la Categoría Principal (Tabs de arriba)
  const productosDeLaCategoria = useMemo(() => {
    return menuItems.filter(item => item.categoria === activeTab);
  }, [activeTab]);

  // 2. Extraemos las subcategorías únicas disponibles en esta categoría
  const subcategoriasDisponibles = useMemo(() => {
    const subs = new Set(productosDeLaCategoria.map(i => i.subcategoria || 'Varios'));
    return ['Todos', ...Array.from(subs)];
  }, [productosDeLaCategoria]);

  // 3. Reseteamos el subfiltro cuando cambiamos de categoría principal
  useEffect(() => {
    setActiveSubTab('Todos');
  }, [activeTab]);

  // 4. Filtramos finalmente por la Subcategoría seleccionada (Chips)
  const productosVisibles = useMemo(() => {
    if (activeSubTab === 'Todos') return productosDeLaCategoria;
    return productosDeLaCategoria.filter(item => (item.subcategoria || 'Varios') === activeSubTab);
  }, [productosDeLaCategoria, activeSubTab]);

  // Agrupamos para mostrar (si está en 'Todos', mostramos agrupado, si no, lista plana)
  const porSubcategoria = useMemo(() => {
    if (activeSubTab !== 'Todos') {
      return { [activeSubTab]: productosVisibles };
    }
    // Si es "Todos", agrupamos como antes para mantener el orden visual
    return productosVisibles.reduce((acc, item) => {
      const sub = item.subcategoria || 'Varios';
      if (!acc[sub]) acc[sub] = [];
      acc[sub].push(item);
      return acc;
    }, {} as Record<string, typeof menuItems>);
  }, [productosVisibles, activeSubTab]);

  return (
    <main className="min-h-screen bg-black text-white pt-24 px-4 pb-12">
      
      {/* ENCABEZADO */}
      <div className="max-w-4xl mx-auto text-center mb-6 animate-fadeIn">
        <h1 className="text-5xl font-black text-transparent bg-clip-text bg-linear-to-b from-red-500 to-red-800 mb-2 tracking-tighter">
          NUESTRA CARTA
        </h1>
        <p className="text-gray-400 text-sm tracking-widest uppercase">
          Tomate Cocktail Spot
        </p>
      </div>

      {/* PESTAÑAS PRINCIPALES (Nivel 1) */}
      <div className="sticky top-16 z-40 bg-black/95 backdrop-blur-md pt-4 pb-2 border-b border-white/5">
        <div className="max-w-4xl mx-auto flex overflow-x-auto no-scrollbar gap-2 px-2 pb-2 justify-start md:justify-center">
          {[
            { id: 'cocteles', label: '🍸 CÓCTELES' },
            { id: 'comida', label: '🍔 COMIDA' },
            { id: 'vinos', label: '🍷 BEBIDAS' },
            { id: 'postres', label: '🍰 POSTRES' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as Categoria)}
              className={`whitespace-nowrap px-5 py-2 rounded-full font-bold text-xs tracking-wider transition-all duration-300 border mb-1 ${
                activeTab === tab.id
                  ? 'bg-red-600 border-red-600 text-white shadow-[0_0_15px_rgba(220,38,38,0.4)]'
                  : 'bg-zinc-900 border-zinc-800 text-zinc-400'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* --- NUEVO: SUB-FILTROS CON FADE VISUAL --- */}
        {subcategoriasDisponibles.length > 2 && (
          // Agregamos 'relative' al contenedor padre
          <div className="relative max-w-4xl mx-auto mt-1">
            
            {/* La lista de botones con scroll */}
            <div className="flex overflow-x-auto no-scrollbar gap-2 px-4 py-2">
              {subcategoriasDisponibles.map((sub) => (
                <button
                  key={sub}
                  onClick={() => setActiveSubTab(sub)}
                  className={`whitespace-nowrap px-4 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 border flex-shrink-0 ${
                    activeSubTab === sub
                      ? 'bg-white text-black border-white' 
                      : 'bg-zinc-900/50 text-zinc-500 border-zinc-800 hover:border-zinc-600'
                  }`}
                >
                  {sub}
                </button>
              ))}
              {/* Elemento invisible al final para dar margen derecho al último botón */}
              <div className="w-4 flex-shrink-0"></div>
            </div>

            {/* --- EL TRUCO DE MAGIA: SOMBRA DEGRADADA A LA DERECHA --- */}
            {/* Esto crea un difuminado negro a la derecha que indica continuidad */}
            <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-black via-black/80 to-transparent pointer-events-none"></div>
            
          </div>
        )}
      </div>

      {/* LISTA DE PRODUCTOS */}
      <div className="max-w-3xl mx-auto space-y-12 mt-8">
        {Object.entries(porSubcategoria).map(([subcategoria, items]) => (
          <section key={subcategoria} className="animate-slideUp">
            
            {/* Solo mostramos el título de sección si estamos viendo "Todos" */}
            {activeSubTab === 'Todos' && (
              <h3 className="flex items-center text-xl font-bold text-red-500 mb-6 uppercase tracking-wider">
                <span className="w-2 h-8 bg-red-600 mr-3 rounded-full"></span>
                {subcategoria}
              </h3>
            )}

            <div className="grid gap-4 md:grid-cols-2">
              {items.map((item) => (
                <article key={item.id} className="group relative bg-zinc-900/40 border border-white/5 p-5 rounded-2xl hover:bg-zinc-900/80 hover:border-red-600/30 transition-all duration-300">
                  
                  {/* ETIQUETAS */}
                  {item.etiqueta && (
                    <div className={`absolute -top-3 left-4 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg uppercase tracking-wide border border-white/10 z-10 ${
                      item.etiqueta.includes('Más Pedido') ? 'bg-linear-to-r from-orange-500 to-red-600 shadow-orange-900/40' :
                      item.etiqueta.includes('Recomendado') ? 'bg-linear-to-r from-yellow-500 to-amber-600 shadow-amber-900/40' :
                      item.etiqueta.includes('Libre') ? 'bg-linear-to-r from-purple-600 to-indigo-600 shadow-purple-900/40' :
                      'bg-zinc-700'
                    }`}>
                      {item.etiqueta}
                    </div>
                  )}

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