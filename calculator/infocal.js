// Display text on the calculator screen
function appendToDisplay(value) {
    document.getElementById('display').value += value;
  }
  
  // Clear the calculator screen
  function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  // Calculate the result
  function calculate() {
    const display = document.getElementById('display');
    try {
      const result = eval(display.value);
      display.value = result;
    } catch (error) {
      display.value = 'Error';
    }
  }  