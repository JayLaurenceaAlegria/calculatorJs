function Calculate(num1 , num2 , calcType){
    this.num1 = num1; 
    this.num2 = num2;
    this.calcType = calcType;
}
Calculate.prototype.solution = function(){
   if (this.calcType === '+'){
       return this.num1 + this.num2;
   } else if (this.calcType === '-'){
       return this.num1 - this.num2;
   } else if (this.calcType === '*'){
       return this.num1 * this.num2;
   } else {
       return this.num1 / this.num2;
   }
}


// Button Selector
const btnAC = document.querySelector('.btnAC');
const btnSign = document.querySelector('.btnSign');
const btnDel = document.querySelector('.btnDel');
const btnDiv = document.querySelector('.btnDiv');
const btnMul = document.querySelector('.btnMul');
const btnMinus = document.querySelector('.btnMInus');
const btnAdd = document.querySelector('.btnAdd');
const btnDot = document.querySelector('.btnDot');
const btnRaised= document.querySelector('.btnRaised');
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

// event Listener
document.addEventListener('DOMContentLoaded' , function(){
    res.textContent = 0;
    addClick = 0 ;
    subClick = 0 ; 
    divClick = 0; 
    mulClick = 0;
    dotClick = 0;
// button Listener 
btn0.addEventListener('click' , () => {
    sol.textContent += 0;
})
btnAC.addEventListener('click' , () => {
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
    if (addClick == 0){
        sol.textContent += '+';
        addClick++;
    } else {
        alert('Two operator was under construction');
    }
})
btnMinus.addEventListener('click', () => {
    if (addClick == 0){
        sol.textContent += '-';
        addClick++;
    } else {
        alert('Two operator was under construction');
    }
})
btnMul.addEventListener('click', () => {
    if (addClick == 0){
        sol.textContent += '*';
        addClick++;
    } else {
        alert('Two operator was under construction');
    }
})
btnDiv.addEventListener('click', () => {
    if (addClick == 0){
        sol.textContent += '/';
        addClick++;
    } else {
        alert('Two operator was under construction');
    }
})
btnDot.addEventListener('click' , () => {
    if (dotClick == 0){
        sol.textContent += '.';
        dotClick++
    }
})
btnRaised.addEventListener('click' , () => {
    res.textContent = parseFloat(sol.textContent)*parseFloat(sol.textContent);
    sol.textContent = res.textContent;
})
btnSquare.addEventListener('click' , () => {
    res.textContent = Math.sqrt(parseFloat(sol.textContent));
    sol.textContent = res.textContent;
})
btnDel.addEventListener('click', () => {
    sol.textContent = sol.textContent.slice(0 ,sol.textContent.length-1);
})
btnEquals.addEventListener('click' , ()=>{
    addClick = 0;
    dotClick = 0;
    // add
    let num1 = parseFloat(sol.textContent.slice(0 , sol.textContent.length-1));
    let num2 = parseFloat(sol.textContent.slice(sol.textContent.indexOf('+') || sol.textContent.indexOf('-') || sol.textContent.indexOf('*') || sol.textContent.indexOf('/'), sol.textContent.length));
    let calcType = sol.textContent[sol.textContent.indexOf('+')] || sol.textContent[sol.textContent.indexOf('-')] || sol.textContent[sol.textContent.indexOf('*')] || sol.textContent[sol.textContent.indexOf('/')];

    calculate = new Calculate(num1 , num2 , calcType);
    res.textContent = calculate.solution();
    sol.textContent = calculate.solution();
    console.log(num1 , num2 , calcType);

    if(sol.textContent === "NaN") {
        sol.textContent = 'ERROR'
    }
})

});