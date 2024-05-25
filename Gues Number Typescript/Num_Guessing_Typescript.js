#! /usr/bin/env node
import inquirer from "inquirer";
console.log("Welcome! Try Your Luck Guess a number, You Have 3 tries");
let guessTries = 3;
let guessflag = false;
const numTobeGuessed = Math.floor(Math.random() * 20);
console.log(numTobeGuessed);
async function getuserinput() {
    let guesstriesLeft = guessTries;
    let guessflag = false;
    let guesstryNo = 0;
    while (guesstriesLeft > 0 && guessflag == false) {
        const answers = await inquirer.prompt([
            {
                type: 'number',
                name: 'userguess',
                message: `Please enter a Number: `,
            }
        ]);
        const { userguess } = answers;
        console.log(`User guessed =  ${userguess}, Random generated =  ${numTobeGuessed} `);
        if (userguess == numTobeGuessed) {
            guesstryNo = (guessTries - guesstriesLeft) + 1;
            console.log(`Bingo.....  You guessed Right in, Try No. ${guesstryNo}`);
            guessflag = true;
        }
        else {
            guessflag = false;
            guesstriesLeft--;
            if (guesstriesLeft == 0)
                console.log("Better Luck Next Time.....");
            else
                console.log(`Try Again....  Chances Left  ${guesstriesLeft}`);
        }
    }
}
getuserinput();
