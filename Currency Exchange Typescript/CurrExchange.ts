#! /usr/bin/env node
import inquirer from "inquirer"
let Cur_Symbol ="";
let Sel_Symbol ="";

async function getagain_Option() 
{   
        let tryagain = await inquirer.prompt([
        {
            type: "string",
            name: "optionyn",
            message: "Do you Want to continue y/n:"    
         }
        ])
        return tryagain.optionyn;
}       
async function conversionRates(In1:string,In2:String,amount1:number)
{
    let  USD_Eql : number =0;
    let Calculated_OP : number =0;
    switch(In1)
    {
        case  "PKR":
            USD_Eql= amount1 / 290;
            Sel_Symbol ="PKR";
        break;
        case "USD":
            USD_Eql= amount1 / 1;
            Sel_Symbol ="$"; 
        break;
        case "EURO":
            USD_Eql= amount1 * 0.8; 
            Sel_Symbol ="€";  
        break;
        case "SAR":
            USD_Eql= amount1 * 0.25;
            Sel_Symbol ="SAR";   
        break;
        case "GBP":
            USD_Eql= amount1 * 1.5;
            Sel_Symbol ="£";
        break;
        default:
            break;
         }
    switch(In2)
    {
        case "PKR":
            Calculated_OP = USD_Eql * 290;
            Cur_Symbol ="PKR";

        break;
        case "USD":
            Calculated_OP= USD_Eql * 1; 
            Cur_Symbol ="$";

        break;
        case "EURO":
            Calculated_OP = USD_Eql / 0.8;
            Cur_Symbol ="€";

        break;
        case "SAR":
            Calculated_OP = USD_Eql / 0.25;
            Cur_Symbol ="SAR";   
        break;
        case "GBP":
            Calculated_OP = USD_Eql/  1.5;
            Cur_Symbol ="£";
        break;
        default:
            break;
            console.log("Switch2 ," ,Calculated_OP)    
    }

    return(Calculated_OP);
}
async function getuserinput()
{
    let result1=0;
    let try_Yes_No = "y";
    while(try_Yes_No !== 'n')
    {
    let UserInput = await inquirer.prompt([
        {
            type: "list",
            name: "Currency_select",
            choices : ["PKR","USD", "GBP", "SAR", "EURO"],
            message: "Please Enter The Currency Your want to exchange"
         },
         {
            type: "list",
            name: "Currency_Dest",
            choices : ["PKR","USD", "GBP", "SAR", "EURO"],
            message: "Please Enter The Target Currency Your want to exchange"    
         },
         {
            type: "number",
            name: "amount",
            message: "Please Enter The amount Your want to exchange"    
         }

        ])
        result1 = await conversionRates(UserInput.Currency_select,UserInput.Currency_Dest,UserInput.amount);
        console.log (`The Converted amount`, UserInput.Currency_select, `---->`, UserInput.Currency_Dest, `for amount`, UserInput.amount ,Sel_Symbol, `is `, result1, Cur_Symbol) ;
        try_Yes_No = await getagain_Option();
    }  
}

getuserinput();