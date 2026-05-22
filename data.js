// ==========================================
// MOTOR DE VALIDACIÓN Y ESTADÍSTICAS
// ==========================================

// 1. Función para normalizar texto (limpia acentos, mayúsculas, unidades y espacios)
function normalize(text) {
  if (!text) return "";
  return text.toString()
    .toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // Quita acentos
    .replace(/\s+/g, "") // Quita absolutamente todos los espacios
    .trim();
}

// 2. Función para validar la respuesta del usuario
function checkAnswer(userAnswer, questionObj) {
  const normalizedUser = normalize(userAnswer);
  
  // Compara la respuesta limpia del usuario contra TODAS las respuestas válidas limpias
  return questionObj.answers.some(validAnswer => {
    return normalize(validAnswer) === normalizedUser;
  });
}

// 3. Objeto global para guardar estadísticas
const userStats = {};

function registrarEstadisticas(topic, isCorrect) {
  if (!userStats[topic]) {
    userStats[topic] = { correctas: 0, incorrectas: 0, total: 0 };
  }
  
  userStats[topic].total += 1;
  if (isCorrect) {
    userStats[topic].correctas += 1;
  } else {
    userStats[topic].incorrectas += 1;
  }
}

// ==========================================
// BASE DE DATOS DE PREGUNTAS (QUESTION BANK)
// ==========================================

