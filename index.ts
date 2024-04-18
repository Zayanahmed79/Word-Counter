#! /usr/bin/env node
import inquirer from "inquirer";

let answer: {
  sentence: string;
} = await inquirer.prompt([
  {
    name: "sentence",
    type: "input",
    message: "Enter your sentence to count the words",
  },
]);

let countedwords = answer.sentence.trim().split(" ");

console.log(countedwords);

console.log(`Your sentence contain ${countedwords.length} words.`);

