// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: "What is the name of your project title?",
        name: 'title',
        default: 'blue',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid project title is required.");
            }
            return true;
        }
    },  
    {
        type: 'input',
        message: "What is your Github username?",
        name: 'username',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid GitHub username is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is your eamil address?",
        name: 'email',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid email is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Write a breif description on your project.",
        name: 'description',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid project descriotion is required.");
            }
            return true;
        }
    },
    {
    type: 'input',
    name: 'installation',
    message: 'If necessary please provide the steps to install your project, in the Installation section.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide examples of your project use, in the Usage section.',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'If applicable, provide guidelines on how other developers can contribute to your project.',
    },
        {
            type: 'input',
            name: 'test',
            message: 'If applicable, provide any tests written for your application and examples on how to use them.',
    },
    {
        type: 'input',
        name: 'license',
        message: 'Please select a license for your project.',
        choices: ['ISC', 'MIT', 'Mozilla Public License 2.0', 'Microsoft Public License', 'Open Software License 3.0']
    }
];
    



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log("Congrats, your README.md has been created.")
    });
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
