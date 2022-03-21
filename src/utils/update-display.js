const display = document.querySelector('#display');

export function updateDisplay({ updateValue }) {
  display.textContent = updateValue;
}
