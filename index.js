// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// Questions for the user
inquirer
  .createPromptModule([
    {
      type: 'input',
      message: 'What is the project title?',
      name: 'project title',
    },
    {
      type: 'input',
      message: 'Enter a project description.',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Enter installation instructions.',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'Enter usage information.',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'Enter contribution guidelines.',
      name: 'contributing',
    },
    {
      type: 'input',
      message: 'Enter test instructions.',
      name: 'tests',
    },
    {
      type: 'list',
      message: 'Choose a license for your application.',
      name: 'license',
      choices: ['MIT', 'BSD', 'GNU GPLv3', 'Apache 2.0']
    },
    {
      type: 'input',
      message: 'Enter your GitHub username.',
      name: 'github',
    },
    {
      type: 'input',
      message: 'Enter your email address.',
      name: 'email',
    }
  ])

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
