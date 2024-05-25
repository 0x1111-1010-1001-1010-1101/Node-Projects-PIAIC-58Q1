#! /usr/bin/env node
import inquirer from "inquirer";
console.log("ToDo List \n")
let myList = [];
let Option = true;

while(Option)
    {
        let UserInput = await inquirer.prompt([
            {
                type: "input",
                name: "To_Do_List",
                message: "Please Enter What to add To yours TODO List"
            },
            {
                type: "confirm",
                name: "next_entry",
                message: "Do You want to continue: ", 
                default:  false, 
             }
        ])
        myList.push(UserInput.To_Do_List);
        Option = UserInput.next_entry;
        console.log(myList);


    }