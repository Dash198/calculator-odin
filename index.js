function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

let a=0, b=0;
let op='';

function operate(a,op,b){
    let result=0;
    switch(op){
        case '+':
            result = add(a,b);
            break;

        case '-':
            result = subtract(a,b);
            break;
        
        case '*':
            result = multiply(a,b);
            break;

        case '/':
            result = divide(a,b);
            break;
    }

    return result;
}

function addToDisplay(c){
    if(display.textContent=='0')
        display.textContent=c;
    else
        display.textContent+=c;
}

function evaluateExp(){
    let S = display.textContent.trim();
    let exp = S.split(' ').filter(e=>e);
    console.log("yes");
    while(exp.length>1){
        for(let i=1; i<exp.length; i+=2){
            if(exp[i]=='/' || exp[i]=='*'){
                let result = operate(parseFloat(exp[i-1]),exp[i], parseFloat(exp[i+1]));
                exp.splice(i-1,3,result);
                i-=2;
            }
        }
        
        for(let i=1; i<exp.length; i+=2){
            if(exp[i]=='+' || exp[i]=='-'){
                let result = operate(parseFloat(exp[i-1]),exp[i], parseFloat(exp[i+1]));
                exp.splice(i-1,3,result);
                i-=2;
            }
        }
        
    }
    display.textContent=exp[0];
}

const display = document.querySelector(".display");
display.textContent="0";