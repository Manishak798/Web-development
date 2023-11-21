//this file is specifically made for how to take input in node js
import inquirer from "inquirer";
//array of questions
const questions = [{
    type: "input",
    name: 'name',
    message: 'what is your name?'
}, {
    type: 'list',
    name: 'color',
    message: 'what is your favorite color?',
    choices: ['red', 'blue', 'pink', 'yellow']
}];
//prompt the user
inquirer.prompt(questions)
    .then(answers => {
        console.log('users details');
        console.log('Name:', answers.name);
        console.log('Fav-color: ', answers.color);
    })
    .catch(error => {
        console.log("Error Occured!!");
    })