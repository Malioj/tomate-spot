"use client";
import { useState, useMemo, useEffect, useRef } from 'react';
import { menuItems, Categoria } from './data';

export default function CartaPage() {
  const [activeTab, setActiveTab] = useState<Categoria>('cocteles');
  const [activeSubTab, setActiveSubTab] = useState<string>('Todos');
  
  const [showSubTabs, setShowSubTabs] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const tabsContainerRef = useRef<HTMLDivElement>(null);

  // --- LOGIC: SCROLL PREDECIBLE (UMBRAL FIJO 150px) ---
  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY < 150) {
          setShowSubTabs(true);
        } else {
          if (currentScrollY > lastScrollY) {
            setShowSubTabs(false); // Bajando -> Ocultar
          } else {
            setShowSubTabs(true);  // Subiendo -> Mostrar
          }
        }
        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  // Reset al cambiar pestaña
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setShowSubTabs(true);
  }, [activeTab]);

  // Centrado Inteligente
  const handleTabClick = (tabId: Categoria, e: React.MouseEvent<HTMLButtonElement>) => {
    setActiveTab(tabId);
    const container = tabsContainerRef.current;
    const button = e.currentTarget;

    if (container && button) {
      const containerWidth = container.offsetWidth;
      const buttonWidth = button.offsetWidth;
      const buttonLeft = button.offsetLeft;
      const scrollPosition = buttonLeft - (containerWidth / 2) + (buttonWidth / 2);
      container.scrollTo({ left: scrollPosition, behavior: 'smooth' });
    }
  };

  // --- FILTROS ---
  const productosDeLaCategoria = useMemo(() => {
    return menuItems.filter(item => item.categoria === activeTab);
  }, [activeTab]);

  const subcategoriasDisponibles = useMemo(() => {
    const subs = new Set(productosDeLaCategoria.map(i => i.subcategoria || 'Varios'));
    return ['Todos', ...Array.from(subs)];
  }, [productosDeLaCategoria]);

  useEffect(() => {
    setActiveSubTab('Todos');
  }, [activeTab]);

  const productosVisibles = useMemo(() => {
    if (activeSubTab === 'Todos') return productosDeLaCategoria;
    return productosDeLaCategoria.filter(item => (item.subcategoria || 'Varios') === activeSubTab);
  }, [productosDeLaCategoria, activeSubTab]);

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
    <main className="min-h-screen bg-black text-white pt-24 px-4 pb-20">
      
      {/* ENCABEZADO */}
      <div className="max-w-4xl mx-auto text-center mb-10 animate-fadeIn">
        <h1 className="text-5xl font-black text-transparent bg-clip-text bg-linear-to-b from-red-500 to-red-800 mb-2 tracking-tighter">
          NUESTRA CARTA
        </h1>
        <p className="text-gray-400 text-sm tracking-widest uppercase">
          Tomate Cocktail Spot
        </p>
      </div>

      {/* --- PESTAÑAS PRINCIPALES (Sticky con más aire) --- */}
      <div className="sticky top-16 z-40 bg-black/95 backdrop-blur-md border-b border-white/5 transition-all duration-300">
        
        {/* NIVEL 1: CATEGORÍAS 
            - py-4: Más altura vertical para separar del borde superior e inferior.
            - gap-3: Separación cómoda entre botones.
        */}
        <div 
          ref={tabsContainerRef}
          className="max-w-4xl mx-auto flex overflow-x-auto no-scrollbar gap-3 px-4 py-4 items-center"
        >
          {[
            { id: 'cocteles', label: 'CÓCTELES' },
            { id: 'comida', label: 'COMIDA' },
            { id: 'vinos', label: 'BEBIDAS' },
            { id: 'postres', label: 'POSTRES' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={(e) => handleTabClick(tab.id as Categoria, e)}
              className={`whitespace-nowrap px-6 py-2.5 rounded-full font-bold text-xs tracking-widest transition-all duration-300 border flex-shrink-0 ${
                activeTab === tab.id
                  ? 'bg-red-600 border-red-600 text-white shadow-[0_0_15px_rgba(220,38,38,0.5)] transform scale-105' 
                  : 'bg-transparent border-transparent text-zinc-500 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
          <div className="w-4 flex-shrink-0"></div>
        </div>

        {/* NIVEL 2: SUB-FILTROS (Scroll-to-Hide) */}
        {subcategoriasDisponibles.length > 2 && (
          <div 
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              showSubTabs 
                ? 'max-h-48 opacity-100 translate-y-0' 
                : 'max-h-0 opacity-0 -translate-y-2'
            }`}
          >
            {/* - pt-2 pb-5: Mucho más aire abajo antes de que empiece la lista.
               Separamos visualmente los filtros de los productos.
            */}
            <div className="max-w-4xl mx-auto px-2 pt-2 pb-5">
              <div className="flex flex-wrap justify-center gap-3">
                {subcategoriasDisponibles.map((sub) => (
                  <button
                    key={sub}
                    onClick={() => setActiveSubTab(sub)}
                    className={`px-5 py-2 rounded-lg text-xs font-bold transition-all duration-200 border ${
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
          </div>
        )}
      </div>

      {/* LISTA DE PRODUCTOS: Espaciado agresivo */}
      <div className="max-w-3xl mx-auto space-y-16 mt-8">
        {Object.entries(porSubcategoria).map(([subcategoria, items]) => (
          <section key={subcategoria} className="animate-slideUp">
            
            {activeSubTab === 'Todos' && (
              <h3 className="flex items-center text-xl font-bold text-red-500 mb-8 uppercase tracking-wider pl-2">
                <span className="w-2 h-8 bg-red-600 mr-4 rounded-full"></span>
                {subcategoria}
              </h3>
            )}

            {/* GRID CHANGE:
                - gap-6: Más separación entre tarjetas (antes gap-4).
                - En mobile se verá 1 columna con mucho aire.
            */}
            <div className="grid gap-6 md:grid-cols-2">
              {items.map((item) => (
                <article key={item.id} className="group relative bg-zinc-900/40 border border-white/5 p-6 rounded-3xl hover:bg-zinc-900/80 hover:border-red-600/30 transition-all duration-300">
                  
                  {item.etiqueta && (
                    <div className={`absolute -top-3 left-6 text-white text-[10px] font-bold px-4 py-1.5 rounded-full shadow-lg uppercase tracking-wide border border-white/10 z-10 ${
                      item.etiqueta.includes('Más Pedido') ? 'bg-linear-to-r from-orange-500 to-red-600 shadow-orange-900/40' :
                      item.etiqueta.includes('Recomendado') ? 'bg-linear-to-r from-yellow-500 to-amber-600 shadow-amber-900/40' :
                      item.etiqueta.includes('Libre') ? 'bg-linear-to-r from-purple-600 to-indigo-600 shadow-purple-900/40' :
                      'bg-zinc-700'
                    }`}>
                      {item.etiqueta}
                    </div>
                  )}

                  <div className="flex justify-between items-start gap-5">
                    <div className="flex-1">
                      {/* TÍTULO MÁS GRANDE (text-xl) */}
                      <h4 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors leading-tight">
                        {item.nombre}
                      </h4>
                      {item.descripcion && (
                        /* DESCRIPCIÓN MÁS ESPACIADA (leading-relaxed, mt-3) */
                        <p className="text-sm text-gray-400 mt-3 leading-relaxed">
                          {item.descripcion}
                        </p>
                      )}
                    </div>
                    
                    <div className="shrink-0 flex flex-col items-end gap-2">
                       {/* PRECIO DESTACADO */}
                      <span className="block text-red-500 font-bold bg-red-950/20 px-4 py-2 rounded-xl border border-red-900/30 text-base shadow-sm">
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