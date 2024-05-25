#! /usr/bin/env node
import inquirer from "inquirer"
import Choices from "inquirer/lib/objects/choices.js";
let remBalance : number  = 5000;   //Initial Balance
let contagain2 = "y";  // continue agian

async function getuserinput()
{
    console.log("Again Check  ",contagain2, "\n")
    while(contagain2 == "y")
    {
    let UserId = await inquirer.prompt([
        {
            type: "string",
            name: "name1",
            message: "Welcome! Please Enter your UserId:(fahad)  "
         },
        ])
    
    let password = await inquirer.prompt([
        {
            type: `Number`,
            name: `pwd`,
            message: "Welcome! Please Enter your secret Number:(1234)  "
         },
        ])
    if(password.pwd == 1234 && UserId.name1 =="fahad")
    {
    const Option = await inquirer.prompt([
        {
            type: "list",
            name: "Option1",
            message: "Select Your Option: \t\n 1. View Balance \t\n 2. Withdraw amount: \t\n 3. Deposit amount: \t\n 4. Quit",
            choices: ["1","2","3","4"]
        }
    ])
    switch(Option.Option1)
    {
        case "1":
            console.log(`Your Balance is : `, remBalance)
//            askagain();
            break;
        case "2":
            const WithdrawBal = await inquirer.prompt([
                {
                    type: "number",
                    name: "WithdrawBal1",
                    message: "Enter Your amount to withdraw:",
                    
                }
            ])
            if(WithdrawBal.WithdrawBal1<remBalance)
                {
            remBalance -= WithdrawBal.WithdrawBal1;
            console.log(`Please Take your amount : \n Your Balance is : `, remBalance)  
                }
                else
                console.log("Insufficient Balance :")
            break;  

            case "3":
            const DepositAmt = await inquirer.prompt([
                {
                    type: "number",
                    name: "DepositAmt1",
                    message: "Enter Your amount to Deposit:",
                    
                }
            ])
            remBalance += DepositAmt.DepositAmt1;
            console.log(`Thanks for depositing : \n Your Balance is : `, remBalance )
            break;
            case "4":
            console.log(`Quit by User... \n`)
            break;
    }
    let contagain1 = await inquirer.prompt([
        {
            type: "string",
            name: "contagain3",
            message: "Do you want to continue: Y/N "
         },
        ])
        contagain2 =  contagain1.contagain3;
    }
    else 
    console.log("Invaid Password...")
    }
    console.log("Please Take Your Card Thank You")
}

/*
async function askagain()
{
    let contagain1 = await inquirer.prompt([
        {
            type: "string",
            name: "contagain3",
            message: "Do you want to continue: Y/N "
         },
        ])
        contagain2 =  contagain1.contagain3;   
};
*/
getuserinput();
