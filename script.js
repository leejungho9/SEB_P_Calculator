const display = document.querySelector('.display');
const buttons = document.querySelector('.calculator');
let firstNum ,operatorForAdvanced , previousNum, previousKey ;


function calculate(n1, op, n2) {
    let result = ''
    n1 = Number(n1);
    n2 = Number(n2);

    switch(op) {
        case '+' : result = n1 + n2; break;
        case '-' : result = n1 - n2; break;
        case '*' : result = n1 * n2; break;
        case '/' : result =  n1 / n2; break;
      }
    
      console.log(result)
      return String(result);
}

buttons.addEventListener('click' , function(event) {

    const target = event.target;
    const action = target.classList[0];
    const buttonsContent = target.textContent;


    if(action === 'number'){
        
        if(display.innerHTML === '0' || previousKey === 'operator') {
            display.textContent = buttonsContent;
        } else {
            display.textContent += buttonsContent;
        }

        previousKey = 'number';
    }
    if(action === 'operator') {
        firstNum = display.textContent;
        operatorForAdvanced = buttonsContent;
        
        
        previousKey = 'operator';
        console.log("연산자 눌림");
    }
    if(action === 'decimal') {

        if( display.textContent === '0' ) {
            display.textContent = "0.";
        } else if( firstNum !== '0') {
            display.textContent += "."
        } 

        previousKey = 'decimal';
        console.log("소수점 눌림");
    }

    if(action === 'clear') {
        display.textContent = '0';
        firstNum = '0';
        previousNum = '0';
        previousKey = 'clear';
        console.log("초기화 눌림");
    }
    if(action === 'result') {
        previousNum = display.innerHTML;
        display.innerHTML = calculate(firstNum, operatorForAdvanced , previousNum)
        console.log("결과 눌림");
    }

})