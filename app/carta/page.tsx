"use client";
import { useState, useMemo, useEffect, useRef } from 'react';
import { menuItems, Categoria } from './data';

export default function CartaPage() {
  const [activeTab, setActiveTab] = useState<Categoria>('cocteles');
  const [activeSubTab, setActiveSubTab] = useState<string>('Todos');
  
  // Referencia al contenedor para poder moverlo
  const tabsContainerRef = useRef<HTMLDivElement>(null);

  // --- LOGIC: SCROLL AUTOMÁTICO DE LA PÁGINA ---
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab, activeSubTab]);

  // --- LOGIC: CENTRADO INTELIGENTE DE PESTAÑAS ---
  const handleTabClick = (tabId: Categoria, e: React.MouseEvent<HTMLButtonElement>) => {
    setActiveTab(tabId);

    const container = tabsContainerRef.current;
    const button = e.currentTarget;

    if (container && button) {
      // Cálculos matemáticos para centrar el botón
      const containerWidth = container.offsetWidth;
      const buttonWidth = button.offsetWidth;
      const buttonLeft = button.offsetLeft;
      
      // La posición ideal es: (Posición Botón) - (Mitad Pantalla) + (Mitad Botón)
      const scrollPosition = buttonLeft - (containerWidth / 2) + (buttonWidth / 2);

      container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  };

  // 1. Filtrado Principal
  const productosDeLaCategoria = useMemo(() => {
    return menuItems.filter(item => item.categoria === activeTab);
  }, [activeTab]);

  // 2. Subcategorías
  const subcategoriasDisponibles = useMemo(() => {
    const subs = new Set(productosDeLaCategoria.map(i => i.subcategoria || 'Varios'));
    return ['Todos', ...Array.from(subs)];
  }, [productosDeLaCategoria]);

  // 3. Reset Subfiltro
  useEffect(() => {
    setActiveSubTab('Todos');
  }, [activeTab]);

  // 4. Filtrado Final
  const productosVisibles = useMemo(() => {
    if (activeSubTab === 'Todos') return productosDeLaCategoria;
    return productosDeLaCategoria.filter(item => (item.subcategoria || 'Varios') === activeSubTab);
  }, [productosDeLaCategoria, activeSubTab]);

  // Agrupado
  const porSubcategoria = useMemo(() => {
    if (activeSubTab !== 'Todos') {
      return { [activeSubTab]: productosVisibles };
    }
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

      {/* --- PESTAÑAS PRINCIPALES (Scroll Horizontal Limpio + Auto Center) --- */}
      <div className="sticky top-16 z-40 bg-black/95 backdrop-blur-md pt-4 pb-2 border-b border-white/5">
        
        {/* Contenedor Limpio (Sin flechas, sin degradados) */}
        <div 
          ref={tabsContainerRef}
          className="max-w-4xl mx-auto flex overflow-x-auto no-scrollbar gap-2 px-4 pb-2 items-center"
        >
          {[
            { id: 'cocteles', label: 'CÓCTELES' },
            { id: 'comida', label: 'COMIDA' },
            { id: 'vinos', label: 'BEBIDAS' },
            { id: 'postres', label: 'POSTRES' },
          ].map((tab) => (
            <button
              key={tab.id}
              // Aquí llamamos a nuestra función de centrado al hacer click
              onClick={(e) => handleTabClick(tab.id as Categoria, e)}
              className={`whitespace-nowrap px-6 py-2 rounded-full font-bold text-xs tracking-widest transition-all duration-300 border flex-shrink-0 ${
                activeTab === tab.id
                  ? 'bg-red-600 border-red-600 text-white shadow-[0_0_15px_rgba(220,38,38,0.5)] transform scale-105' 
                  : 'bg-transparent border-transparent text-zinc-500 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
          {/* Pequeño margen final para que el último ítem respire */}
          <div className="w-4 flex-shrink-0"></div>
        </div>

        {/* SUB-FILTROS (Multilínea - Jerarquía Visual Reducida) */}
        {subcategoriasDisponibles.length > 2 && (
          <div className="max-w-4xl mx-auto mt-2 px-2">
            <div className="flex flex-wrap justify-center gap-2 py-2">
              {subcategoriasDisponibles.map((sub) => (
                <button
                  key={sub}
                  onClick={() => setActiveSubTab(sub)}
                  // AJUSTE DE JERARQUÍA: Hicimos estos botones un poco más compactos (py-1.5) 
                  // y el texto normal (no tracking-widest) para que pesen menos que los de arriba.
                  className={`px-4 py-1.5 rounded-lg text-sm font-bold transition-all duration-200 border ${
                    activeSubTab === sub
                      ? 'bg-black text-red-500 border-red-600 shadow-[0_0_10px_rgba(220,38,38,0.25)]'
                      : 'bg-zinc-900/50 text-zinc-500 border-zinc-800 hover:border-zinc-600 hover:text-zinc-300'
                  }`}
                >
                  {sub}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* LISTA DE PRODUCTOS */}
      <div className="max-w-3xl mx-auto space-y-12 mt-8">
        {Object.entries(porSubcategoria).map(([subcategoria, items]) => (
          <section key={subcategoria} className="animate-slideUp">
            
            {activeSubTab === 'Todos' && (
              <h3 className="flex items-center text-xl font-bold text-red-500 mb-6 uppercase tracking-wider">
                <span className="w-2 h-8 bg-red-600 mr-3 rounded-full"></span>
                {subcategoria}
              </h3>
            )}

            <div className="grid gap-4 md:grid-cols-2">
              {items.map((item) => (
                <article key={item.id} className="group relative bg-zinc-900/40 border border-white/5 p-5 rounded-2xl hover:bg-zinc-900/80 hover:border-red-600/30 transition-all duration-300">
                  
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