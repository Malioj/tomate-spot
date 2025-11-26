// app/carta/data.ts

export type Categoria = 'cocteles' | 'comida' | 'vinos' | 'postres';

export interface Producto {
  id: number;
  nombre: string;
  descripcion?: string;
  precio: string;
  categoria: Categoria;
  subcategoria?: string;
  etiqueta?: string;
}

export const menuItems: Producto[] = [
  // =========================================
  //               CÓCTELES
  // =========================================

  // --- DE AUTOR ---
  { id: 1, nombre: "Yellow Berries", descripcion: "Special ron, syrup de arándanos e hibiscus, zumo de naranja y limón, topping de tónica.", precio: "$9.400", categoria: "cocteles", subcategoria: "De Autor", etiqueta: "🔥 Más Pedido" },
  { id: 2, nombre: "Whisky Yandel", descripcion: "Whisky cítrico, jugo de limón y cordial de jengibre.", precio: "$9.900", categoria: "cocteles", subcategoria: "De Autor" },
  { id: 3, nombre: "Botanical Dimension", descripcion: "Gin macerado en romero, zumo de frutos rojos, limón, syrup clásico, dash de soda y tónica.", precio: "$9.500", categoria: "cocteles", subcategoria: "De Autor" },
  { id: 4, nombre: "Como Piña", descripcion: "Ron de ananá, Hesperidina, notas de jengibre, limón, syrup tropical y solución salina.", precio: "$9.500", categoria: "cocteles", subcategoria: "De Autor" },
  { id: 5, nombre: "Elder Pears", descripcion: "Absolut de pera, licor de flor de sauco, bitter de fernet, limón y tónica.", precio: "$9.900", categoria: "cocteles", subcategoria: "De Autor" },
  { id: 6, nombre: "Tinta China", descripcion: "Ron blanco y gin, shrub de remolacha, naranja, frutos rojos, vinagre de manzana y limón.", precio: "$8.900", categoria: "cocteles", subcategoria: "De Autor" },
  { id: 7, nombre: "Picarón", descripcion: "Ron dorado, aperol, dash de vodka macerado en ají, limón y dressing spicy.", precio: "$8.900", categoria: "cocteles", subcategoria: "De Autor" },

  // --- TRAGOS CLÁSICOS ---
  { id: 10, nombre: "Fernet con Coca", descripcion: "El clásico argentino.", precio: "$8.500", categoria: "cocteles", subcategoria: "Clásicos" },
  { id: 11, nombre: "Smirnoff con Speed", descripcion: "Vodka Smirnoff y energizante.", precio: "$8.000", categoria: "cocteles", subcategoria: "Clásicos" },
  { id: 12, nombre: "Absolut con Speed", descripcion: "Vodka Absolut y energizante.", precio: "$11.500", categoria: "cocteles", subcategoria: "Clásicos" },
  { id: 13, nombre: "Negroni", descripcion: "Gin, Campari y Vermouth Rosso.", precio: "$8.000", categoria: "cocteles", subcategoria: "Clásicos" },
  { id: 14, nombre: "Mojito", descripcion: "Ron, menta, limón, azúcar y soda.", precio: "$8.000", categoria: "cocteles", subcategoria: "Clásicos" },
  { id: 15, nombre: "Mojito Malibu", descripcion: "Variante con ron de coco.", precio: "$8.000", categoria: "cocteles", subcategoria: "Clásicos" },
  { id: 16, nombre: "Malibu Orange", descripcion: "Ron Malibu y jugo de naranja.", precio: "$7.700", categoria: "cocteles", subcategoria: "Clásicos" },
  { id: 17, nombre: "Caipirinha", descripcion: "Cachaza, lima y azúcar.", precio: "$8.000", categoria: "cocteles", subcategoria: "Clásicos" },
  { id: 18, nombre: "Caipi Malibu", descripcion: "Variante tropical con Malibu.", precio: "$8.000", categoria: "cocteles", subcategoria: "Clásicos" },
  { id: 19, nombre: "Cuba Libre", descripcion: "Ron, coca y limón.", precio: "$8.500", categoria: "cocteles", subcategoria: "Clásicos" },
  { id: 20, nombre: "Medida JW Red", descripcion: "Whisky Johnnie Walker Red Label.", precio: "$10.000", categoria: "cocteles", subcategoria: "Clásicos" },
  { id: 21, nombre: "Medida JW Black", descripcion: "Whisky Johnnie Walker Black Label.", precio: "$13.000", categoria: "cocteles", subcategoria: "Clásicos" },
  { id: 22, nombre: "Shot Jose Cuervo", descripcion: "Tequila.", precio: "$6.500", categoria: "cocteles", subcategoria: "Clásicos" },
  { id: 23, nombre: "Jagermeister con Speed", descripcion: "Licor de hierbas con energizante.", precio: "$9.800", categoria: "cocteles", subcategoria: "Clásicos" },

  // --- APERITIVOS ---
  { id: 30, nombre: "Gancia", descripcion: "Con limón.", precio: "$7.500", categoria: "cocteles", subcategoria: "Aperitivos" },
  { id: 31, nombre: "Aperol Spritz", descripcion: "Aperol, espumante y soda.", precio: "$8.800", categoria: "cocteles", subcategoria: "Aperitivos" },
  { id: 32, nombre: "Campari Orange", descripcion: "Campari y jugo de naranja.", precio: "$8.000", categoria: "cocteles", subcategoria: "Aperitivos" },
  { id: 33, nombre: "Vermouth Tropical", descripcion: "Macerado con frutos tropicales.", precio: "$7.500", categoria: "cocteles", subcategoria: "Aperitivos" },
  { id: 34, nombre: "Cynar Julep", descripcion: "Cynar, menta, pomelo y azúcar.", precio: "$8.100", categoria: "cocteles", subcategoria: "Aperitivos" },
  { id: 35, nombre: "Ramazzotti Tonic", descripcion: "Ramazzotti Rosato y tónica.", precio: "$8.200", categoria: "cocteles", subcategoria: "Aperitivos" },
  { id: 36, nombre: "Vermouth", descripcion: "Clásico.", precio: "$7.400", categoria: "cocteles", subcategoria: "Aperitivos" },
  { id: 37, nombre: "Vermouth Maracuyá", descripcion: "Macerado de maracuyá.", precio: "$7.800", categoria: "cocteles", subcategoria: "Aperitivos" },

  // --- GINTONERÍA ---
  { id: 40, nombre: "Gin Tonic Clásico", descripcion: "London Dry Gin y tónica.", precio: "$8.200", categoria: "cocteles", subcategoria: "Gintonería" },
  { id: 41, nombre: "Gin Tonic Beefeater", descripcion: "Gin Beefeater importado.", precio: "$9.200", categoria: "cocteles", subcategoria: "Gintonería" },
  { id: 42, nombre: "Gin Tonic Bulldog", descripcion: "Gin Bulldog importado.", precio: "$11.200", categoria: "cocteles", subcategoria: "Gintonería" },
  { id: 43, nombre: "Gin Tonic Tanqueray", descripcion: "Gin Tanqueray importado.", precio: "$11.800", categoria: "cocteles", subcategoria: "Gintonería" },
  { id: 44, nombre: "Adicional Frutos Rojos", descripcion: "Agregado.", precio: "$1.300", categoria: "cocteles", subcategoria: "Gintonería" },
  { id: 45, nombre: "Adicional Red Bull", descripcion: "Agregado.", precio: "$1.500", categoria: "cocteles", subcategoria: "Gintonería" },

  // --- JARRAS ---
  { id: 50, nombre: "Jarra Aperol Tonic", descripcion: "Aperol, tónica, naranja y romero.", precio: "$17.500", categoria: "cocteles", subcategoria: "Jarras" },
  { id: 51, nombre: "Jarra Cynar Pomelo", descripcion: "Cynar, gaseosa pomelo, syrup, limón y menta.", precio: "$16.800", categoria: "cocteles", subcategoria: "Jarras" },
  { id: 52, nombre: "Jarra Tomate un Tinto", descripcion: "Vino macerado, frutas cítricas, tequila, jengibre y soda.", precio: "$14.800", categoria: "cocteles", subcategoria: "Jarras" },
  { id: 53, nombre: "Jarra Gin Beefeater", descripcion: "Con frutos rojos.", precio: "$19.200", categoria: "cocteles", subcategoria: "Jarras" },
  { id: 54, nombre: "Jarra Gin Clásico", descripcion: "Con frutos rojos.", precio: "$17.500", categoria: "cocteles", subcategoria: "Jarras" },

  // --- MOCKTAILS (SIN ALCOHOL) ---
  { id: 60, nombre: "Ice Team Tea", descripcion: "Té verde, burrito, pimienta rosa, limón, jengibre y tónica.", precio: "$6.900", categoria: "cocteles", subcategoria: "Sin Alcohol" },
  { id: 61, nombre: "Lady Summer", descripcion: "Dressing de frutillas, naranja, limón y jengibre.", precio: "$7.100", categoria: "cocteles", subcategoria: "Sin Alcohol" },


  // =========================================
  //                 COMIDA
  // =========================================

  // --- TAPEO ---
  { id: 100, nombre: "Trends de Pollo", descripcion: "Piezas de pollo frito con papas fritas y salsa TMT.", precio: "$14.800", categoria: "comida", subcategoria: "Tapeo" },
  { id: 101, nombre: "Rabas a la Romana", descripcion: "Con papas fritas, dip de salsa TMT y lactonesa con provenzal.", precio: "$17.700", categoria: "comida", subcategoria: "Tapeo", etiqueta: "⭐ Recomendado" },
  { id: 102, nombre: "Bastoncitos de Muzzarella", descripcion: "5 unidades rebozadas con dip de salsa TMT.", precio: "$12.500", categoria: "comida", subcategoria: "Tapeo" },
  { id: 103, nombre: "Papas Clásicas", descripcion: "Con dip de salsa TMT y lactonesa.", precio: "$8.900", categoria: "comida", subcategoria: "Tapeo" },
  { id: 104, nombre: "Papas TMT", descripcion: "Con cheddar, lactonesa, provenzal y topping de albondiguitas de bondiola.", precio: "$11.500", categoria: "comida", subcategoria: "Tapeo" },
  { id: 105, nombre: "Papas al Puerro", descripcion: "Salsa de puerro y crema, con pan tostado.", precio: "$10.500", categoria: "comida", subcategoria: "Tapeo" },
  { id: 106, nombre: "Nachos con Guacamole", descripcion: "Con paltonesa, tomates, pimientos y cebolla encurtida.", precio: "$10.500", categoria: "comida", subcategoria: "Tapeo" },
  { id: 107, nombre: "Nachos con Cheddar", descripcion: "Con cheddar, dados de lomo y verdeo.", precio: "$11.500", categoria: "comida", subcategoria: "Tapeo" },

  // --- WRAPS & QUESADILLAS ---
  { id: 120, nombre: "Wrap Pollo Crispy", descripcion: "Pollo frito, cheddar, lechuga, tomate, salsa TMT. Con papas.", precio: "$14.500", categoria: "comida", subcategoria: "Wraps & Quesadillas" },
  { id: 121, nombre: "Wrap de Lomo", descripcion: "Lomo a cuchillo, cheddar, lechuga, tomate, salsa TMT. Con papas.", precio: "$15.500", categoria: "comida", subcategoria: "Wraps & Quesadillas" },
  { id: 122, nombre: "Wrap Fresco", descripcion: "Mix verde, cebolla, zanahoria, palta, tomate, emulsión remolacha. Con papas.", precio: "$14.500", categoria: "comida", subcategoria: "Wraps & Quesadillas" },
  { id: 123, nombre: "Quesadillas de Lomo", descripcion: "Muzzarella, lomo, vegetales. Con papas.", precio: "$14.800", categoria: "comida", subcategoria: "Wraps & Quesadillas" },
  { id: 124, nombre: "Quesadillas de Pollo", descripcion: "Muzzarella, suprema, vegetales. Con papas.", precio: "$14.100", categoria: "comida", subcategoria: "Wraps & Quesadillas" },
  { id: 125, nombre: "Quesadillas de Hongos", descripcion: "Muzzarella, champiñones, verdeo. Con papas.", precio: "$14.500", categoria: "comida", subcategoria: "Wraps & Quesadillas" },

  // --- CLÁSICOS ---
  { id: 130, nombre: "Milanesa Clásica", descripcion: "Ternera con papas fritas y limón.", precio: "$14.200", categoria: "comida", subcategoria: "Clásicos", etiqueta: "📅 Mila Libre (Mié)" },
  { id: 131, nombre: "Milanesa Napolitana", descripcion: "Salsa tomate, queso, rodajas tomate, orégano. Con papas.", precio: "$15.500", categoria: "comida", subcategoria: "Clásicos", etiqueta: "📅 Mila Libre (Mié)" },
  { id: 132, nombre: "Milanesa Burguesa", descripcion: "Cheddar, cebolla encurtida, huevo frito, verdeo. Con papas.", precio: "$16.500", categoria: "comida", subcategoria: "Clásicos" },
  { id: 133, nombre: "Lomo a la Chapa", descripcion: "Bife lomo, queso gratinado, huevo. Con papas y rúcula.", precio: "$17.700", categoria: "comida", subcategoria: "Clásicos" },
  { id: 134, nombre: "Ensalada Pato el Pez", descripcion: "Rúcula, gravlax salmón, palta, langostinos, dressing caramelo.", precio: "$14.500", categoria: "comida", subcategoria: "Clásicos" },

  // --- ENTRE PANES ---
  { id: 140, nombre: "Bondiolita", descripcion: "Bondiola braseada, muzzarella, rúcula, tomate, cebolla encurtida. Con papas.", precio: "$16.500", categoria: "comida", subcategoria: "Entre Panes" },
  { id: 141, nombre: "Cheestake", descripcion: "Lomo cubos, cheddar, cebolla crispy. Con papas.", precio: "$16.900", categoria: "comida", subcategoria: "Entre Panes" },
  { id: 142, nombre: "Sándwich de Mila", descripcion: "Ternera, cheddar, huevo, lechuga, tomate. Con papas.", precio: "$15.700", categoria: "comida", subcategoria: "Entre Panes" },
  { id: 143, nombre: "Lomito TMT", descripcion: "Lomito, muzzarella, huevo, lechuga, tomate. Con papas.", precio: "$16.200", categoria: "comida", subcategoria: "Entre Panes" },
  { id: 144, nombre: "Fresco", descripcion: "Rúcula, cebolla, palta, zanahoria, huevo, muzzarella. Con papas.", precio: "$15.500", categoria: "comida", subcategoria: "Entre Panes" },

  // --- PIZZAS ---
  { id: 150, nombre: "Roque y Peras", descripcion: "Muzzarella, queso azul, peras asadas. (Media: $11.500)", precio: "$22.600", categoria: "comida", subcategoria: "Pizzas",etiqueta: "📅 Pizza Libre (Jue)" },
  { id: 151, nombre: "Hongos y Verdeo", descripcion: "Muzzarella, champiñones, verdeo. (Media: $12.000)", precio: "$23.500", categoria: "comida", subcategoria: "Pizzas",etiqueta: "📅 Pizza Libre (Jue)" },
  { id: 152, nombre: "Pico de Gallo", descripcion: "Pollo, salsa criolla, palta. (Media: $12.400)", precio: "$24.300", categoria: "comida", subcategoria: "Pizzas",etiqueta: "📅 Pizza Libre (Jue)" },
  { id: 153, nombre: "Langostinos", descripcion: "Langostinos fritos, dressing piña. (Media: $13.000)", precio: "$25.500", categoria: "comida", subcategoria: "Pizzas",etiqueta: "📅 Pizza Libre (Jue)" },
  { id: 154, nombre: "Rúcula y Parmesano", descripcion: "Clásica. (Media: $12.500)", precio: "$24.500", categoria: "comida", subcategoria: "Pizzas",etiqueta: "📅 Pizza Libre (Jue)" },
  { id: 155, nombre: "Fugazzetta", descripcion: "Cebolla salteada. (Media: $11.400)", precio: "$22.300", categoria: "comida", subcategoria: "Pizzas",etiqueta: "📅 Pizza Libre (Jue)" },
  { id: 156, nombre: "Napolitana", descripcion: "Tomate, provenzal, parmesano. (Media: $11.900)", precio: "$23.300", categoria: "comida", subcategoria: "Pizzas",etiqueta: "📅 Pizza Libre (Jue)" },
  { id: 157, nombre: "Huevo", descripcion: "Huevo duro. (Media: $11.500)", precio: "$23.500", categoria: "comida", subcategoria: "Pizzas",etiqueta: "📅 Pizza Libre (Jue)" },
  { id: 158, nombre: "Muzza", descripcion: "Clásica orégano. (Media: $10.500)", precio: "$20.500", categoria: "comida", subcategoria: "Pizzas",etiqueta: "📅 Pizza Libre (Jue)" },


  // =========================================
  //             VINOS Y BEBIDAS
  // =========================================

  // --- TINTOS ---
  { id: 200, nombre: "Rutini Cabernet Malbec", descripcion: "Botella.", precio: "$24.000", categoria: "vinos", subcategoria: "Vinos Tintos" },
  { id: 201, nombre: "Trumpeter Malbec", descripcion: "Botella.", precio: "$19.500", categoria: "vinos", subcategoria: "Vinos Tintos" },
  { id: 202, nombre: "Cordero con Piel de Lobo", descripcion: "Botella.", precio: "$15.500", categoria: "vinos", subcategoria: "Vinos Tintos" },
  { id: 203, nombre: "Alambrado Malbec", descripcion: "Botella.", precio: "$15.900", categoria: "vinos", subcategoria: "Vinos Tintos" },

  // --- BLANCOS Y ESPUMANTES ---
  { id: 210, nombre: "Trumpeter Sauvignon Blanc", descripcion: "Botella.", precio: "$18.500", categoria: "vinos", subcategoria: "Blancos & Espumantes" },
  { id: 211, nombre: "La Linda Chardonnay", descripcion: "Botella.", precio: "$15.500", categoria: "vinos", subcategoria: "Blancos & Espumantes" },
  { id: 212, nombre: "Santa Julia Chenin Dulce", descripcion: "Botella.", precio: "$15.100", categoria: "vinos", subcategoria: "Blancos & Espumantes" },
  { id: 213, nombre: "Santa Julia Chardonnay", descripcion: "Botella.", precio: "$14.900", categoria: "vinos", subcategoria: "Blancos & Espumantes" },
  { id: 214, nombre: "Baron B Extra Brut", descripcion: "Espumante.", precio: "$43.500", categoria: "vinos", subcategoria: "Blancos & Espumantes" },
  { id: 215, nombre: "Mumm Extra Brut", descripcion: "Espumante.", precio: "$23.500", categoria: "vinos", subcategoria: "Blancos & Espumantes" },

  // --- CERVEZAS (Las ponemos en categoría Vinos para que aparezcan en la pestaña de bebidas) ---
  { id: 250, nombre: "Heineken 1lt", descripcion: "Botella.", precio: "$10.000", categoria: "vinos", subcategoria: "Cervezas" },
  { id: 251, nombre: "Miller 1lt", descripcion: "Botella.", precio: "$9.500", categoria: "vinos", subcategoria: "Cervezas" },
  { id: 252, nombre: "Pinta Tirada", descripcion: "Cerveza artesanal.", precio: "$6.000", categoria: "vinos", subcategoria: "Cervezas" },
  { id: 253, nombre: "Lata 473ml", descripcion: "Consultar variedad.", precio: "$5.500", categoria: "vinos", subcategoria: "Cervezas" },
  { id: 254, nombre: "Lata Michelo", descripcion: "Sin TACC.", precio: "$6.000", categoria: "vinos", subcategoria: "Cervezas" },
  { id: 255, nombre: "Media Pinta", descripcion: "Cerveza artesanal.", precio: "$4.000", categoria: "vinos", subcategoria: "Cervezas" },

  // --- SIN ALCOHOL ---
  { id: 260, nombre: "Limonada Botella", descripcion: "Para compartir.", precio: "$8.000", categoria: "vinos", subcategoria: "Sin Alcohol" },
  { id: 261, nombre: "Limonada Individual", descripcion: "Vaso.", precio: "$6.000", categoria: "vinos", subcategoria: "Sin Alcohol" },
  { id: 262, nombre: "Limonada Maracuyá", descripcion: "Vaso.", precio: "$6.000", categoria: "vinos", subcategoria: "Sin Alcohol" },
  { id: 263, nombre: "Gaseosa Chica", descripcion: "Línea Coca-Cola.", precio: "$3.500", categoria: "vinos", subcategoria: "Sin Alcohol" },
  { id: 264, nombre: "Agua Saborizada", descripcion: "Botella.", precio: "$3.500", categoria: "vinos", subcategoria: "Sin Alcohol" },
  { id: 265, nombre: "Agua c/s Gas", descripcion: "Botella.", precio: "$3.500", categoria: "vinos", subcategoria: "Sin Alcohol" },
  { id: 266, nombre: "Red Bull", descripcion: "Lata.", precio: "$5.000", categoria: "vinos", subcategoria: "Sin Alcohol" },
  { id: 267, nombre: "Speed", descripcion: "Lata.", precio: "$4.500", categoria: "vinos", subcategoria: "Sin Alcohol" },

  // =========================================
  //                 POSTRES
  // =========================================
  { id: 300, nombre: "Brownie de Chocolate", descripcion: "Con helado, mousse de DDL, coulis y salsa choco.", precio: "$6.800", categoria: "postres", subcategoria: "Dulces" },
  { id: 301, nombre: "Flan Casero", descripcion: "Con dulce de leche y crema.", precio: "$6.200", categoria: "postres", subcategoria: "Dulces" },
];