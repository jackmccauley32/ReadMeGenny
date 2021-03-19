// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const Choices = require("inquirer/lib/objects/choices");

// TODO: Create an array of questions for user input
const questions = [
{
    name: 'Title',
    type: 'input',
    message: 'What is the title of your project?',
},
{
    name: 'Description',
    type: 'input',
    message: 'Describe your project',
},
{
    name: 'Installation',
    type: 'input',
    message: 'Enter any installation instructions',
},
{
    name: 'Usage',
    type: 'input',
    message: 'Enter any relevant usage information',
},
{
    name: 'test',
    type: 'input',
    message: 'Enter instructions for testing',
},
{
    name: 'contribute',
    type: 'input',
    message: 'Enter instructions for contribution',
},
{
    name: 'GitHub',
    type: 'input',
    message: 'Enter your GitHub username',
},
{
    name: 'Email',
    type: 'input',
    message: 'Enter your Email',
},
{
    name: 'license',
    type: 'list',
    message: 'If applicable, please select a license below',
    Choices: ['MIT', 'Apache', 'BSD', 'none']
},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
