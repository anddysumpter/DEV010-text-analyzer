// analyzer.js
const analyzer = {  
  getWordCount: (text) => {
    if (!text.trim()) {
      return 0;
    }
    return text.trim().split(/\s+/).length;//Recibe un parametro text para contar cantidad de palabras en un texto, elimina espacios con trim 
    //y usamos un split para dividir el texto en palabras para que al final retorne la cantidad de palabras encontradas
  },
  getCharacterCount: (text) => {
    return text.length; //Recibe un parametro text , el proposito es contar la cantidad total de caracteres,
    //incluyendo espacios en el texto, luego se retorna la longitud usando text.length
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    const characterCountExcludingSpaces = text.replace(/[^\w\s]|_/g, "").replace(/\s+/g, "").trim().length;
    return characterCountExcludingSpaces;//recibe un parametro text, el proposito es contar la cantidad total de caracteres
    //en el texto excluyendo los espacios y signos de puntuacion.
  },
  getAverageWordLength: (text) => {    
    const wordL = text.split(" ");//la función split separa la cadena text con el espacio (" "), cada palabra o número se convierte en elemento en el array `wordL`
    let lengthTotal = 0;//esta variable se utiliza para almacenar la suma de longitudes de las palabras
    for (let i=0; i < wordL.length; i++){//el bucle for itera sobre cada elemento en el array `wordL`
      lengthTotal += wordL[i].length;//Aqui se suma la longitud de cada palabra 
    }
    const averageWord = lengthTotal / wordL.length; //se calcula la longitud promedio de las palabras, diviendo la suma total de longitudes entre la cantidad de palabras en el texto
    const averageWordL = averageWord.toFixed(2);// con toFixed() redondeo a dos decimales el resultado
    const averageWordFinal = Number(averageWordL);//como me daba un string se utilizo la funcion `Number` para convertirlo a número
    return averageWordFinal;
    
  },
  getNumberCount: (text) => {
    const numbers = text.match(/\b\d+(\.\d+)?\b/g);
    return numbers ? numbers.length : 0;//Recibe un prametro text, el proposito es contar la cantidad de numeros presentes en el texto
    //retorna la cantidad de numeros encontrados
  },
  getNumberSum: (text) => {
    // Obtener una lista de números del texto usando expresiones regulares
    const numbers = text.match(/\b\d+(\.\d+)?\b/g);//Recibe  un parametro text, calcula la suma de todos los numeros
    //se utiliza la expresion regular ("") para encontrar los numeros en el texto  y con reduce se convierten los numeros en punto flontante  y luego se suman
    //el resutlado se retorna como la suma total de los numeros

    if (!numbers) {
      // Si no se encuentran números, se retorna 0
      return 0;
    }

    // Se utiliza .reduce para convertir los números a números de punto flotante y sumarlos
    const sum = numbers.reduce((total, number) => total + parseFloat(number), 0);

    return sum;
  },
};

export default analyzer;