"use client";
import { useState, ChangeEvent, FormEvent } from 'react';

// Tipos de datos
interface DateOption {
  value: string;
  label: string;
  isCustom?: boolean;
}

// Función para obtener fechas (Mié-Dom) + opción "Otra fecha"
const getDateOptions = (): DateOption[] => {
  const dates: DateOption[] = [];
  const daysMap = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
  const today = new Date();
  
  for (let i = 0; i < 14; i++) { // Buscamos en los próximos 14 días
    const date = new Date();
    date.setDate(today.getDate() + i);
    const dayOfWeek = date.getDay();
    
    // Solo mostramos días abiertos (0=Dom, 3=Mié, 4=Jue, 5=Vie, 6=Sáb)
    // Filtramos Lunes (1) y Martes (2)
    if (dayOfWeek !== 1 && dayOfWeek !== 2) {
      const dayName = i === 0 ? "HOY" : i === 1 ? "MAÑANA" : daysMap[dayOfWeek];
      const dayNumber = date.getDate();
      const month = date.getMonth() + 1;
      
      dates.push({
        value: date.toISOString().split('T')[0],
        label: `${dayName} ${dayNumber}/${month}`
      });
    }
    if (dates.length >= 5) break; 
  }

  // Agregamos la opción manual al final
  dates.push({ value: 'custom', label: '📅 Otra fecha', isCustom: true });
  return dates;
};

