const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("What would you like to calculate?", function(input){
	tokens = input.split(' ');
	
	mathSymbol = tokens[0];
	num1 = Number(tokens[1]);
	num2 = Number(tokens[2]);

	// console.log("Math Operation: ", mathSymbol);
	// console.log("First Number: ", num1);
	// console.log("Second Number: ", num2);
	

	if (mathSymbol === '+')
	{
		console.log("Addition of numbers is: ", num1 + num2);
	}
	else if(mathSymbol === '-')
	{
		console.log("Subtraction of numbers is: ", num1 - num2);
	}
	else if (mathSymbol === '*')
	{
		console.log("Multiplication of numbers is: ", num1 * num2);
	}
	else if (mathSymbol === "/")
	{
		console.log("Division of numbers is: ", num1 / num2);
	}
	else if (mathSymbol === "sqrt")
	{
		console.log("Square root of number: ", Math.sqrt(num1));
	}
	// This line closes the connection to the command line interface.
	reader.close()

});
