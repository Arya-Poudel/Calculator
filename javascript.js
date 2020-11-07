function operate(a,b,sign) {
	if (sign == '+') { return parseInt(a) + parseInt(b) ;}
	if (sign == '-') { return a - b ;}
	if (sign == '*') { return a * b ;}
	if (sign == '/') { return a / b ;}
	if (sign == '=') { return a; } //todo
}

let clear = false; begin = true;
let number1, number2, operate_with, nextoperator, calculated;

const result = document.getElementById('result');

const numbers = document.querySelectorAll('.number');
numbers.forEach(number => number.addEventListener('click', () =>
	{
		if (clear) { 
			result. textContent = '';
		}
		result.textContent = result.textContent + number.textContent;
		clear = false;
	}));

const operators = document.querySelectorAll('.operator');
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
			number1 = calculated;
			number2 = result.textContent;
			calculated = operate (number1 , number2, operate_with);
			result.textContent = calculated;
		}		
	}));

const ac = document.getElementById('ac');
ac.addEventListener('click' , () =>
	{
		result.textContent = '';
		clear = false;
		begin = true;
		calculated = undefined;

	});

