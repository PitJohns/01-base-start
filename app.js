let num  = 42; // number
let firstName = 'Vladilen'; //string
const isProgrammer = true; //boolean

firstName = 'Max';
//isProgrammer = false; // error комментарий
/* коммментарий
многострочный */

/* Can Do 
let $ = 'test';
let $num = 42;
let num$  = 42;
let _ = 49;
let _num = 12;
let num_ = 12;
let first_name = 'Elena'; //bad
let myNum = 34; // good
let num42 = 10; 
*/

/* Restricted 
let 42num = '11' 
let my-num = 1 
let const 
*/

// first 
//ffsf 

//alert(firstName);

//console.log('Test:', num, isProgrammer);
/*
console.log(num + 10);
console.log(num - 10);
console.log(num * 10);
console.log(num / 10);
console.log(num); */

/*let num2 = num + 10; 
console.log(num, num2);
num = num2 - num;
num2 = num2 +1;
console.log(num, num2);*/

/*let num3 = (num + 10) * 2 / 3 -1 ;
console.log(num3);*/

/*const fullName = firstName + ' ' + 'Minin';
console.log(fullName); */

const resultElement = document.getElementById('result');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2'); 
const submitBtn = document.getElementById('submit');
const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');
var operator; 




//console.log(resultElement.textContent);
//resultElement.textContent = (42 - 2) / num; 

//const sum = Number(input1.value) + Number(input2.value);
//resultElement.textContent = sum;
//console.log(typeof sum);

/*submitBtn.onclick = function () {
    //console.log('Hello click!')
    resultElement.textContent = sum;
};*/

plusBtn.onclick = function () {
     operator = 1;
};

minusBtn.onclick = function () {
     operator = 0;
}; 

function printResult(result) {
    if (result < 0) {
        resultElement.style.color = 'red'
    } else resultElement.style.color = 'green';
    resultElement.textContent = result;
}; 

function computeNumbersWithAction(inp1, inp2, actionSymbol) {
    const num1 = Number(inp1.value);
    const num2 = Number(inp2.value);
    if (actionSymbol == '+') {
      return num1 + num2; 
    } 
    if (actionSymbol == '-') {
       return  num1 - num2; 
    }  
};

submitBtn.onclick = function () {
  const result = computeNumbersWithAction(input1, input2, action) {
  printResult(result);
  }; 
   /* if (operator == 1) {
        const sum = Number(input1.value) + Number(input2.value);
        printResult(sum);
    } else {
        const sum = Number(input1.value) - Number(input2.value);
        printResult(sum);
    };*/
};    