const questionBank = {
  matematicas: [
    {
      id: "mat-01",
      subject: "matematicas",
      topic: "Áreas y volúmenes",
      question: "¿Cuál es el área de un círculo con un radio de 5? (Usa pi = 3.14)",
      answers: ["78.5", "78.50", "78.5 cm2", "78.5 cm²"],
      difficulty: "medio",
      hint: "La fórmula del área de un círculo es pi por radio al cuadrado (π * r²).",
      explanation: "Paso 1: Identifica la fórmula del área: A = π * r².\nPaso 2: Sustituye el valor del radio: A = 3.14 * (5²).\nPaso 3: Eleva el radio al cuadrado: 5 * 5 = 25.\nPaso 4: Multiplica por pi: 3.14 * 25 = 78.5."
    },
    {
      id: "mat-02",
      subject: "matematicas",
      topic: "Áreas y volúmenes",
      question: "¿Cuál es el volumen de un prisma rectangular que mide 3 de largo, 4 de ancho y 5 de alto?",
      answers: ["60", "60 cm3", "60 cm³", "60cm3"],
      difficulty: "facil",
      options: ["12", "60", "20", "15"],
      hint: "El volumen de un prisma rectangular se calcula multiplicando sus tres lados (largo x ancho x alto).",
      explanation: "Paso 1: Recuerda la fórmula del volumen de un prisma rectangular: V = largo * ancho * alto.\nPaso 2: Sustituye los valores dados: V = 3 * 4 * 5.\nPaso 3: Realiza la multiplicación: 3 * 4 = 12.\nPaso 4: Multiplica el resultado por la altura: 12 * 5 = 60."
    },
    {
      id: "mat-03",
      subject: "matematicas",
      topic: "Jerarquía de operaciones",
      question: "Siguiendo la jerarquía de operaciones, resuelve: 10 + 2 * (8 - 5)",
      answers: ["16", "dieciseis"],
      difficulty: "medio",
      hint: "Recuerda el orden: primero paréntesis, luego multiplicaciones y divisiones, y al final sumas y restas.",
      explanation: "Paso 1: Resuelve primero lo que está dentro del paréntesis: (8 - 5 = 3). La expresión queda: 10 + 2 * 3.\nPaso 2: Realiza la multiplicación antes que la suma: 2 * 3 = 6. La expresión queda: 10 + 6.\nPaso 3: Suma los valores finales: 10 + 6 = 16."
    },
    {
      id: "mat-04",
      subject: "matematicas",
      topic: "Jerarquía de operaciones",
      question: "Resuelve: 4² - 3 * 2",
      answers: ["10", "diez"],
      difficulty: "medio",
      hint: "Resuelve primero la potencia, luego la multiplicación y al último la resta.",
      explanation: "Paso 1: Resuelve la potencia: 4² (4 * 4) = 16. La expresión queda: 16 - 3 * 2.\nPaso 2: Realiza la multiplicación: 3 * 2 = 6. La expresión queda: 16 - 6.\nPaso 3: Haz la resta final: 16 - 6 = 10."
    },
    {
      id: "mat-05",
      subject: "matematicas",
      topic: "Operaciones con fracciones",
      question: "Resuelve the siguiente resta de fracciones: 3/4 - 1/2",
      answers: ["1/4", "0.25", "un cuarto"],
      difficulty: "facil",
      options: ["1/4", "2/2", "1/2", "2/4"],
      hint: "Convierte 1/2 a un equivalente con denominador 4 para que sea más fácil restar.",
      explanation: "Paso 1: Iguala los denominadores. Multiplica el numerador y denominador de 1/2 por 2 para convertirlo a cuartos: (1*2)/(2*2) = 2/4.\nPaso 2: Reescribe la resta con los mismos denominadores: 3/4 - 2/4.\nPaso 3: Resta solo los numeradores y mantén el denominador: 3 - 2 = 1. El resultado es 1/4."
    },
    {
      id: "mat-06",
      subject: "matematicas",
      topic: "Operaciones con fracciones",
      question: "Resuelve la multiplicación de fracciones: (2/5) * (3/4)",
      answers: ["6/20", "3/10", "0.3"],
      difficulty: "facil",
      options: ["8/15", "5/9", "6/20", "12/10"],
      hint: "En la multiplicación de fracciones se multiplica directo: numerador por numerador y denominador por denominador.",
      explanation: "Paso 1: Multiplica los numeradores (los números de arriba): 2 * 3 = 6.\nPaso 2: Multiplica los denominadores (los números de abajo): 5 * 4 = 20.\nPaso 3: Junta ambos resultados para formar la fracción: 6/20."
    },
    {
      id: "mat-07",
      subject: "matematicas",
      topic: "Operaciones con decimales",
      question: "¿Cuánto es 12.5 * 0.4?",
      answers: ["5", "5.0", "5.00", "cinco"],
      difficulty: "medio",
      hint: "Multiplica los números como si no tuvieran punto (125 * 4) y al final recorre el punto decimal dos lugares.",
      explanation: "Paso 1: Ignora los puntos temporalmente y multiplica 125 * 4 = 500.\nPaso 2: Cuenta cuántas cifras decimales hay en los números originales: 12.5 tiene una y 0.4 tiene otra (son 2 en total).\nPaso 3: Recorre el punto decimal dos lugares a la izquierda en el 500: 5.00, que es lo mismo que 5."
    },
    {
      id: "mat-08",
      subject: "matematicas",
      topic: "Operaciones con decimales",
      question: "Suma los siguientes decimales: 3.45 + 1.2",
      answers: ["4.65"],
      difficulty: "facil",
      options: ["4.47", "3.57", "4.65", "4.55"],
      hint: "Alinea los números por el punto decimal antes de sumar. Puedes agregar un cero a 1.2 para que sea 1.20.",
      explanation: "Paso 1: Alinea verticalmente los números usando el punto decimal de referencia.\nPaso 2: Agrega un 0 al 1.2 para tener la misma cantidad de decimales: 3.45 + 1.20.\nPaso 3: Suma columna por columna de derecha a izquierda: 5+0=5, 4+2=6, 3+1=4. Resultado: 4.65."
    },
    {
      id: "mat-09",
      subject: "matematicas",
      topic: "Ley de signos",
      question: "Aplica la ley de los signos para la división: (-24) / (-6)",
      answers: ["4", "+4", "cuatro"],
      difficulty: "facil",
      options: ["-4", "4", "30", "18"],
      hint: "Recuerda que dividir o multiplicar dos números negativos siempre da como resultado un número positivo.",
      explanation: "Paso 1: Divide los valores absolutos de los números: 24 / 6 = 4.\nPaso 2: Aplica la ley de los signos: negativo entre negativo es positivo (- / - = +).\nPaso 3: El resultado es 4 positivo."
    },
    {
      id: "mat-10",
      subject: "matematicas",
      topic: "Ley de signos",
      question: "Resuelve la siguiente suma de números con signo: -8 + (-5)",
      answers: ["-13", "menos trece", "menos 13"],
      difficulty: "facil",
      options: ["-3", "3", "13", "-13"],
      hint: "Si tienes dos deudas (dos números negativos), se suman y sigues teniendo una deuda mayor.",
      explanation: "Paso 1: La expresión equivale a sumar dos cantidades negativas: -8 - 5.\nPaso 2: Al ser ambos del mismo signo, se suman sus valores: 8 + 5 = 13.\nPaso 3: Se conserva el signo que comparten, por lo que el resultado es -13."
    },
    {
      id: "mat-11",
      subject: "matematicas",
      topic: "Teorema de Pitágoras",
      question: "En un triángulo rectángulo, la hipotenusa mide 10 y un cateto mide 6. ¿Cuánto mide el otro cateto?",
      answers: ["8", "8 cm", "ocho"],
      difficulty: "dificil",
      hint: "La fórmula es a² + b² = c². Para encontrar un cateto, tienes que restarle a la hipotenusa al cuadrado el cateto al cuadrado: a² = c² - b².",
      explanation: "Paso 1: Escribe la fórmula para encontrar un cateto: a² = c² - b².\nPaso 2: Sustituye los valores: a² = 10² - 6².\nPaso 3: Eleva al cuadrado: a² = 100 - 36.\nPaso 4: Realiza la resta: a² = 64.\nPaso 5: Saca la raíz cuadrada de 64: a = 8."
    },
    {
      id: "mat-12",
      subject: "matematicas",
      topic: "Semejanza y congruencia de triángulos",
      question: "El criterio LLL (Lado-Lado-Lado) garantiza que dos triángulos son:",
      answers: ["Congruentes", "Congruencia", "Son congruentes", "Iguales"],
      difficulty: "medio",
      hint: "Si todos los lados son exactamente iguales, significa que los triángulos son idénticos en forma y tamaño.",
      explanation: "Paso 1: Analiza el acrónimo LLL, que significa Lado-Lado-Lado.\nPaso 2: Este criterio estipula que si los tres lados de un triángulo miden exactamente lo mismo que los tres lados de otro, no hay forma de que sean diferentes.\nPaso 3: A la identidad exacta en geometría se le llama congruencia, por lo tanto son congruentes."
    },
    {
      id: "mat-13",
      subject: "matematicas",
      topic: "Ecuaciones lineales",
      question: "Encuentra el valor de 'x' en la ecuación: 5x - 2 = 3x + 8",
      answers: ["5", "x=5", "x = 5"],
      difficulty: "dificil",
      hint: "Agrupa todas las 'x' de un lado del igual y todos los números solos del otro lado.",
      explanation: "Paso 1: Pasa el 3x restando al lado izquierdo: 5x - 3x - 2 = 8.\nPaso 2: Pasa el -2 sumando al lado derecho: 5x - 3x = 8 + 2.\nPaso 3: Simplifica ambos lados: 2x = 10.\nPaso 4: Divide entre 2 para despejar x: x = 10 / 2 = 5."
    },
    {
      id: "mat-14",
      subject: "matematicas",
      topic: "Ecuaciones de segundo grado",
      question: "En una ecuación cuadrática del tipo ax² + bx + c = 0, ¿qué representa 'c'?",
      answers: ["El término independiente", "Termino independiente", "Independiente"],
      difficulty: "medio",
      hint: "Observa que 'c' es la única letra que no está multiplicando a ninguna 'x'.",
      explanation: "Paso 1: Analiza la estructura de la ecuación: ax² es el término cuadrático y bx es el término lineal.\nPaso 2: Nota que 'c' es un número que no depende de la variable 'x'.\nPaso 3: Por lo tanto, a 'c' se le conoce como el término independiente."
    },
    {
      id: "mat-15",
      subject: "matematicas",
      topic: "Ecuaciones de segundo grado",
      question: "Resuelve la ecuación cuadrática incompleta: x² - 16 = 0",
      answers: ["4 y -4", "-4 y 4", "4,-4", "-4,4", "4 y menos 4", "±4", "+-4"],
      difficulty: "medio",
      hint: "Pasa el 16 al otro lado y saca la raíz cuadrada. Recuerda que toda raíz cuadrada tiene un resultado positivo y uno negativo.",
      explanation: "Paso 1: Despeja la x² pasando el 16 sumando al otro lado: x² = 16.\nPaso 2: Para quitar el cuadrado, saca la raíz cuadrada de ambos lados: x = √16.\nPaso 3: La raíz de 16 es 4, ya que 4 * 4 = 16.\nPaso 4: Sin embargo, -4 * -4 también es 16, por lo que las dos soluciones válidas son 4 y -4."
    }
  ],

  fisica: [
    {
      id: "fis-01",
      subject: "fisica",
      topic: "Física",
      question: "Rama de la ciencia que estudia los fenómenos donde no hay cambios en la estructura íntima de la materia.",
      answers: ["Física", "La física", "Fisica"],
      difficulty: "facil",
      options: ["Química", "Biología", "Física", "Ecología"],
      hint: "Si doblas un papel o derrites hielo, sigue siendo papel y agua. Esta ciencia estudia eso (movimiento, energía, etc.).",
      explanation: "Paso 1: Identifica que la Química estudia cambios donde la materia SÍ se transforma (como quemar algo).\nPaso 2: La Biología estudia a los seres vivos.\nPaso 3: La Física estudia el comportamiento de la materia, la energía, el tiempo y el espacio, sin alterar qué es la sustancia."
    },
    {
      id: "fis-02",
      subject: "fisica",
      topic: "Materia",
      question: "¿Cuál es el concepto fundamental de materia?",
      answers: ["Todo aquello que tiene masa y ocupa un volumen en el espacio", "Todo lo que tiene masa y ocupa espacio", "Todo lo que ocupa un lugar en el espacio y tiene masa", "masa y volumen"],
      difficulty: "facil",
      options: ["La energía radiante del sol.", "Todo aquello que tiene masa y ocupa un volumen en el espacio.", "Las ondas sonoras en el aire.", "La ausencia de átomos."],
      hint: "Piensa en las dos características principales de cualquier objecto: pesa algo y ocupa lugar.",
      explanation: "Paso 1: Entiende que para que algo sea materia (como una mesa, agua o el aire), necesita dos propiedades fundamentales.\nPaso 2: Debe tener una cantidad de partículas (masa).\nPaso 3: Debe existir en tres dimensiones físicas (volumen o espacio).\nPaso 4: Por ello, la materia es todo lo que tiene masa y ocupa un lugar en el espacio."
    },
    {
      id: "fis-03",
      subject: "fisica",
      topic: "Propiedades físicas de la materia",
      question: "¿Qué tipo de propiedad física es el punto de ebullición?",
      answers: ["Intensiva", "Propiedad intensiva", "Intensivas"],
      difficulty: "medio",
      hint: "Piensa si un litro de agua hierve a la misma temperatura que una gota. Si no depende de la cantidad, es de este tipo.",
      explanation: "Paso 1: Analiza si la temperatura a la que hierve un líquido cambia dependiendo de cuánto líquido hay.\nPaso 2: Como el agua siempre hierve a 100°C (a nivel del mar) sin importar si es una taza o una piscina, no depende de la cantidad de masa.\nPaso 3: Las propiedades que no depende de la cantidad de materia se llaman intensivas."
    },
    {
      id: "fis-04",
      subject: "fisica",
      topic: "Propiedades físicas de la materia",
      question: "La masa y el volumen son propiedades de la materia del tipo:",
      answers: ["Extensivas", "Propiedades extensivas", "Extensiva"],
      difficulty: "facil",
      options: ["Intensivas", "Específicas", "Extensivas", "Ópticas"],
      hint: "A diferencia del color o el punto de ebullición, la masa y el volumen sí cambian si agregas más cantidad de la sustancia.",
      explanation: "Paso 1: Imagina que tienes una manzana y le agregas otra. La masa aumenta y el volumen (espacio que ocupan) también.\nPaso 2: Dado que el valor de la masa y el volumen crece dependiendo de la extensión o cantidad de materia, se catalogan como propiedades extensivas."
    },
    {
      id: "fis-05",
      subject: "fisica",
      topic: "Movimiento rectilíneo uniforme y características",
      question: "En un gráfico de Distancia contra Tiempo para un MRU, la línea resultante es:",
      answers: ["Una recta inclinada", "Linea recta inclinada", "Diagonal", "Una diagonal", "Línea recta diagonal"],
      difficulty: "dificil",
      hint: "Si la velocidad es constante, por cada segundo que pasa, avanzas exactamente la misma cantidad de metros. ¿Qué dibujo hace eso en una gráfica?",
      explanation: "Paso 1: En un MRU, la velocidad nunca cambia.\nPaso 2: Si graficas el Tiempo (eje X) y la Distancia (eje Y), por cada unidad de X subirás la misma cantidad en Y.\nPaso 3: Al unir esos puntos proporcionalmente consistentes, el trazo resultante es una recta inclinada o diagonal ascendente."
    },
    {
      id: "fis-06",
      subject: "fisica",
      topic: "Movimiento rectilíneo uniformemente variable y características",
      question: "En el Movimiento Rectilíneo Uniformemente Variable, si un auto frena hasta detenerse, su velocidad final es:",
      answers: ["Cero", "0", "0 m/s", "0m/s"],
      difficulty: "facil",
      options: ["Negativa", "Constante", "Máxima", "Cero"],
      hint: "Detenerse significa que ya no hay ningún tipo de movimiento.",
      explanation: "Paso 1: Entiende el concepto de 'detenerse'.\nPaso 2: Si un objeto no se está moviendo, no está recorriendo ninguna distancia en ningún periodo de tiempo.\nPaso 3: Por lo tanto, su velocidad (distancia / tiempo) es igual a cero."
    },
    {
      id: "fis-07",
      subject: "fisica",
      topic: "Movimiento rectilíneo uniformemente variable y características",
      question: "Un auto pasa de 10 m/s a 30 m/s en 4 segundos. ¿Cuál fue su aceleración?",
      answers: ["5", "5 m/s²", "5m/s2", "5 m/s2"],
      difficulty: "dificil",
      hint: "La aceleración es el cambio de velocidad dividido por el tiempo. Resta la velocidad inicial a la final, y divídelo entre los segundos.",
      explanation: "Paso 1: Identifica la fórmula de aceleración: a = (Velocidad final - Velocidad inicial) / tiempo.\nPaso 2: Sustituye los datos del problema: a = (30 - 10) / 4.\nPaso 3: Realiza la resta para ver cuánto cambió la velocidad: 30 - 10 = 20.\nPaso 4: Divide ese cambio entre el tiempo: 20 / 4 = 5."
    },
    {
      id: "fis-08",
      subject: "fisica",
      topic: "Notación científica",
      question: "¿Qué valor representa 3.2 x 10³?",
      answers: ["3200", "3,200", "tres mil doscientos"],
      difficulty: "medio",
      hint: "El número 3 pequeño y positivo significa que debes mover el punto decimal 3 lugares a la derecha, rellenando con ceros.",
      explanation: "Paso 1: Escribe el número base: 3.2.\nPaso 2: Observa el exponente del 10, que es 3 positivo. Esto significa multiplicar por 1000.\nPaso 3: Mueve el punto decimal 3 lugares a la derecha: un lugar salta el 2 (queda 32), y los otros dos lugares se rellenan con ceros (3200)."
    },
    {
      id: "fis-09",
      subject: "fisica",
      topic: "Notación científica",
      question: "Expresa 0.000078 en notación científica.",
      answers: ["7.8 x 10^-5", "7.8e-5", "7.8x10^-5", "7.8 * 10^-5", "7.8x10-5"],
      difficulty: "medio",
      hint: "Mueve el punto hacia la derecha hasta que quede un solo número entero (el 7). Cuenta cuántos lugares moviste el punto; ese será tu exponente negativo.",
      explanation: "Paso 1: Identifica el primer dígito diferente de cero, que es el 7.\nPaso 2: Mueve el punto decimal para que quede justo después del 7, haciendo el número 7.8.\nPaso 3: Cuenta cuántos saltos dio el punto: pasó por 4 ceros y el 7, o sea, 5 lugares.\nPaso 4: Como el número original era un decimal pequeño, el exponente es negativo. El resultado es 7.8 x 10^-5."
    },
    {
      id: "fis-10",
      subject: "fisica",
      topic: "Magnitudes y clasificación",
      question: "A diferencia de una magnitud escalar, una magnitud vectorial necesita indicar:",
      answers: ["Dirección y sentido", "Direccion y sentido", "Sentido y dirección", "Dirección, sentido y punto de aplicación"],
      difficulty: "medio",
      hint: "Piensa en la diferencia entre decir 'peso 70 kg' (escalar) y 'aplica una fuerza de 10 Newtons' (vectorial). ¿Qué te falta saber de la fuerza?",
      explanation: "Paso 1: Una magnitud escalar solo necesita un número y una unidad (ej. 20 grados Celsius).\nPaso 2: Una magnitud vectorial (como una fuerza o la velocidad) no está completa solo con el número.\nPaso 3: Necesitas saber hacia dónde se aplica (dirección, como un ángulo) y hacia qué lado (sentido, como norte o sur)."
    },
    {
      id: "fis-11",
      subject: "fisica",
      topic: "Fenómenos físicos",
      question: "¿Cuál de los siguientes es un ejemplo de fenómeno físico?",
      answers: ["Evaporación del agua", "La evaporación del agua", "Evaporacion del agua"],
      difficulty: "facil",
      options: ["Quemar un trozo de madera.", "Oxidación de un clavo.", "Evaporación del agua.", "Digestión de una manzana."],
      hint: "Busca la opción donde la sustancia cambie de forma o estado, pero NO deje de ser lo que era originamente.",
      explanation: "Paso 1: Quemar, oxidar y digerir son procesos donde la materia original se transforma en otra cosa (fenómenos químicos).\nPaso 2: Cuando el agua se evapora, pasa de estado líquido a gaseoso, pero sus moléculas siguen siendo H2O.\nPaso 3: Como no hay cambio en su estructura íntima, la evaporación es un fenómeno físico."
    },
    {
      id: "fis-12",
      subject: "fisica",
      topic: "Conversiones",
      question: "Para convertir grados Celsius a Kelvin, la fórmula correcta es:",
      answers: ["K = °C + 273.15", "K=C+273.15", "K = C + 273.15", "K = °C + 273", "K = C + 273"],
      difficulty: "medio",
      hint: "Para pasar a la escala Kelvin (absoluta) siempre se le SUMA un número específico a los grados Celsius.",
      explanation: "Paso 1: Comprende que la escala Kelvin empieza en el Cero Absoluto, que equivale a -273.15 °C.\nPaso 2: Para alinear las dos escalas, basta con compensar esa diferencia.\nPaso 3: Por lo tanto, tomas los grados Celsius y le sumas 273.15 (o 273 en su forma redondeada)."
    },
    {
      id: "fis-13",
      subject: "fisica",
      topic: "Conversiones",
      question: "Convierte 2 horas a segundos.",
      answers: ["7200", "7200 s", "7,200", "7200 segundos"],
      difficulty: "facil",
      options: ["120", "3600", "7200", "14400"],
      hint: "Calcula primero cuántos segundos hay en 1 hora multiplicando los minutos (60) por los segundos de cada minuto (60). Luego multiplícalo por 2.",
      explanation: "Paso 1: Convierte horas a minutos. En 2 horas hay 2 * 60 = 120 minutos.\nPaso 2: Convierte esos minutos a segundos. Si cada minuto tiene 60 segundos, multiplicas 120 * 60.\nPaso 3: 120 * 60 = 7200 segundos."
    },
    {
      id: "fis-14",
      subject: "fisica",
      topic: "Despejes",
      question: "En la ecuación de densidad (d = m/v), si se desea calcular el volumen (v), ¿cómo queda la fórmula despejada?",
      answers: ["v = m/d", "m/d", "v=m/d", "v= m/d", "volumen = masa / densidad"],
      difficulty: "dificil",
      hint: "El volumen está dividiendo, pásalo al otro lado multiplicando a la 'd'. Luego, la 'd' te estorba, pásala dividiendo.",
      explanation: "Paso 1: Tienes d = m / v. El objetivo es dejar a la 'v' sola y arriba.\nPaso 2: Primero, pasa la 'v' multiplicando al lado izquierdo: d * v = m.\nPaso 3: Ahora, para dejar a la 'v' sola, pasa la 'd' (que está multiplicando) dividiendo al lado derecho: v = m / d."
    },
    {
      id: "fis-15",
      subject: "fisica",
      topic: "Despejes",
      question: "En la fórmula de peso (P = m*g), despeja la masa (m).",
      answers: ["m = P/g", "P/g", "m=P/g", "masa = peso / gravedad"],
      difficulty: "medio",
      hint: "Solo tienes que quitar la 'g' que está multiplicando a la masa y pasarla al otro lado de la igualdad con la operación contraria.",
      explanation: "Paso 1: Tienes la ecuación P = m * g y quieres dejar la 'm' sola.\nPaso 2: La gravedad 'g' le está estorbando a la 'm' mediante una multiplicación.\nPaso 3: Pasa la 'g' al otro lado con la operación contraria (división). Queda m = P / g."
    }
  ],

  quimica: [
    {
      id: "qui-01",
      subject: "quimica",
      topic: "Ácidos y bases",
      question: "Según la teoría de Arrhenius, un ácido es una sustancia que en solución acuosa libera iones:",
      answers: ["Hidrógeno", "H+", "Iones hidrógeno", "Hidrogeno (H+)", "Hidrógeno (H+)"],
      difficulty: "dificil",
      hint: "Piensa en el primer elemento de la tabla periódica. Los ácidos siempre lo sueltan cuando se mezclan con agua.",
      explanation: "Paso 1: Svante Arrhenius postuló una de las primeras teorías sobre ácidos y bases.\nPaso 2: Él descubrió que todas las sustancias ácidas (como el HCl o H2SO4) tienen algo en común al disolverse en agua.\nPaso 3: Se disocian y aumentan la concentración de protones o iones de Hidrógeno con carga positiva (H+)."
    },
    {
      id: "qui-02",
      subject: "quimica",
      topic: "Alimentación y salud",
      question: "Nutrientes responsables principalmente del crecimiento, reparación de tejidos y formación de enzimas:",
      answers: ["Proteínas", "Proteinas", "Las proteínas"],
      difficulty: "facil",
      options: ["Carbohidratos", "Lípidos", "Proteínas", "Sales minerales"],
      hint: "Son las moléculas que los fisicoculturistas consumen mucho para que sus músculos crezcan y se reparen después de entrenar.",
      explanation: "Paso 1: Los carbohidratos dan energía rápida, y los lípidos (grasas) almacenan energía a largo plazo.\nPaso 2: Las proteínas, hechas de cadenas de aminoácidos, son como los 'ladrillos' del cuerpo.\nPaso 3: Se encargan de construir masa muscular, reparar daños celulares y crear enzimas y hormonas."
    },
    {
      id: "qui-03",
      subject: "quimica",
      topic: "Concentración de contaminantes",
      question: "Si la concentración máxima permitida de plomo en el agua es de 0.01 ppm, ¿qué significa 'ppm'?",
      answers: ["Partes por millón", "Partes de soluto por cada millón de partes de disolución", "Partes por millon"],
      difficulty: "medio",
      hint: "Es una unidad que se usa cuando el porcentaje (%) queda demasiado grande. Indica cuántas partes de algo hay en un millón del total.",
      explanation: "Paso 1: Analiza las iniciales: P, P, M.\nPaso 2: P significa Partes, P significa Por, y M significa Millón.\nPaso 3: Se utiliza en química para medir trazas o cantidades microscópicas de una sustancia (soluto) dentro de una mezcla inmensamente más grande."
    },
    {
      id: "qui-04",
      subject: "quimica",
      topic: "Mezclas",
      question: "Una ensalada mixta o el agua con aceite son ejemplos clásicos de mezclas:",
      answers: ["Heterogéneas", "Mezclas heterogéneas", "Heterogeneas"],
      difficulty: "facil",
      options: ["Homogéneas", "Compuestos puros", "Heterogéneas", "Elementos"],
      hint: "Usa el prefijo 'hetero' que significa diferente. En estas mezclas puedes ver los componentes separados a simple vista.",
      explanation: "Paso 1: Las mezclas homogéneas (como agua con azúcar) se ven como una sola cosa, no puedes distinguir las partes.\nPaso 2: En una ensalada o agua con aceite, las diferentes fases y componentes son claramente visibles.\nPaso 3: Esta característica visual de múltiples fases se denomina mezcla heterogénea."
    },
    {
      id: "qui-05",
      subject: "quimica",
      topic: "Métodos de separación de mezclas",
      question: "¿Qué método se utiliza para separar líquidos no miscibles (que no se mezclan) de diferentes densidades, como el agua y el aceite?",
      answers: ["Decantación", "Decantacion", "Método de decantación"],
      difficulty: "medio",
      hint: "Es un proceso que usa la gravedad. Dejas reposar la mezcla en un embudo y abres una llave para dejar caer solo el líquido más pesado.",
      explanation: "Paso 1: Como el agua y el aceite no se mezclan, forman dos capas debido a su densidad.\nPaso 2: La filtración no sirve porque ambos son líquidos y pasarían el filtro.\nPaso 3: La decantación usa la gravedad; al dejar reposar, el líquido más pesado se va al fondo y se puede drenar mecánicamente."
    },
    {
      id: "qui-06",
      subject: "quimica",
      topic: "Enlaces químicos",
      question: "En este tipo de enlace, un átomo cede electrones a otro, formándose cargas positivas y negativas que se atraen electrostáticamente:",
      answers: ["Enlace iónico", "Iónico", "Ionico"],
      difficulty: "medio",
      hint: "Como los átomos ganan o pierden electrones, se convierten en 'iones'. Por eso el enlace lleva ese nombre.",
      explanation: "Paso 1: En los enlaces covalentes, los átomos COMPARTEN electrones. Aquí no ocurre eso.\nPaso 2: En este enlace, un átomo roba o cede completamente un electrón, creando partículas con carga (iones positivos y negativos).\nPaso 3: Como cargas opuestas se atraen como imanes, la fuerte unión resultante se llama enlace iónico."
    },
    {
      id: "qui-07",
      subject: "quimica",
      topic: "Modelos atómicos",
      question: "Modelo atómico que comparó al átomo con un 'pudín de pasas', donde la masa era positiva y los electrones estaban incrustados:",
      answers: ["Modelo de Thomson", "Thomson", "Modelo de J.J. Thomson"],
      difficulty: "facil",
      options: ["Modelo de Dalton", "Modelo de Rutherford", "Modelo de Bohr", "Modelo de Thomson"],
      hint: "Fue propuesto por el científico que descubrió el electrón, mucho antes de que se descubriera el núcleo del átomo.",
      explanation: "Paso 1: Dalton creía que el átomo era una esfera sólida e indivisible.\nPaso 2: En 1904, J.J. Thomson descubrió electrones de carga negativa.\nPaso 3: Al no saber del núcleo aún, propuso que el átomo era una masa gelatinosa positiva (el pudín) con los electrones pegados adentro (las pasas)."
    },
    {
      id: "qui-08",
      subject: "quimica",
      topic: "Definición de átomo",
      question: "La palabra 'átomo' proviene del griego y significa:",
      answers: ["Indivisible", "Que no se puede dividir", "Sin división", "No divisible"],
      difficulty: "facil",
      options: ["Materia pura", "Energía", "Indivisible", "Partícula pequeña"],
      hint: "Los antiguos griegos creían que si partías algo a la mitad infinitas veces, llegarías a un punto donde ya NO se podría dividir más.",
      explanation: "Paso 1: Analiza la etimología de la palabra. En griego antiguo, el prefijo 'a-' significa 'sin'.\nPaso 2: La raíz 'tomo' significa 'corte' o 'división'.\nPaso 3: Juntando ambas partes, átomo significa literalmente 'sin corte' o 'indivisible'."
    },
    {
      id: "qui-09",
      subject: "quimica",
      topic: "Tabla periódica",
      question: "Las filas horizontales en la tabla periódica se conocen como:",
      answers: ["Periodos", "Los periodos"],
      difficulty: "facil",
      options: ["Familias", "Grupos", "Bloques", "Periodos"],
      hint: "Las columnas verticales son los Grupos o Familias, las líneas horizontales indican los niveles de energía y llevan este otro nombre.",
      explanation: "Paso 1: La tabla periódica se organiza en una cuadrícula.\nPaso 2: Las columnas verticales (hacia abajo) se llaman Grupos o Familias.\nPaso 3: Las 7 filas horizontales (de izquierda a derecha) representan la cantidad de capas de electrones del átomo y se denominan Periodos."
    },
    {
      id: "qui-10",
      subject: "quimica",
      topic: "Partículas subatómicas",
      question: "Partícula subatómica sin carga eléctrica que se encuentra en el núcleo atómico:",
      answers: ["Neutrón", "Neutron", "Los neutrones", "Neutrones"],
      difficulty: "facil",
      options: ["Electrón", "Protón", "Neutrón", "Positrón"],
      hint: "Su nombre te dice que su carga es 'neutra'.",
      explanation: "Paso 1: El electrón tiene carga negativa y orbita fuera del núcleo.\nPaso 2: El protón tiene carga positiva y está en el núcleo.\nPaso 3: La partícula que comparte el núcleo con el protón, y cuya carga eléctrica es cero, es el neutrón."
    },
    {
      id: "qui-11",
      subject: "quimica",
      topic: "Partículas subatómicas",
      question: "El número atómico (Z) de un elemento indica exactamente la cantidad de:",
      answers: ["Protones", "Protones en el núcleo", "Número de protones", "Numero de protones"],
      difficulty: "medio",
      hint: "Es la partícula positiva. Esta cantidad es como el 'ADN' o la huella digital del elemento; no puede cambiar.",
      explanation: "Paso 1: El número atómico (Z) es el número que ordena a los elementos en la tabla periódica.\nPaso 2: Los electrones se pueden ganar o perder (formando iones), los neutrones pueden variar (formando isótopos).\nPaso 3: Lo único que define inmutablemente qué elemento es, es el número de protones en su núcleo."
    },
    {
      id: "qui-12",
      subject: "quimica",
      topic: "Propiedades de la materia",
      question: "Estado de agregación de la materia donde las partículas están muy separadas y se mueven libremente, ocupando todo el volumen del recipiente:",
      answers: ["Gaseoso", "Gas", "Estado gaseoso"],
      difficulty: "facil",
      options: ["Sólido", "Líquido", "Gaseoso", "Plasma"],
      hint: "Piensa en el aire de un globo; las partículas chocan entre sí y llenan cada rincón.",
      explanation: "Paso 1: En los sólidos, las partículas están muy unidas y apenas vibran. Tienen forma fija.\nPaso 2: En los líquidos, se mueven un poco más y se adaptan a la forma del recipiente, pero mantienen su volumen.\nPaso 3: En los gases, la fuerza de repulsión es altísima; las partículas escapan en todas direcciones hasta llenar completamente cualquier contenedor."
    },
    {
      id: "qui-13",
      subject: "quimica",
      topic: "Balanceo de ecuaciones",
      question: "¿Cuál es el propósito fundamental de balancear una ecuación química?",
      answers: ["Cumplir la ley de la conservación de la materia", "Conservación de la materia", "Conservacion de la masa", "Cumplir la ley de la conservacion de la masa", "Ley de la conservación de la materia"],
      difficulty: "medio",
      hint: "Se balancea para comprobar la ley de Lavoisier: lo que entra, tiene que salir.",
      explanation: "Paso 1: En una reacción química, los átomos no se destruyen ni aparecen por arte de magia, solo se reordenan.\nPaso 2: Si en los reactivos tienes 4 oxígenos, obligatoriamente debes tener 4 en los productos.\nPaso 3: Balanceamos agregando coeficientes para demostrar y cumplir matemáticamente con la Ley de la Conservación de la Materia."
    },
    {
      id: "qui-14",
      subject: "quimica",
      topic: "Balanceo de ecuaciones",
      question: "Al balancear N2 + H2 -> NH3, ¿cuáles son los coeficientes correctos de izquierda a derecha? (Separados por comas)",
      answers: ["1,3,2", "1, 3, 2", "1, 3, 2 ", "1,3,2,"],
      difficulty: "dificil",
      hint: "Empieza igualando los Nitrógenos poniendo un 2 al final. Luego calcula cuántos Hidrógenos te quedaron y ajusta en la izquierda.",
      explanation: "Paso 1: Tienes N2 (2 nitrógenos) en la izquierda y NH3 (1 nitrógeno) a la derecha. Pon un 2 al NH3: N2 + H2 -> 2NH3.\nPaso 2: Ahora a la derecha tienes 2x3 = 6 Hidrógenos.\nPaso 3: Para tener 6 Hidrógenos a la izquierda, debes poner un 3 al H2: N2 + 3H2 -> 2NH3.\nPaso 4: Los coeficientes finales invisibles equivalen a 1, dando como resultado 1, 3, 2."
    },
    {
      id: "qui-15",
      subject: "quimica",
      topic: "Ley de la conservación de la materia",
      question: "En una reacción química, la masa total de los reactivos debe ser _______ a la masa total de los productos.",
      answers: ["Igual", "Iguales", "La misma", "Exactamente igual"],
      difficulty: "facil",
      options: ["Mayor", "Menor", "Igual", "El doble"],
      hint: "Piensa en un rompecabezas. Si lo desarmas y armas otra figura, las piezas siguen pesando lo mismo en conjunto.",
      explanation: "Paso 1: Identifica lo que dicta la Ley de la Conservación de la Masa de Lavoisier.\nPaso 2: 'La materia no se crea ni se destruye, solo se transforma'.\nPaso 3: Por lógica, si pesas todas las sustancias antes de mezclarlas (reactivos) y luego pesas las sustancias resultantes (productos), el valor debe ser matemáticamente igual."
    }
  ]
};