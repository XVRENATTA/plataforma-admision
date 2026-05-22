// ==========================================
// MÓDULO DE ESTUDIO (STUDY CONTENT)
// ==========================================

const studyContent = {
  matematicas: {
    "Áreas y volúmenes": {
      title: "Áreas y volúmenes",
      theory: `
      El área mide el espacio en dos dimensiones (superficie) dentro de una figura plana. 
      El volumen mide el espacio en tres dimensiones que ocupa un cuerpo geométrico.
      `,
      formula: `
      Círculo (Área): A = π * r²
      Prisma rectangular (Volumen): V = largo * ancho * alto
      `,
      example: `
      Círculo con radio de 5:
      A = 3.14 * (5 * 5)
      A = 3.14 * 25 = 78.5
      `,
      tips: [
        "Para el área, el resultado siempre va al cuadrado (ej. cm²).",
        "Para el volumen, el resultado siempre va al cubo (ej. cm³)."
      ]
    },
    "Jerarquía de operaciones": {
      title: "Jerarquía de operaciones",
      theory: `
      La jerarquía de operaciones indica el orden matemático universal e inviolable para resolver expresiones con múltiples operaciones.
      `,
      formula: `
      Orden de ejecución:
      1. Paréntesis y corchetes () []
      2. Potencias y raíces (x², √)
      3. Multiplicación y división (*, /)
      4. Suma y resta (+, -)
      `,
      example: `
      10 + 2 * (8 - 5)

      1. Paréntesis: 8 - 5 = 3
      2. Multiplicación: 2 * 3 = 6
      3. Suma: 10 + 6 = 16
      `,
      tips: [
        "Nunca sumes o restes antes de multiplicar, a menos que haya un paréntesis obligándote.",
        "Si hay multiplicaciones y divisiones juntas, resuélvelas de izquierda a derecha."
      ]
    },
    "Operaciones con fracciones": {
      title: "Operaciones con fracciones",
      theory: `
      Las fracciones representan partes de un entero. Dependiendo de la operación matemática, se resuelven de forma directa, cruzada o igualando denominadores.
      `,
      formula: `
      Suma/Resta: Iguala los denominadores (números de abajo) y suma/resta los numeradores (arriba).
      Multiplicación: Directa (Arriba * Arriba / Abajo * Abajo).
      División: Cruzada (Numerador 1 * Denominador 2).
      `,
      example: `
      Multiplicación: (2/5) * (3/4)
      Arriba: 2 * 3 = 6
      Abajo: 5 * 4 = 20
      Resultado = 6/20
      `,
      tips: [
        "En suma y resta, NUNCA sumes los números de abajo.",
        "Siempre intenta simplificar tu resultado final dividiendo ambos números por la misma cantidad."
      ]
    },
    "Operaciones con decimales": {
      title: "Operaciones con decimales",
      theory: `
      Los decimales representan porciones menores a un entero. Las reglas cambian ligeramente entre sumas/restas y multiplicaciones.
      `,
      formula: `
      Suma/Resta: Alinea siempre el punto decimal verticalmente.
      Multiplicación: Multiplica normal sin punto, luego cuenta los decimales totales y recórrelos en el resultado.
      `,
      example: `
      12.5 * 0.4
      125 * 4 = 500
      Total de decimales originales: 2 (el .5 y el .4)
      Recorremos el punto en el 500 dos veces: 5.00
      `,
      tips: [
        "Al sumar o restar, rellena los espacios vacíos con ceros para no confundirte (ej. 3.45 + 1.20).",
        "El punto decimal en los números enteros siempre está escondido al final (ej. 5 es 5.0)."
      ]
    },
    "Ley de signos": {
      title: "Ley de signos",
      theory: `
      Reglas que determinan el signo final de un número al realizar operaciones algebraicas o aritméticas con números positivos y negativos.
      `,
      formula: `
      Para Multiplicación y División:
      (+) * (+) = (+)
      (-) * (-) = (+)
      (+) * (-) = (-)
      
      Para Suma y Resta:
      Mismo signo: Se suman y conservan su signo.
      Signo distinto: Se restan y se queda el signo del número mayor.
      `,
      example: `
      División: (-24) / (-6)
      24 / 6 = 4
      Menos entre Menos = Más (+)
      Resultado = +4
      `,
      tips: [
        "¡Cuidado! No apliques 'menos por menos da más' en sumas y restas. -5 - 3 es -8, NO +8."
      ]
    },
    "Teorema de Pitágoras": {
      title: "Teorema de Pitágoras",
      theory: `
      Establece que en todo triángulo rectángulo (con un ángulo de 90°), el cuadrado de la hipotenusa (el lado más largo) es igual a la suma de los cuadrados de los catetos.
      `,
      formula: `
      c² = a² + b²
      (Hipotenusa² = Cateto1² + Cateto2²)
      
      Para despejar un cateto:
      a² = c² - b²
      `,
      example: `
      Hipotenusa (c) = 10, Cateto (b) = 6. ¿Cateto (a)?
      a² = 10² - 6²
      a² = 100 - 36
      a² = 64
      a = √64 = 8
      `,
      tips: [
        "La hipotenusa siempre es el lado que está enfrente del ángulo recto.",
        "Si buscas la hipotenusa, sumas. Si buscas un cateto, restas."
      ]
    },
    "Semejanza y congruencia de triángulos": {
      title: "Semejanza y congruencia",
      theory: `
      Dos términos geométricos que comparan figuras. Semejanza significa 'misma forma, diferente tamaño', mientras que Congruencia significa 'exactamente idénticos'.
      `,
      formula: `
      Criterios de Congruencia:
      LLL: Los 3 lados son iguales.
      LAL: 2 lados y el ángulo entre ellos son iguales.
      ALA: 2 ángulos y el lado entre ellos son iguales.
      `,
      example: `
      Si el Triángulo A mide 3, 4 y 5 de lados. Y el Triángulo B también mide 3, 4 y 5 de lados. 
      Por el criterio LLL, ambos triángulos son CONGRUENTES.
      `,
      tips: [
        "Piensa en semejanza como hacer zoom a una foto. Piensa en congruencia como una fotocopia exacta."
      ]
    },
    "Ecuaciones lineales": {
      title: "Ecuaciones lineales",
      theory: `
      Son igualdades matemáticas donde la incógnita (usualmente 'x') está elevada a la primera potencia (no hay cuadrados ni cubos). El objetivo es encontrar su valor numérico.
      `,
      formula: `
      1. Agrupa las incógnitas (x) de un lado del igual (=).
      2. Agrupa los números del otro lado.
      3. Recuerda: Si cambia de lado, cambia a la operación contraria (suma a resta, multiplicación a división).
      `,
      example: `
      5x - 2 = 3x + 8
      Pasamos 3x restando y -2 sumando:
      5x - 3x = 8 + 2
      2x = 10
      x = 10 / 2 = 5
      `,
      tips: [
        "Verifica tu respuesta sustituyendo el valor que encontraste en la ecuación original. Si la igualdad se cumple, ¡es correcta!"
      ]
    },
    "Ecuaciones de segundo grado": {
      title: "Ecuaciones de segundo grado",
      theory: `
      También llamadas cuadráticas, son ecuaciones donde la incógnita está elevada al cuadrado (x²). Suelen tener dos resultados posibles (raíces).
      `,
      formula: `
      Forma general: ax² + bx + c = 0
      a = Término cuadrático (con x²)
      b = Término lineal (con x)
      c = Término independiente (número solo)
      `,
      example: `
      x² - 16 = 0
      Pasamos el 16 sumando:
      x² = 16
      Para quitar el cuadrado sacamos raíz:
      x = ±√16
      x1 = 4 , x2 = -4
      `,
      tips: [
        "Toda raíz cuadrada positiva genera dos respuestas válidas: una positiva y una negativa, porque (-4) * (-4) también da +16."
      ]
    }
  },

  fisica: {
    "Física": {
      title: "Concepto de Física",
      theory: `
      La física es la ciencia natural que estudia las propiedades del espacio, el tiempo, la materia y la energía, así como sus interacciones.
      `,
      formula: `
      Clave de la física:
      A diferencia de la química, la física estudia fenómenos donde la estructura íntima y composición de la materia NO se altera.
      `,
      example: `
      Si derrites hielo, rompes un vaso o avientas una pelota, sigue siendo agua, vidrio y plástico. No creaste sustancias nuevas.
      `,
      tips: [
        "Física = Cambio de estado o posición. Química = Cambio de identidad (creación de nuevas sustancias)."
      ]
    },
    "Materia": {
      title: "Materia",
      theory: `
      La materia es todo de lo que está hecho el universo físico. Para que algo sea considerado materia, debe cumplir con dos requisitos obligatorios.
      `,
      formula: `
      Requisitos de la Materia:
      1. Tener MASA (cantidad de partículas).
      2. Tener VOLUMEN (ocupar un lugar en el espacio).
      `,
      example: `
      El aire es materia (puedes inflar un globo y ver cómo ocupa espacio y pesa). La luz o los pensamientos NO son materia, porque no tienen masa ni volumen.
      `,
      tips: [
        "Si lo puedes pesar o medir cuánto espacio ocupa, es materia."
      ]
    },
    "Propiedades físicas de la materia": {
      title: "Propiedades físicas de la materia",
      theory: `
      Características que se pueden medir y observar sin cambiar la identidad de la sustancia. Se dividen en dos categorías según si dependen o no de la cantidad.
      `,
      formula: `
      Intensivas: NO dependen de la cantidad de materia (ej. Densidad, Punto de ebullición, Color).
      Extensivas: SÍ dependen de la cantidad de materia (ej. Masa, Volumen, Peso).
      `,
      example: `
      El punto de ebullición del agua es INTENSIVO porque una taza o una olla de agua ambas hierven a 100°C. 
      Pero el volumen es EXTENSIVO, porque una olla ocupa más espacio que una taza.
      `,
      tips: [
        "Intensiva = Interna (propia del material sin importar el tamaño). Extensiva = Exterior (tamaño y peso)."
      ]
    },
    "Movimiento rectilíneo uniforme y características": {
      title: "Movimiento Rectilíneo Uniforme (MRU)",
      theory: `
      Tipo de movimiento donde un objeto viaja en una trayectoria recta a una velocidad constante (no frena ni acelera).
      `,
      formula: `
      v = d / t
      v = Velocidad
      d = Distancia
      t = Tiempo
      `,
      example: `
      Si un coche viaja 100 metros en 20 segundos sin acelerar ni frenar:
      v = 100 / 20
      v = 5 m/s
      `,
      tips: [
        "En MRU la aceleración siempre es CERO.",
        "Su gráfica de Distancia contra Tiempo siempre es una línea recta diagonal."
      ]
    },
    "Movimiento rectilíneo uniformemente variable y características": {
      title: "MRUV (Acelerado)",
      theory: `
      Tipo de movimiento donde la velocidad de un objeto cambia a un ritmo constante con el tiempo. Esto significa que existe una aceleración.
      `,
      formula: `
      a = (Vf - Vi) / t
      a = Aceleración
      Vf = Velocidad final
      Vi = Velocidad inicial
      t = Tiempo
      `,
      example: `
      Un auto pasa de 10 m/s a 30 m/s en 4 segundos:
      a = (30 - 10) / 4
      a = 20 / 4 = 5 m/s²
      `,
      tips: [
        "Si un objeto parte del reposo, su Vi es 0.",
        "Si un objeto frena hasta detenerse, su Vf es 0."
      ]
    },
    "Notación científica": {
      title: "Notación científica",
      theory: `
      Forma de escribir números que son demasiado grandes o demasiado pequeños de manera conveniente usando potencias de 10.
      `,
      formula: `
      A x 10^n
      Exponente positivo (+): Mueve el punto a la DERECHA (números gigantes).
      Exponente negativo (-): Mueve el punto a la IZQUIERDA (números diminutos).
      `,
      example: `
      3.2 x 10³ = Mueve el punto 3 veces a la derecha = 3200
      7.8 x 10^-5 = Mueve el punto 5 veces a la izquierda = 0.000078
      `,
      tips: [
        "Cuenta los lugares que saltas con el punto decimal, no solo la cantidad de ceros que agregas."
      ]
    },
    "Magnitudes y clasificación": {
      title: "Magnitudes y clasificación",
      theory: `
      Una magnitud es cualquier propiedad que puede ser medida. En física, hay dos tipos principales dependiendo de la información que requieran.
      `,
      formula: `
      Escalares: Solo necesitan Número + Unidad (Ej. 5 kg, 20°C, 3 horas).
      Vectoriales: Necesitan Número + Unidad + Dirección y Sentido (Ej. Velocidad, Fuerza, Aceleración).
      `,
      example: `
      Decir "aplica una fuerza de 10 Newtons" está incompleto (falta el vector). ¿Hacia dónde aplico la fuerza? Necesita dirección para ser vectorial.
      `,
      tips: [
        "Si puedes representarlo con una flecha en un dibujo, es una magnitud vectorial."
      ]
    },
    "Fenómenos físicos": {
      title: "Fenómenos físicos",
      theory: `
      Cambios que sufre la materia en su estado, forma o posición SIN alterar su estructura atómica o composición química.
      `,
      formula: `
      Reversible en la mayoría de los casos.
      Fórmula química final = Fórmula química inicial
      `,
      example: `
      Evaporación del agua: Pasa de ser H2O líquida a H2O gaseosa. Se ve diferente, pero químicamente sigue siendo agua. 
      Doblar un alambre: Sigue siendo el mismo metal.
      `,
      tips: [
        "Si involucra fuego (quemar), oxidación o digestión, entonces NO es físico, es químico."
      ]
    },
    "Conversiones": {
      title: "Conversiones de unidades",
      theory: `
      Proceso de transformar una medida expresada en una unidad a otra unidad equivalente mediante factores de conversión o fórmulas.
      `,
      formula: `
      Celsius a Kelvin: K = °C + 273.15
      Horas a Segundos: Multiplicar por 3600 (porque 1h = 60min y 1min = 60s).
      `,
      example: `
      Convertir 2 horas a segundos:
      2 * 60 (minutos) = 120
      120 * 60 (segundos) = 7200 segundos.
      `,
      tips: [
        "Asegúrate siempre de que las unidades se cancelen correctamente cuando multipliques fracciones de conversión."
      ]
    },
    "Despejes": {
      title: "Despeje de fórmulas",
      theory: `
      Técnica matemática utilizada para aislar una variable específica de una ecuación pasando el resto de elementos al lado opuesto del signo igual.
      `,
      formula: `
      Regla de oro: Todo pasa al otro lado con la operación matemática CONTRARIA:
      Suma <-> Resta
      Multiplicación <-> División
      Potencia <-> Raíz
      `,
      example: `
      Despejar 'm' de la fórmula P = m * g
      La 'g' le está estorbando a la 'm' y está multiplicando.
      La pasamos del lado de la P dividiendo:
      m = P / g
      `,
      tips: [
        "Si la letra que quieres despejar está debajo de una fracción (como denominador), pásala primero multiplicando al otro lado para subirla."
      ]
    }
  },

  quimica: {
    "Ácidos y bases": {
      title: "Ácidos y bases",
      theory: `
      Clasificación de compuestos químicos según su comportamiento en el agua y su pH. La teoría clásica es la de Svante Arrhenius.
      `,
      formula: `
      Ácido: Sustancia que en solución acuosa libera iones de Hidrógeno (H+). Su pH es MENOR a 7.
      Base: Sustancia que en solución acuosa libera iones Hidroxilo (OH-). Su pH es MAYOR a 7.
      `,
      example: `
      Ácido Clorhídrico (HCl) -> En agua se separa en H+ y Cl-. Al liberar H+, es un ácido.
      El limón y el vinagre son ácidos. El jabón y el cloro son bases.
      `,
      tips: [
        "Recuerda la escala de pH: 0 al 6.9 es Ácido. 7 es Neutro (agua pura). 7.1 al 14 es Base."
      ]
    },
    "Alimentación y salud": {
      title: "Alimentación y macromoléculas",
      theory: `
      El cuerpo obtiene sus nutrientes y energía a partir de tres biomoléculas o macromoléculas principales.
      `,
      formula: `
      Carbohidratos: Energía rápida e inmediata (azúcares, harinas).
      Lípidos (Grasas): Almacén de energía a largo plazo y aislante térmico.
      Proteínas: Crecimiento, estructura y reparación celular y de tejidos (músculos).
      `,
      example: `
      Si te cortas la piel o haces pesas rompiendo fibras musculares, tu cuerpo usa las Proteínas para reparar y crear tejido nuevo.
      `,
      tips: [
        "Proteínas = Constructores/Ladrillos. Carbohidratos = Combustible de uso rápido."
      ]
    },
    "Concentración de contaminantes": {
      title: "Concentración en PPM",
      theory: `
      Cuando hay cantidades extremadamente microscópicas de una sustancia peligrosa o contaminante en el aire o el agua, usar porcentajes (%) es impráctico.
      `,
      formula: `
      PPM = Partes Por Millón
      Significa la cantidad de partes de un soluto que hay disueltas en un millón de partes del total.
      `,
      example: `
      0.01 ppm de plomo en agua significa que si divides el agua en 1,000,000 de gotitas, solo una pequeñísima fracción de una gotita es de plomo puro.
      `,
      tips: [
        "PPM es exclusivo para medir trazas o concentraciones minúsculas."
      ]
    },
    "Mezclas": {
      title: "Clasificación de mezclas",
      theory: `
      Unión física de dos o más sustancias que no reaccionan químicamente entre sí. Se clasifican según cómo se ven a simple vista.
      `,
      formula: `
      Homogéneas (Soluciones): Una sola fase visual. No puedes distinguir qué tiene adentro (ej. Agua con azúcar, el aire).
      Heterogéneas: Dos o más fases visuales. Se notan los componentes separados (ej. Ensalada, agua y arena).
      `,
      example: `
      El agua con aceite es el ejemplo perfecto de mezcla heterogénea, ya que por sus distintas densidades siempre se verán las dos capas separadas.
      `,
      tips: [
        "Homo = Igual (se ve todo igual). Hetero = Diferente (se ven partes diferentes)."
      ]
    },
    "Métodos de separación de mezclas": {
      title: "Separación de mezclas",
      theory: `
      Técnicas físicas usadas para separar los componentes de una mezcla sin alterar sus propiedades químicas.
      `,
      formula: `
      Filtración: Separa sólidos insolubles de líquidos (usa un filtro).
      Destilación: Separa líquidos miscibles basándose en diferentes puntos de ebullición.
      Decantación: Separa líquidos inmiscibles (que no se mezclan) por diferencia de densidades usando la gravedad.
      `,
      example: `
      Si quieres separar agua y aceite, los metes en un embudo de decantación. El agua es más pesada y se va al fondo. Abres la llave, dejas caer el agua y la cierras antes de que pase el aceite.
      `,
      tips: [
        "Si hierven a temperaturas distintas -> Destilación. Si uno es pesado y el otro flota -> Decantación."
      ]
    },
    "Enlaces químicos": {
      title: "Enlaces químicos",
      theory: `
      Fuerzas de atracción que mantienen unidos a los átomos para formar moléculas y alcanzar estabilidad electrónica.
      `,
      formula: `
      Iónico: Transferencia de electrones (uno cede, otro roba). Se forman cargas (+ y -) que se atraen como imanes. Ocurre entre Metal + No Metal.
      Covalente: Compartición de electrones. Ocurre entre No Metal + No Metal.
      Metálico: Nube de electrones libres. Metal + Metal.
      `,
      example: `
      La Sal de mesa (NaCl) es un enlace Iónico. El Sodio (metal) le cede un electrón al Cloro (no metal), volviéndolos iones que se atraen fuertemente.
      `,
      tips: [
        "Iónico = Robo y transferencia. Covalente = Compartir pacíficamente."
      ]
    },
    "Modelos atómicos": {
      title: "Modelos atómicos a lo largo de la historia",
      theory: `
      La representación visual del átomo ha evolucionado gracias a múltiples científicos que descubrieron nuevas partículas subatómicas.
      `,
      formula: `
      Dalton: Esfera sólida indivisible.
      Thomson: "Pudín de pasas" (Masa positiva con electrones negativos incrustados).
      Rutherford: Sistema planetario diminuto (Descubrió el núcleo central positivo).
      Bohr: Órbitas definidas con niveles de energía (donde giran los electrones).
      `,
      example: `
      Thomson descubrió los electrones, pero como aún no se sabía que existía un núcleo, él imaginó el átomo como una gelatina positiva con 'pasas' negativas adentro.
      `,
      tips: [
        "Relaciona los nombres: Thomson = Pudín, Rutherford = Núcleo, Bohr = Órbitas de energía."
      ]
    },
    "Definición de átomo": {
      title: "Definición del átomo",
      theory: `
      Es la unidad base estructural de la materia. Es la partícula más pequeña de un elemento que aún conserva las propiedades de dicho elemento.
      `,
      formula: `
      Etimología griega:
      "A" = Sin
      "Tomo" = División o corte
      Átomo = Partícula indivisible.
      `,
      example: `
      Si tomas un trozo de oro y lo partes a la mitad millones de veces, llegarás a un solo átomo de oro. Si logras partir ese átomo, dejará de ser oro.
      `,
      tips: [
        "Aunque hoy sabemos que el átomo sí se puede dividir (en protones, electrones y neutrones), la palabra antigua se conservó."
      ]
    },
    "Tabla periódica": {
      title: "Organización de la Tabla Periódica",
      theory: `
      Es la clasificación estructurada de todos los elementos químicos conocidos, organizados por su número atómico creciente (cantidad de protones).
      `,
      formula: `
      Periodos: Son las 7 filas horizontales (↔). Indican el número de capas de energía del átomo.
      Grupos/Familias: Son las 18 columnas verticales (↕). Los elementos de una misma familia tienen un comportamiento químico similar.
      `,
      example: `
      Todos los elementos del Grupo 1 (columna izquierda extrema) son metales alcalinos y todos reaccionan violentamente al tocar el agua.
      `,
      tips: [
        "Periodos = Renglones (Acostados). Grupos/Familias = Columnas (Paradas)."
      ]
    },
    "Partículas subatómicas": {
      title: "Partículas subatómicas",
      theory: `
      Son los bloques microscópicos que, al juntarse, construyen el átomo. Existen tres principales con distintas cargas y ubicaciones.
      `,
      formula: `
      1. Protón: Carga Positiva (+), ubicado en el núcleo.
      2. Neutrón: Carga Neutra (0), ubicado en el núcleo.
      3. Electrón: Carga Negativa (-), ubicado orbitando alrededor del núcleo.
      `,
      example: `
      El número atómico (Z) de la tabla periódica es igual, única y exclusivamente, al número de Protones en el núcleo. Es el ADN del elemento.
      `,
      tips: [
        "Recuerda: Protones y Neutrones conforman casi todo el peso del átomo porque están compactados en el centro. Los electrones no pesan casi nada."
      ]
    },
    "Propiedades de la materia": {
      title: "Estados de agregación",
      theory: `
      La materia se presenta principalmente en tres estados dependiendo de cómo se comporten y agrupen sus partículas a diferentes temperaturas.
      `,
      formula: `
      Sólidos: Partículas unidas fuertemente. Forma y volumen definido.
      Líquidos: Partículas algo libres. Toman la forma del recipiente pero conservan su volumen.
      Gases: Partículas rebotando libremente con máxima separación. No tienen forma ni volumen fijo, ocupan todo el espacio posible.
      `,
      example: `
      El aire dentro de un globo está en estado gaseoso; las partículas están tan sueltas que chocan constantemente contra las paredes intentando expandirse.
      `,
      tips: [
        "En un gas, la fuerza de repulsión le gana por completo a la fuerza de cohesión."
      ]
    },
    "Balanceo de ecuaciones": {
      title: "Balanceo de ecuaciones químicas",
      theory: `
      Proceso matemático para igualar la cantidad de átomos de cada elemento del lado de los reactivos con el lado de los productos.
      `,
      formula: `
      Regla de oro:
      SÓLO puedes modificar los coeficientes estequiométricos (los números grandes a la izquierda de la molécula). 
      NUNCA puedes cambiar los subíndices (los números pequeños abajo).
      `,
      example: `
      N2 + H2 -> NH3 (Desbalanceado)
      N2 + 3H2 -> 2NH3 (Balanceado)
      Izquierda: 2 N, 6 H
      Derecha: 2 N, 6 H
      `,
      tips: [
        "Deja al oxígeno y al hidrógeno para el final; suele ser más fácil cuadrar primero los metales y no metales."
      ]
    },
    "Ley de la conservación de la materia": {
      title: "Ley de la Conservación de la Materia",
      theory: `
      Ley fundamental postulada por Antoine Lavoisier. Es el motivo principal por el cual estamos obligados a balancear todas las ecuaciones químicas.
      `,
      formula: `
      "La materia no se crea ni se destruye, solo se transforma."
      Masa total de Reactivos = Masa total de Productos
      `,
      example: `
      Si en un recipiente cerrado quemas 10 gramos de papel y oxígeno, las cenizas, el humo y los gases resultantes pesarán exactamente 10 gramos en total. Nada se perdió en la nada.
      `,
      tips: [
        "Lo que entra a una reacción, tiene que salir. Solo cambia de apariencia o conexiones."
      ]
    }
  }
};