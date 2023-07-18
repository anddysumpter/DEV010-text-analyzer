import analyzer from './analyzer.js';

const textarea = document.querySelector('textarea');
const metricsList = document.querySelector('ul.all');
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

  metricsList.querySelector('[data-testid="word-count"]').textContent = `Palabras: ${wordCount}`;
  metricsList.querySelector('[data-testid="character-count"]').textContent = `Caracteres: ${characterCount}`;
  metricsList.querySelector('[data-testid="character-no-spaces-count"]').textContent = `Caracteres sin espacios: ${characterCountExcludingSpaces}`;
  metricsList.querySelector('[data-testid="number-count"]').textContent = `Números: ${numberCount}`;
  metricsList.querySelector('[data-testid="number-sum"]').textContent = `Suma de números: ${numberSum}`;
  metricsList.querySelector('[data-testid="word-length-average"]').textContent = `Promedio longitud: ${averageWordLength.toFixed(2)}`;
}

function resetMetrics() {
  metricsList.querySelector('[data-testid="word-count"]').textContent = 'Palabras: 0';
  metricsList.querySelector('[data-testid="character-count"]').textContent = 'Caracteres: 0';
  metricsList.querySelector('[data-testid="character-no-spaces-count"]').textContent = 'Caracteres sin espacios: 0';
  metricsList.querySelector('[data-testid="number-count"]').textContent = 'Números: 0';
  metricsList.querySelector('[data-testid="number-sum"]').textContent = 'Suma de números: 0';
  metricsList.querySelector('[data-testid="word-length-average"]').textContent = 'Promedio longitud: 0';
}

function clearInputText() {
  textarea.value = '';
  resetMetrics();
}