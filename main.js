#! /usr/bin/env node
import inquirer from "inquirer";
//Declear a constant `answer` and assign it to the resultof inquirer.prompt function
const answers = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter your sentence to count the word: "
    }
]);
const words = answers.Sentence.trim().split(" ");
//Print the arrey of words to the console
console.log(words);
//Print the word count of the sentence to the console
console.log(`Your sentence word count is ${words.length}`);
