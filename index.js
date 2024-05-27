#! /usr/bin/env code
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.magentaBright("\n \tWord Counter\n"));
const answer = await inquirer.prompt([
    {
        message: chalk.cyanBright("Please enter your text :"),
        type: "input",
        name: "Sentence",
    },
]);
const words = answer.Sentence.trim().split(" ");
console.log(words);
console.log(chalk.yellow(`Your word count is ${chalk.red(words.length)}`));
