// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// Generates a README with the user's answers to the prompt questions
const generateREADME = ({ title, description, installation, usage, license, contributing, tests, github, email }) =>
`
# ${title}

![License](https://img.shields.io/badge/license-${license}-blue.svg)

[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)

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

${title} is available under the ${license} license.

Please see [LICENSE](https://choosealicense.com/licenses/${license.toLowerCase()}/) for the full details of the license.

## Contributing 

${contributing}

The contributors of this application have adopted the Contributor Covenant Code of Conduct. Please visit the [Code of Conduct](./CODE_OF_CONDUCT) page for details.

## Tests 

${tests}

## Questions 

Please reach out via the the links below with any additional questions. 

[GitHub](https://github.com/${github})

[Email](mailto:${email})
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
      choices: ['MPL-2.0', 'MIT', 'BSL-1.0', 'Apache-2.0']
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

  fs.writeFile('README.md', readmeFileContent, (err) => 
  err ? console.log(err) : console.log('Your README.md was successfully created!') 
  );
});