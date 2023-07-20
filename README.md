# Analizador de texto

## 1. Visualización del Proyecto

* Proyecto.
![Analizador de texto](<Analizador de Texto.jpg>)


## 2. HTML semántico
* El archivo HTML tiene una estructura básica con etiquetas <html>, <head>, y <body>.
* Se incluye una hoja de estilos externa (style.css) utilizando la etiqueta <link>.
* La sección <header> contiene un título principal <h1> que indica el propósito de la página.
* Después del <header>, hay un <h2> que proporciona instrucciones a los usuarios para ingresar el texto que desean analizar en el área de texto (<textarea>).
* A continuación, se define un elemento <ul> con la clase "all". 
* Dentro de este elemento, hay seis elementos <li> con la clase "box", cada uno con un atributo data-testid que se utilizará para actualizar los resultados del análisis posteriormente.
* Luego se encuentra un botón con el id "reset-button", que se utilizará para limpiar el contenido del área de texto y restablecer los resultados del análisis.
* Finalmente, se incluyen dos scripts: "analyzer.js" y "index.js" con el atributo type="module", lo que permite la importación y exportación de módulos JavaScript.

## 3. CSS

Estilos generales:

* body: Establece la fuente (Arial, sans-serif) y el tamaño de línea (1.6) para el contenido de la página. También elimina el margen y el relleno predeterminado y establece un color de fondo (#f9f9f9).
Estilos del encabezado (header y h1):

* header: Establece el fondo (#333) y el color del texto (#fff) para el encabezado. También alinea el texto al centro y agrega un relleno de 10px en la parte superior e inferior.
h1: Elimina el margen predeterminado para asegurarse de que el título del encabezado esté alineado correctamente.
Estilos del subtítulo (h2):

* h2: Alinea el texto al centro.
Estilos del área de texto (textarea):

* textarea: Hace que el área de texto se muestre como un bloque para ocupar todo el ancho disponible. Establece márgenes automático para centrarlo horizontalmente. También define un ancho del 80% con un ancho mínimo de 300px y un ancho máximo de 800px. Se establece un relleno de 10px y un tamaño de fuente de 16px. Además, permite el redimensionamiento vertical para que el usuario pueda ajustar la altura del área de texto.
Estilos de la lista de métricas (ul.all y li.box):

* ul.all: Establece la lista para no mostrar viñetas y elimina el margen, relleno y decoración de la lista. El ancho se ajusta al contenido, y el texto se alinea a la izquierda.
li.box: Agrega un margen inferior de 10px y un relleno de 10px a cada elemento de la lista. Se establece un borde blanco de 1px alrededor de cada elemento, creando una caja para cada métrica. Se utiliza la fuente Helvetica, Arial o sans-serif. El fondo se define como #f1f1f1 y el color de texto como #333.
Estilos del botón de reinicio (#reset-button):

* #reset-button: Establece el cursor del mouse como "pointer" para indicar que el botón es interactivo. Se elimina el borde, lo que da una apariencia plana al botón. El botón se muestra como bloque, lo que permite que ocupe todo el ancho disponible y se centra horizontalmente con márgenes automáticos. El tamaño de fuente es de 24px y el texto está en negrita. Se establece una posición relativa para permitir la superposición de elementos secundarios. El borde se redondea con un radio de 12px, y el fondo tiene un degradado lineal de 45 grados que va de rojo a azul y luego a blanco y se repite. Además, se define una animación llamada "glowing" que se aplicará al botón con una duración de 20 segundos, movimiento lineal e infinita repetición. Por último, se establece la fuente como Consolas o monospace.
Estilos del efecto de resplandor (#reset-button::before):

* #reset-button::before: Crea un pseudo-elemento ::before que se superpondrá al botón de reinicio. El pseudo-elemento ocupa todo el espacio disponible con un fondo degradado lineal similar al del botón. La propiedad filter: blur(8px) aplica un desenfoque a este pseudo-elemento. También se aplica la misma animación "glowing" para que el resplandor aparezca en el fondo del botón. El z-index se establece en -1 para que el pseudo-elemento esté detrás del botón principal.


## 4. Index.js

* Importación del módulo analyzer: Se importa el módulo analyzer que contiene todas las funciones relacionadas con el análisis de texto. Esto permite utilizar las funciones definidas en el módulo para realizar el análisis del texto ingresado por el usuario.

* Selección de elementos del DOM:

* const textarea: Se selecciona el elemento textarea del DOM usando document.querySelector('textarea'). Este elemento representa el área de texto donde el usuario ingresará su texto para ser analizado.
* const metricsList: Se selecciona el elemento ul.all del DOM usando document.querySelector('ul.all'). Este elemento representa la lista de métricas donde se mostrarán los resultados del análisis.
* const resetButton: Se selecciona el elemento con el id "reset-button" del DOM usando document.getElementById('reset-button'). Este elemento representa el botón de reinicio que permitirá borrar el contenido del área de texto y restablecer las métricas a cero.

* Event Listeners:

* textarea.addEventListener('keyup', updateMetrics): Se agrega un evento de escucha al área de texto que escuchará el evento de keyup (cuando se suelta una tecla) y llamará a la función updateMetrics. Esto significa que cada vez que el usuario escriba o modifique el contenido del área de texto, se actualizarán las métricas en la lista.
* resetButton.addEventListener('click', clearInputText): Se agrega un evento de escucha al botón de reinicio que escuchará el evento de click (cuando se hace clic en el botón) y llamará a la función clearInputText. Esto permitirá que el usuario borre el contenido del área de texto y restablezca las métricas haciendo clic en el botón.

* Función updateMetrics():

Esta función se ejecuta cada vez que el usuario escribe o modifica el contenido del área de texto.
Primero, se obtiene el texto ingresado por el usuario del área de texto usando textarea.value.
Luego, se verifica si el texto está vacío o solo contiene espacios en blanco usando if (!text.trim()). Si es así, significa que el usuario no ha ingresado ningún texto, por lo que se llama a la función resetMetrics() para restablecer todas las métricas a cero y se sale de la función usando return.
Si el texto no está vacío, se procede a calcular todas las métricas utilizando las funciones del módulo analyzer.
Finalmente, se actualiza el contenido de la lista de métricas en el DOM con los valores calculados.
* Función resetMetrics():

Esta función restablece todas las métricas en la lista a cero.
Selecciona cada elemento de la lista de métricas usando metricsList.querySelector('[data-testid="..."]') y actualiza su contenido con una cadena que indica que el valor de la métrica es cero.
* Función clearInputText():

Esta función se ejecuta cuando el usuario hace clic en el botón de reinicio.
Establece el valor del área de texto (textarea.value) como una cadena vacía, lo que borra todo el contenido del área de texto.
Luego, llama a la función resetMetrics() para restablecer todas las métricas a cero y actualizar el contenido de la lista de métricas en el DOM.


## 5. Analyzer.js

* Objeto analyzer: El archivo define un objeto llamado analyzer que contiene varias funciones para realizar el análisis de texto.

* Función getWordCount(text):

Esta función recibe un parámetro text, que es el texto que se va a analizar.
Primero, se verifica si el texto está vacío o solo contiene espacios en blanco usando if (!text.trim()). Si es así, significa que el texto no contiene palabras, por lo que se retorna 0.
Si el texto no está vacío, se elimina cualquier espacio en blanco adicional al inicio y al final del texto utilizando text.trim().
Luego, se divide el texto en palabras utilizando la función split(/\s+/), que usa una expresión regular para separar el texto en base a uno o más espacios en blanco.
Finalmente, se retorna la longitud del array resultante, que representa la cantidad de palabras en el texto.
* Función getCharacterCount(text):

Esta función recibe un parámetro text, que es el texto que se va a analizar.
Simplemente retorna la longitud del texto, lo que representa la cantidad total de caracteres en el texto, incluyendo espacios en blanco, signos de puntuación y otros caracteres.
* Función getCharacterCountExcludingSpaces(text):

Esta función recibe un parámetro text, que es el texto que se va a analizar.
Utiliza expresiones regulares para eliminar todos los caracteres que no sean letras y números (es decir, excluyendo espacios en blanco, signos de puntuación y otros caracteres especiales) del texto.
Luego, cuenta la cantidad de caracteres que quedan en el texto y retorna este valor, que representa la cantidad de caracteres excluyendo espacios y signos de puntuación.
* Función getAverageWordLength(text):

Esta función recibe un parámetro text, que es el texto que se va a analizar.
Divide el texto en palabras utilizando la función split(" "), que separa el texto en base a los espacios en blanco, considerando cada palabra y número como un elemento en un array llamado wordL.
Luego, se inicia una variable lengthTotal en cero, que se utilizará para almacenar la suma de las longitudes de todas las palabras en el texto.
Se realiza un bucle for para iterar sobre cada elemento en el array wordL, y se suma la longitud de cada palabra a la variable lengthTotal.
Luego, se calcula el promedio de la longitud de las palabras dividiendo la suma total (lengthTotal) entre la cantidad de palabras en el texto (wordL.length).
El resultado del promedio se redondea a dos decimales utilizando toFixed(2).
Finalmente, se convierte el resultado en un número utilizando Number() y se retorna el promedio de la longitud de las palabras.
* Función getNumberCount(text):

Esta función recibe un parámetro text, que es el texto que se va a analizar.
Utiliza una expresión regular para encontrar todos los números (incluyendo números decimales) en el texto, y los almacena en un array llamado numbers.
Retorna la cantidad de números encontrados, que es la longitud del array numbers, representando así la cantidad de números en el texto.
* Función getNumberSum(text):

Esta función recibe un parámetro text, que es el texto que se va a analizar.
Utiliza una expresión regular para encontrar todos los números (incluyendo números decimales) en el texto, y los almacena en un array llamado numbers.
Si no se encuentran números en el texto, la función retorna 0.
Si se encuentran números en el texto, se utiliza la función reduce para sumar todos los números del array numbers.
Retorna el resultado de la suma, que representa la suma de todos los números encontrados en el texto.