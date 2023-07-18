// analyzer.js
const analyzer = {  
  getWordCount: (text) => {
    if (!text.trim()) {
      return 0;
    }
    return text.trim().split(/\s+/).length;
  },
  getCharacterCount: (text) => {
    return text.length;
  },
  getCharacterCountExcludingSpaces: (text) => {
    return text.replace(/\s/g, '').length;
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
    return numbers ? numbers.length : 0;
  },
  getNumberSum: (text) => {
    // Obtener una lista de números del texto usando expresiones regulares
    const numbers = text.match(/\b\d+(\.\d+)?\b/g);

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