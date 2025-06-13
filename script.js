const display=document.getElementById('dispaly');
function appendNumber(num){
    if(display.innerText==='0'){
        display.innerText=num;
    
    }else{
        display.innerText+=num;
    
    }
}