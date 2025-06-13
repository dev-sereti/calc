const display = document.getElementById('display');

function appendNumber(num) {
  if (display.innerText === '0') {
    display.innerText = num;
  } else {
    display.innerText += num;
  }
}