const result = document.getElementById('res');
const zeroBtn = document.getElementById('btn0');
const oneBtn = document.getElementById('btn1');
const plusBtn = document.getElementById('btnSum');
const subBtn = document.getElementById('btnSub');
const multBtn = document.getElementById('btnMul');
const divBtn = document.getElementById('btnDiv');
const clearBtn = document.getElementById('btnClr');
const equalsBtn = document.getElementById('btnEql');

zeroBtn.onclick = () => result.innerText += zeroBtn.innerText;
oneBtn.onclick = () => result.innerText += oneBtn.innerText;
plusBtn.onclick = () => result.innerText += plusBtn.innerText;
subBtn.onclick = () => result.innerText += subBtn.innerText;
multBtn.onclick = () => result.innerText += multBtn.innerText;
divBtn.onclick = () => result.innerText += divBtn.innerText;
clearBtn.onclick = () => result.innerText = '';

const operators = ['+', '-', '*', '/'];

equalsBtn.onclick = () => {
	let left;
	let right;
	let operator;
	operators.forEach((opr) => {
		if (result.innerText.includes(opr.toString())) {
			const splitPhrase = result.innerText.split(opr);
			left = Number(parseInt(splitPhrase[0], 2));
			right = Number(parseInt(splitPhrase[1], 2));
			operator = opr;
		}
	});

	let res;
	
	switch (operator) {
		case '+':
			res = (left + right).toString(2);
			break;
		case '-':
			res = (left - right).toString(2);
			break;
		case '*':
			res = (left * right).toString(2);
			break;
		case '/':
			res = (left / right).toString(2);
			break;
		default:
			console.log('there was an error with the submission');
	}

	result.innerText = res;
};