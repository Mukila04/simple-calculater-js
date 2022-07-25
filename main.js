const display1 = document.querySelector(".display1");
const display2 = document.querySelector(".display2");
const number = document.querySelectorAll(".number");
const operater = document.querySelectorAll(".operater");
const equal = document.querySelector(".equal");
const allclear = document.querySelector(".allclear");
const clear = document.querySelector(".clear");
const temp = document.querySelector(".temp");

let disp1 ='';
let disp2 = '';
let res = '';
let result = null;
let lop = '';
let lastOperat = '';
let hdot = false ;

number.forEach(number => {
    number.addEventListener("click", (e) => {
        e.preventDefault();
        if(e.target.innerText === "." && !hdot){
            hdot = true;
        }else if (e.target.innerText === "." && hdot){
            return;
        }
        disp2 += e.target.innerText;
        display2.innerText = disp2;
    })
});

operater.forEach(operater => {
    operater.addEventListener("click" ,(e) => {
         if(!disp2) result;
         hdot = false;
         const operatName = e.target.innerText;
         if(disp1 && disp2 && lastOperat){
            mathOperation();  
         }else{
            result = parseFloat(disp2);
         }
         clearVar (operatName);
         lastOperat = operatName;
    })
});

function clearVar(name = ''){
disp1 += disp2 + '' + name + '';
display1.innerText = disp1;
display2.innerText = '';
disp2 = '';
}

function mathOperation(){
    if(lastOperat === 'X'){
        result = parseFloat(result) * parseFloat(disp2);
    }else if(lastOperat === '+'){
        result = parseFloat(result) + parseFloat(disp2);
    }else if(lastOperat === '-'){
        result = parseFloat(result) - parseFloat(disp2);
    }else if(lastOperat === '/'){
        result = parseFloat(result) / parseFloat(disp2);
    }else if(lastOperat === '%'){
        result = parseFloat(result) % parseFloat(disp2);
    }
}

equal.addEventListener('click', (e) => {
    if(!disp1 || !disp2) return;
    hdot = false;
    mathOperation();
    clearVar();
    display2.innerText = result;
    disp2 = result;
    disp1 = '';
    temp.innerText = '=';
    res = '='
})

allclear.addEventListener('click', (e) => {
    display1.innerText = '0';
    display2.innerText = '0';
    disp1 = '';
    disp2 = '';
    result = '';
    temp.innerText = '';

});

clear.addEventListener('click', (e) => {
    display2.innerText = '';
    disp2 = '';
})