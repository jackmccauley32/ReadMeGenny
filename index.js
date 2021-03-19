// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const Choices = require("inquirer/lib/objects/choices");

// TODO: Create an array of questions for user input
const questions = [
{
    type: 'input',
    message: '',
    name: '',
},
{
    type: 'input',
    message: '',
    name: '',
},
{
    type: 'input',
    message: '',
    name: '',
},
{
    type: 'input',
    message: '',
    name: '',
},
{
    type: 'input',
    message: '',
    name: '',
},
{
    type: 'input',
    message: '',
    name: '',
},
{
    type: 'input',
    message: '',
    name: '',
},
{
    type: 'input',
    message: '',
    name: '',
},
{
    type: 'list',
    message: 'If applicable, please select a license below',
    name: 'license',
    Choices: ['MIT', 'Apache', 'BSD', 'none']
},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