export default function ReservasPage() {
  const TELEFONO_BAR = "5493531234567"; // Reemplaza con el real
  
  const [dateOptions] = useState<DateOption[]>(() => getDateOptions());
  const [showCalendar, setShowCalendar] = useState(false);

  const [formData, setFormData] = useState({
    nombre: '',
    fecha: '',
    hora: '',
    personas: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // --- LÓGICA DE VALIDACIÓN DEL CALENDARIO ---
  const handleCustomDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedDateStr = e.target.value;
    if (!selectedDateStr) return;

    // Truco: Agregamos T12:00:00 para evitar problemas de timezone al obtener el día
    const dateObj = new Date(selectedDateStr + "T12:00:00"); 
    const dayOfWeek = dateObj.getDay();

    // 1 = Lunes, 2 = Martes
    if (dayOfWeek === 1 || dayOfWeek === 2) {
      alert("⚠️ Lo sentimos. Los Lunes y Martes permanecemos cerrados.");
      // Borramos la fecha incorrecta
      e.target.value = ""; 
      setFormData({ ...formData, fecha: "" });
    } else {
      setFormData({ ...formData, fecha: selectedDateStr });
    }
  };

  const handleDateSelect = (option: DateOption) => {
    if (option.isCustom) {
      setShowCalendar(true);
      setFormData({ ...formData, fecha: '' });
    } else {
      setShowCalendar(false);
      setFormData({ ...formData, fecha: option.value });
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (showCalendar && !formData.fecha) {
      alert("Por favor selecciona una fecha válida en el calendario.");
      return;
    }

    const fechaObj = dateOptions.find(d => d.value === formData.fecha);
    // Si es fecha manual, formateamos un poco para que no se vea tan "máquina" (AAAA-MM-DD)
    let fechaBonita = formData.fecha;
    
    if (fechaObj && !fechaObj.isCustom) {
        fechaBonita = fechaObj.label;
    } else {
        // Formatear la fecha manual a algo más legible (DD/MM)
        const [y, m, d] = formData.fecha.split('-');
        fechaBonita = `${d}/${m}`;
    }

    let texto = `Hola Tomate Spot! 🍅\nQuiero reservar mesa:\n\n`;
    texto += `*Nombre:* ${formData.nombre}\n`;
    texto += `*Día:* ${fechaBonita}\n`;
    texto += `*Hora:* ${formData.hora} hs\n`;
    texto += `*Personas:* ${formData.personas}`; // Ahora enviará el número exacto

    const mensajeFinal = encodeURIComponent(texto);
    window.open(`https://wa.me/${TELEFONO_BAR}?text=${mensajeFinal}`, '_blank');
  };

  return (
    <main className="min-h-screen bg-black text-white pt-24 px-4 pb-12 flex items-center justify-center">
      
      <div className="w-full max-w-md bg-zinc-900/80 p-6 md:p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
        
        <h1 className="text-3xl font-bold text-center text-red-600 mb-2">RESERVAR MESA</h1>
        <p className="text-gray-400 text-center mb-6 text-sm">
          Tu confirmación llegará por WhatsApp.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* NOMBRE */}
          <div>
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Tu Nombre</label>
            <input 
              type="text" 
              name="nombre"
              required
              onChange={handleChange}
              className="w-full mt-2 bg-black border border-gray-700 rounded-lg p-3 text-white focus:border-red-600 focus:outline-none focus:ring-1 focus:ring-red-600 transition"
              placeholder="Ej: Roberto"
            />
          </div>

          {/* FECHAS */}
          <div>
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">¿Qué día vienes?</label>
            <div className="grid grid-cols-3 gap-2 mt-2">
              {dateOptions.map((option) => (
                <button
                  key={option.label}
                  type="button"
                  onClick={() => handleDateSelect(option)}
                  className={`py-3 px-1 rounded-lg text-sm font-medium transition-all duration-200 border ${
                    !showCalendar && formData.fecha === option.value
                      ? 'bg-red-600 border-red-600 text-white shadow-[0_0_15px_rgba(220,38,38,0.5)]'
                      : showCalendar && option.isCustom
                      ? 'bg-red-600 border-red-600 text-white'
                      : 'bg-black border-gray-800 text-gray-400 hover:border-gray-500 hover:text-white'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>

            {/* CALENDARIO (Solo si eligen "Otra fecha") */}
            {showCalendar && (
              <div className="mt-4 animate-fadeIn">
                <label className="text-xs text-red-500 mb-1 block">Selecciona una fecha (Mié-Dom):</label>
                <input 
                  type="date" 
                  name="fecha"
                  min={new Date().toISOString().split("T")[0]}
                  required={showCalendar}
                  // Usamos la función especial de validación aquí
                  onChange={handleCustomDateChange}
                  className="w-full bg-zinc-800 border border-red-900/50 rounded-lg p-3 text-white focus:border-red-600 focus:outline-none"
                />
              </div>
            )}
            
            {!showCalendar && (
              <input type="text" value={formData.fecha} required readOnly className="opacity-0 h-0 w-0 absolute" />
            )}
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* HORA */}
            <div>
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Hora</label>
              <div className="relative mt-2">
                <select 
                  name="hora"
                  required
                  onChange={handleChange}
                  className="w-full appearance-none bg-black border border-gray-700 rounded-lg p-3 text-white focus:border-red-600 focus:outline-none transition cursor-pointer"
                >
                  <option value="">Elegir...</option>
                  <option value="20:00">20:00</option>
                  <option value="20:30">20:30</option>
                  <option value="21:00">21:00</option>
                  <option value="21:30">21:30</option>
                  <option value="22:00">22:00</option>
                  <option value="22:30">22:30</option>
                  <option value="23:00">23:00</option>
                  <option value="23:30">23:30</option>
                </select>
              </div>
            </div>

            {/* PERSONAS (CAMBIADO A INPUT NUMBER) */}
            <div>
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Personas</label>
              <div className="relative mt-2">
                <input 
                  type="number"
                  name="personas" 
                  required
                  min="1"
                  max="50"
                  placeholder="Cant."
                  onChange={handleChange}
                  className="w-full bg-black border border-gray-700 rounded-lg p-3 text-white focus:border-red-600 focus:outline-none transition"
                />
              </div>
            </div>
          </div>

          <button 
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-red-900/50 transition-all duration-300 flex items-center justify-center gap-2 transform hover:-translate-y-1"
          >
            <span>SOLICITAR RESERVA</span>
            {/* Icono WhatsApp */}
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
          </button>

        </form>
      </div>
    </main>
  );
}