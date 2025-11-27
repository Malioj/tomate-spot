import Link from "next/link";

// --- AGENDA DE DJs (Edita esto cada semana) ---
const agenda = [
  {
    dia: "VIERNES 28",
    dj: "GUY J",
    estilo: "Progressive House",
    horario: "23:00 HS"
  },
  {
    dia: "SÁBADO 29",
    dj: "ALBUQUERQUE",
    estilo: "Tech House / Melodic",
    horario: "23:30 HS"
  }
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white px-4 relative overflow-hidden pt-20 pb-10">
      
      {/* Fondo con efecto de luz */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-red-600/20 rounded-full blur-[100px] -z-10"></div>

      {/* Título Principal */}
      {/* CORREGIDO: Usamos bg-linear-to-b para evitar el warning */}
      <h1 className="text-5xl md:text-8xl font-black text-transparent bg-clip-text bg-linear-to-b from-red-500 to-red-800 tracking-tighter text-center mb-2">
        TOMATE
      </h1>
      
      <span className="text-xl md:text-2xl font-light tracking-[0.5em] text-center text-gray-400 mb-12">
        COCKTAIL SPOT
      </span>

      {/* Botones de acción */}
      <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto px-8 mb-20">
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

      {/* --- AGENDA DJs --- */}
      <div className="w-full max-w-2xl animate-slideUp">
        
        {/* Título con punto de grabación parpadeante (LIVE) */}
        <div className="flex items-center justify-center gap-3 mb-6 border-b border-white/10 pb-2 mx-auto w-max px-4">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
          </span>
          <h3 className="text-sm font-bold tracking-widest text-white uppercase">
            LINE UP SEMANAL
          </h3>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {agenda.map((fecha, index) => (
            <div key={index} className="bg-zinc-900/50 border border-white/5 p-6 rounded-xl hover:border-red-500/50 transition-colors group text-center relative overflow-hidden">
              
              {/* Efecto de brillo al pasar el mouse */}
              {/* CORREGIDO: bg-linear-to-br */}
              <div className="absolute inset-0 bg-linear-to-br from-red-600/0 to-red-900/0 group-hover:to-red-900/10 transition-all duration-500"></div>

              <p className="text-xs font-bold text-zinc-500 mb-2 tracking-wider uppercase">{fecha.dia} | {fecha.horario}</p>
              <h4 className="text-2xl font-black text-white mb-1 italic group-hover:text-red-500 transition-colors">
                {fecha.dj}
              </h4>
              <p className="text-sm text-gray-400">{fecha.estilo}</p>
            </div>
          ))}
        </div>
      </div>

    </main>
  );
}
