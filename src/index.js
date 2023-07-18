import analyzer from './analyzer.js';  // importa el objeto 

const textarea = document.querySelector('textarea');
const metricsList = document.querySelector('ul');
const resetButton = document.getElementById('reset-button');

textarea.addEventListener('keyup', updateMetrics);
resetButton.addEventListener('click', clearInputText);

function updateMetrics() {
  const text = textarea.value;

  
  if (!text.trim()) {
    resetMetrics();
    return;
  }

  const wordCount = analyzer.getWordCount(text);
  const characterCount = analyzer.getCharacterCount(text);
  const characterCountExcludingSpaces = analyzer.getCharacterCountExcludingSpaces(text);
  const numberCount = analyzer.getNumberCount(text);
  const numberSum = analyzer.getNumberSum(text);
  const averageWordLength = analyzer.getAverageWordLength(text);

  metricsList.querySelector('[data-testid="word-count"]').textContent = `Recuento de palabras: ${wordCount}`;
  metricsList.querySelector('[data-testid="character-count"]').textContent = `Recuento de caracteres: ${characterCount}`;
  metricsList.querySelector('[data-testid="character-no-spaces-count"]').textContent = `Recuento de caracteres (sin espacios): ${characterCountExcludingSpaces}`;
  metricsList.querySelector('[data-testid="number-count"]').textContent = `Recuento de números: ${numberCount}`;
  metricsList.querySelector('[data-testid="number-sum"]').textContent = `Suma total de números: ${numberSum}`;
  metricsList.querySelector('[data-testid="word-length-average"]').textContent = `Longitud media de palabras: ${averageWordLength.toFixed(2)}`;
}

function resetMetrics() {
  metricsList.querySelector('[data-testid="word-count"]').textContent = 'Recuento de palabras: 0';
  metricsList.querySelector('[data-testid="character-count"]').textContent = 'Recuento de caracteres: 0';
  metricsList.querySelector('[data-testid="character-no-spaces-count"]').textContent = 'Recuento de caracteres (sin espacios): 0';
  metricsList.querySelector('[data-testid="number-count"]').textContent = 'Recuento de números: 0';
  metricsList.querySelector('[data-testid="number-sum"]').textContent = 'Suma total de números: 0';
  metricsList.querySelector('[data-testid="word-length-average"]').textContent = 'Longitud media de palabras: 0';
}

function clearInputText() {
  textarea.value = '';
  resetMetrics();
}