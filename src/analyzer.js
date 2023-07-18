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
    const words = text.trim().split(/\s+/).filter(word => word !== '');
    if (words.length === 0) {
      return 0;
    }
    const totalLength = words.reduce((sum, word) => sum + word.length, 0);
    return totalLength / words.length;
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