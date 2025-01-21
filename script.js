// Display reference
const display = document.getElementById('display');

// Append symbol or number to the display
function appendSymbol(symbol) {
  display.value += symbol;
}

// Clear the display
function clearDisplay() {
  display.value = '';
}

// Delete last character
function deleteChar() {
  display.value = display.value.slice(0, -1);
}
function appendPower() {
    display.value += '**'; 
  }

// Calculate the result
function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
}
