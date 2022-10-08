// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { title } = require('process');

const generateREADME = ({ title, description, installation, usage, contributing, tests, license, github, email }) =>
`
# ${title}

## Description

${description}

## Table of Contents

- [Installation] (#installation)
- [Usage] (#usage)
- [License] (#license)
- [Contributing] (#contributing)
- [Tests] (#tests)
- [Questions] (#questions)

## Installation {#installation}

${installation}

## Usage {#usage}

${usage}

## License {#license}

${license}

## Contributing {#contributing}

${contributing}

## Tests {#tests}

${tests}

## Questions {#questions}

Please feel free to reach out to me via the contact information below with any additional questions.

GitHub: ${github}

Email: ${email}`;

// Questions for the user
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the project title?',
      name: 'title',
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

.then((answers) => {
  const readmeFileContent = generateREADME(answers);

  fs.writeFile('README.md', readmeFileContent, (err) => 
  err ? console.log(err) : console.log('A README.md was successfully created!') 
  );
});


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
function init() {}

// // Function call to initialize app
init();
