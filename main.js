var operation;
var prev_value;
var display = "";

function clear_all() {
	document.getElementById('display').value = "";
	display = "";
}

function add() {
	prev_value = display;
	document.getElementById('display').value = "+";
	display = "";
	operation = 'addition';
}

function subtract() {
	prev_value = display;
	document.getElementById('display').value = "-";
	display = "";
	operation = "subtraction";
}

function multiply() {
	prev_value = display;
	document.getElementById('display').value = "*";
	display = "";
	operation = "multiplication";
}

function divide() {
	prev_value = display;
	document.getElementById('display').value = "/";
	display = "";
	operation = "division";
}

function exponent(){
	prev_value = display;
	document.getElementById('display').value = "^";
	display = "";
	operation = "exponention";
}

function get_number(num) {
	switch(num){
		case 1:
			display += '1';
			document.getElementById('display').value = display;
			break;
		case 2:
			display += '2';
			document.getElementById('display').value = display;
			break;
		case 3:
			display += '3';
			document.getElementById('display').value = display;
			break;
		case 4:
			display += '4';
			document.getElementById('display').value = display;
			break;
		case 5:
			display += '5';
			document.getElementById('display').value = display;
			break;
		case 6:
			display += '6';
			document.getElementById('display').value = display;
			break;
		case 7:
			display += '7';
			document.getElementById('display').value = display;
			break;
		case 8:
			display += '8';
			document.getElementById('display').value = display;
			break;
		case 9:
			display += '9';
			document.getElementById('display').value = display;
			break;
		case 0:
			display += '0';
			document.getElementById('display').value = display;
			break;
		case '.':
			display += '.';
			document.getElementById('display').value = display;
			break;
	}
}

function calculate(){
	var result = "";
	prev_value = parseFloat(prev_value);
	display = parseFloat(display);
	switch(operation){
		case "addition":
			result = prev_value + display;
			break;
		case "subtraction":
			result = prev_value - display;
			break;
		case "multiplication":
			result = prev_value * display;
			break;
		case "division":
			result = prev_value / display;
			break;
		case "exponention":
			if (display == '0') {
				result = '1'
			}
			else{
				result = 1;
				for (let i = 0; i < display; i++) {
					result *= prev_value;
				}
			}
			break;
		}
	operation = "";
	display = result;
	document.getElementById('display').value = result.toString();
}