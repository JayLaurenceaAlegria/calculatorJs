// btn Selector
const btnAC = document.querySelector('.btnAC');
const btnSign = document.querySelector('.btnSign');
const btnDel = document.querySelector('.btnDel');
const btnDiv = document.querySelector('.btnDiv');
const btnMul = document.querySelector('.btnMul');
const btnMinus = document.querySelector('.btnMInus');
const btnAdd = document.querySelector('.btnAdd');
const btnDot = document.querySelector('.btnDot');
const btnSquare = document.querySelector('.btnSquare');
const btnEquals = document.querySelector('.btnEquals');
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const btn4 = document.querySelector('.btn4');
const btn5 = document.querySelector('.btn5');
const btn6 = document.querySelector('.btn6');
const btn7 = document.querySelector('.btn7');
const btn8 = document.querySelector('.btn8');
const btn9 = document.querySelector('.btn9');
const btn0 = document.querySelector('.btn0');
const sol = document.querySelector('.sol'); 
const res = document.querySelector('.res');
res.textContent = 0;
let calcType = ''

// add EventListener
btnAC.addEventListener('click' , () => {
    console.log('test');
    sol.textContent = '';
    res.textContent = 0;
});
btn1.addEventListener('click', () => {
    sol.textContent += 1;
})
btn2.addEventListener('click', () => {
    sol.textContent += 2;
})
btn3.addEventListener('click', () => {
    sol.textContent += 3;
})
btn4.addEventListener('click', () => {
    sol.textContent += 4;
})
btn5.addEventListener('click', () => {
    sol.textContent += 5;
})
btn6.addEventListener('click', () => {
    sol.textContent += 6;
})
btn7.addEventListener('click', () => {
    sol.textContent += 7;
})
btn8.addEventListener('click', () => {
    sol.textContent += 8;
})
btn9.addEventListener('click', () => {
    sol.textContent += 9;
})
btnAdd.addEventListener('click', () => {
    let num1 = 0;
    sol.textContent += '+'
    num1 = sol.textContent.slice(0, (sol.textContent.length-1));
    calcType = "add"
    console.log(num1)
})
btnMinus.addEventListener('click' , () => {
    sol.textContent += "-";
    calcType = "sub"
})
btnMul.addEventListener('click' , () => {
    sol.textContent += "*";
    calcType = "mul"
})
btnDiv.addEventListener('click' , () => {
    sol.textContent += "/";
    calcType = "div"
})

btnEquals.addEventListener('click' , solution);
function solution(){

}