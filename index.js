// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// Generates a README with the user's answers to the prompt questions
const generateREADME = ({ title, license, description, installation, usage, contributing, tests, github, email }) =>
`
# ${title}
![License](https://img.shields.io/badge/license-${license.toLowerCase()}-blue.svg)
## Description

${description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation 

${installation}

## Usage 

${usage}

## License 

${license}

[License link](https://choosealicense.com/licenses/${license.toLowerCase()}/)

## Contributing 

${contributing}

## Tests 

${tests}

## Questions 

Please feel free to reach out to me via the contact information below with any additional questions. 

[GitHub Link](https://github.com/${github})

[Email link](mailto:${email})
`;

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

// Function to generate the README with the user's answers and to write the README.md file
.then((answers) => {
  const readmeFileContent = generateREADME(answers);

  fs.writeFile(`${answers.title}.md`, readmeFileContent, (err) => 
  err ? console.log(err) : console.log('A README.md was successfully created!') 
  );
});