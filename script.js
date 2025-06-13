const display = document.getElementById('display');

function appendNumber(num) {
  if (display.innerText === '0') {
    display.innerText = num;
  } else {
    display.innerText += num;
  }
}
function appendOperator(op){
  const lastChar = display.innerText.slice(-1);
  if('+-*/%'.includes(lastChar)){
    display.innerText=innerText.slice(0,-1)+op;
  }else{
    display.innerText+=op;
  }
}
function clearDisplay(){
  display.innerText='0';
}
