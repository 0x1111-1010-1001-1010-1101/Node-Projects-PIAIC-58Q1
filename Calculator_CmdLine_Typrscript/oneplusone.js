import inquirer from "inquirer";
console.log("Please two numbers with operator e.g 22+33 22-33 22*33 22/33");
function addNumbers(num1, num2) {
    return num1 + num2;
}
function subNumbers(num1, num2) {
    return num1 - num2;
}
function MulNumbers(num1, num2) {
    return num1 * num2;
}
function DivNumbers(num1, num2) {
    return num1 / num2;
}
async function getStringInput() {
    const answer = await inquirer.prompt({
        type: 'input',
        name: 'userInput',
        message: 'Please enter a string:',
    });
    console.log('You entered:', answer.userInput);
    const inputsArray = answer.userInput.split('+');
    if (inputsArray.length == 2) {
        const num1 = parseFloat(inputsArray[0]);
        const num2 = parseFloat(inputsArray[1]);
        const result = addNumbers(num1, num2);
        console.log("Answer is :", result); // Output: The sum is: 12
        return;
    }
    const inputsArray1 = answer.userInput.split('-');
    if (inputsArray1.length == 2) {
        const num1 = parseFloat(inputsArray1[0]);
        const num2 = parseFloat(inputsArray1[1]);
        const result = subNumbers(num1, num2);
        console.log("Answer is :", result); // Output: The sum is: 12
        return;
    }
    const inputsArray2 = answer.userInput.split('*');
    if (inputsArray2.length == 2) {
        const num1 = parseFloat(inputsArray2[0]);
        const num2 = parseFloat(inputsArray2[1]);
        const result = MulNumbers(num1, num2);
        console.log("Answer is :", result); // Output: The sum is: 12
        return;
    }
    const inputsArray3 = answer.userInput.split('/');
    if (inputsArray3.length == 2) {
        const num1 = parseFloat(inputsArray3[0]);
        const num2 = parseFloat(inputsArray3[1]);
        const result = DivNumbers(num1, num2);
        console.log("Answer is :", result); // Output: The sum is: 12
        return;
    }
    /*
       if(inputsArray[1]== '+')
           {
               const num1 = parseFloat(inputsArray[0]);
               const num2 = parseFloat(inputsArray[2]);
               const result = addNumbers(num1, num2);
               console.log("Answer is :", result); // Output: The sum is: 12
           }

           if(inputsArray[1]== '-')
           {
               const num1 = parseFloat(inputsArray[0]);
               const num2 = parseFloat(inputsArray[2]);
               const result = subNumbers(num1, num2);
               console.log("Answer is ::", result); // Output: The sum is: 12
           }

           if(inputsArray[1]== '*')
           {
               const num1 = parseFloat(inputsArray[0]);
               const num2 = parseFloat(inputsArray[2]);
               const result = MulNumbers(num1, num2);
               console.log("Answer is ::", result); // Output: The sum is: 12
           }

           if(inputsArray[1]== '/')
           {
               const num1 = parseFloat(inputsArray[0]);
               const num2 = parseFloat(inputsArray[2]);
               const result = DivNumbers(num1, num2);
               console.log("Answer is :", result); // Output: The sum is: 12
           }*/
}
getStringInput();
