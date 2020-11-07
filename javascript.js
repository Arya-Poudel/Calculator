let clear = false; begin = true;
let number1, number2, operate_with, nextoperator, calculated;

const result = document.getElementById('result');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const ac = document.getElementById('ac');


function operate(a,b,sign) {
	if (sign == '+') { return parseInt(a) + parseInt(b) ;}
	if (sign == '-') { return a - b ;}
	if (sign == '*') { return a * b ;}
	if (sign == '/') { return a / b ;}
	if (sign == '=') { return a;} 
}


numbers.forEach(number => number.addEventListener('click', () =>
{
	if (clear) { 
		result.textContent = '';
	}

	if (number.textContent=='.' && result.textContent.includes('.')) {
		return;
	} 
	result.textContent = result.textContent + number.textContent;
	clear = false;
}));


operators.forEach(operator => operator.addEventListener('click' , () =>
{
	clear = true;
	operate_with = nextoperator;
	nextoperator = operator.textContent;
	if ( calculated == undefined) {
		if (begin) {
			number1 = result.textContent;
			begin = false;
		} 
		else {
			number2 = result.textContent;
			calculated = operate (number1, number2, operate_with);
			result.textContent = calculated;
		}
	} 
	else {
		if (operate_with == '=' && result.textContent != calculated) {
			number1 = result.textContent;
		} 
		else {
			number1 = calculated;
		}
		number2 = result.textContent;
		console.log(number2);
		calculated = operate (number1 , number2, operate_with);
		result.textContent = calculated;
	}		
}));


ac.addEventListener('click' , () =>
{
	result.textContent = '';
	clear = false;
	begin = true;
	calculated = undefined;

});