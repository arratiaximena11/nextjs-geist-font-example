```markdown
# Plan for Educational Game on Present Simple (Retroalimentación en Inglés)

---

## Overview
Este plan describe la implementación de un juego educativo web, auto-contenido en Next.js, enfocado en la retroalimentación del presente simple para estudiantes principiantes. La interfaz se muestra en español, con un diseño moderno, tipografía clara y un esquema oscuro con acentos. Se implementarán cinco etapas progresivas que abordan conceptos básicos, conjugación, reglas de pronombres, formas negativas y un desafío final.

---

## Archivos y Cambios Dependientes

### 1. Archivo: `src/app/layout.tsx`
- **Propósito:** Establecer el diseño global y cargar estilos y fuentes.
- **Cambios:**
  - Incluir la fuente “Inter” y metadatos apropiados.
  - Aplicar un fondo oscuro coherente (e.g. `bg-slate-900`) a todo el sitio.
  - Verificar que se importe el archivo global de CSS (`globals.css`).

### 2. Archivo: `src/app/page.tsx`
- **Propósito:** Página principal que renderiza el juego.
- **Cambios:**
  - Importar y renderizar el componente `GameEngine`.
  - Agregar un encabezado (por ejemplo: "Aventura en Inglés: Reto del Presente Simple") en español.
  - Utilizar contenedores y márgenes adecuados para asegurar una visualización responsive.

### 3. Archivo: `src/app/components/GameEngine.tsx`
- **Propósito:** Gestionar la lógica del juego (estado, puntuación, progreso entre etapas).
- **Cambios:**
  - Usar `useState` para iniciar propiedades como `currentStage`, `score` y `completedStages`.
  - Implementar una función `advanceStage` que actualice el estado de la etapa actual y agregue la etapa completada.
  - Incluir un progress bar dinámico y visual feedback de puntuación.
  - Incluir manejo de errores – por ejemplo, mostrar un mensaje si se produce un estado inválido.

### 4. Etapas del Juego (Componentes en `src/app/components/stages/`)

#### a. Archivo: `Stage1.tsx`
- **Características:**
  - Preguntas de opción múltiple sobre formas verbales en presente simple.
  - Cada pregunta brinda feedback inmediato (mensaje de “Correcto” o “Incorrecto”).
  - Deshabilitar botones una vez respondida la pregunta.
- **Errores/Buenas prácticas:**
  - Validar que la respuesta seleccionada coincida exactamente con la opción correcta.
  - Evitar posibles doble clics mediante el uso de estados booleanos.

#### b. Archivo: `Stage2.tsx`
- **Características:**
  - Práctica de conjugación con entradas de texto (rellenar el espacio en blanco).
  - Entrada validada (sin espacios vacíos) y conversión a minúsculas para comparar respuestas.
  - Incluir un hint opcional (por ejemplo, "Utiliza la forma base del verbo").
- **Errores/Buenas prácticas:**
  - Deshabilitar el botón de envío si el campo está vacío.
  - Mostrar mensajes claros de error o validación en pantalla.

#### c. Archivo: `Stage3.tsx`
- **Características:**
  - Evaluación de reglas gramaticales: selección del arreglo correcto (añadir “-s” para “he/she/it” vs. sin cambio).
  - Botones con descripción de la regla y feedback visual al seleccionar.
- **Errores/Buenas prácticas:**
  - Manejar el caso de selección múltiple y evitar reseteos no intencionados.
  - Proveer comentarios adicionales en caso de respuesta incorrecta.

#### d. Archivo: `Stage4.tsx`
- **Características:**
  - Práctica de formas negativas en presente simple (completar mediante entrada de texto).
  - Mostrar un placeholder/hint en el input que indique “Type: don't/doesn't + base verb”.
  - Validar la respuesta con trim y conversión a minúsculas.
- **Errores/Buenas prácticas:**
  - Asegurar a los usuarios la consistencia en el uso de la puntuación y el formato.
  - Incluir mensajes de ayuda si el usuario se equivoca.

#### e. Archivo: `Stage5.tsx`
- **Características:**
  - Desafío final con preguntas de opción múltiple que combinan lo aprendido.
  - Cálculo de la puntuación final y asignación de una “calificación” (por ej. A+, A, B, C).
  - Botón para reiniciar el juego y comenzar nuevamente.
- **Errores/Buenas prácticas:**
  - Controlar el estado para evitar la suma doble de puntos.
  - Mostrar de forma clara el resumen de la puntuación final y la retroalimentación.

---

## Manejo de Errores y Buenas Prácticas
- Verificar entradas del usuario (campos vacíos, entradas nulas).
- Utilizar mensajes de error amigables y feedback visual (colores: verde para correctos; rojo para errores).
- Asegurar que cada componente tenga una transición suave entre estados y use clases de Tailwind CSS para consistencia visual.
- Emplear validación extra en inputs y deshabilitar funcionalidades para prevenir errores.

---

## Consideraciones UI/UX
- Diseño moderno, limpio y responsive con un tema oscuro, utilizando colores como `bg-slate-900` y acentos en morado o azul.
- Contenedores con suficientes márgenes, paddings y tipografía legible.
- Progreso visual mediante un progress bar animado que indica el avance en el juego.
- Retroalimentación inmediata en cada etapa para incentivar al usuario.

---

## Integración y Pruebas
- Integrar todos los nuevos componentes en el directorio `src/app/`.
- Probar la aplicación localmente usando `npm run dev` y verificar la interactividad de cada componente.
- Realizar pruebas manuales para los inputs, botones de avance, y feedback visual para asegurar robustez y consistencia.
- Revisar la consola del navegador y server logs para detectar posibles errores y corregirlos antes del despliegue.

---

## Resumen
- Se actualizará el layout global para soportar la interfaz de juego con un tema oscuro y tipografía moderna.
- Se creará una página principal (`page.tsx`) que renderiza el `GameEngine`.
- Se implementan cinco etapas en componentes separados con manejo de estado y retroalimentación visual.
- Cada componente incorpora validación y mensajes de error para asegurar la correcta interacción.
- Se utilizará Tailwind CSS para el estilo moderno y responsive del juego.
- Se consideran buenas prácticas de manejo de errores, validación y UI/UX coherente.
- La arquitectura es modular y fácil de ampliar para futuras mejoras y nuevas secciones.
