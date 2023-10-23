// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
      },
      {
        type: 'input',
        message: 'What is the project about? What problem does it solve?',
        name: 'description',
      },
      {
        type: 'input',
        message: 'Any information that user will need to install the application?',
        name: 'installation',
      },
      {
        type: 'input',
        message: 'How does someone use the application?',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'How can a user contribute to this repository?',
        name: 'contribution',
      },
      {
        type: 'input',
        message: 'Provide any information regarding the testing of the application:',
        name: 'test',
      },
      {
        type: 'rawlist',
        name: 'license',
        message: 'What license are you utilizing on this project?',
        choices: ['Apache License 2.0', 'GNU General Public License', 'MIT License', 'BSD 3-Clause "New" or "Revised" license', 'BSD 2-Clause "simplified" license', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense', 'None']
      },
      {
        type: 'input',
        message: 'What is your Github username?',
        name: 'username',
      },
      {
        type: 'input',
        message: 'What is your email address?',
        name: 'questions',
      },



];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}


// TODO: Create a function to initialize app
function init() {

    inquirer.prompt(questions)
    .then((responses) => {
        console.log("README Generating");
        writeToFile("README.md", generateMarkdown({...responses}));
    }
)}

// Function call to initialize app
init();
