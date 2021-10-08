// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generate = require("./utils/generateMarkdown");
const path = require("path")

// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input",
        name: "titleName",
        message: "What is the Title of your project?"
    },
    {
        type:"input",
        name:"descriptionName",
        message:"Describe your project."
    },
    {
        type:"input",
        name: "installName",
        message: "Enter instructions for installation."
    },
    {
        type:"input",
        name: "usageName",
        message: "Enter usage information."
    },
    {
        type:"list",
        name:"licenseName",
        message:"Choose your license.",
        choices: ["MIT", "BSD3", "APACHE2.0", "None"]
    },
    {
        type:"input",
        name: "contriName",
        message: "Enter contributors"
    },
    {
        type:"input",
        name: "testsName",
        message: "Enter test instructions"
    },
    {
        type:"input",
        name: "gitName",
        message: "Enter Github username"
    },
    {
        type:"input",
        name: "emailName",
        message: "Enter email address"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
   return fs.writeFileSync(path.join(process.cwd(),fileName),data)

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(response => {
        console.log(response)
        writeToFile("generatedREADME.md", generate(response));
    })
}

// Function call to initialize app
init();
