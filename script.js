const textInput = document.getElementById('textInput');
const generateButton = document.getElementById('generateButton');
const clearButton = document.getElementById('clearButton');
const loveMessage = document.getElementById('loveMessage');

generateButton.addEventListener('click', () => {
  const inputText = textInput.value;
  const outputText = "I love you always!";
  
  loveMessage.textContent = inputText ? outputText : '';
});

clearButton.addEventListener('click', () => {
  textInput.value = '';
  loveMessage.textContent = '';
});
