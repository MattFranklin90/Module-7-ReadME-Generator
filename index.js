const inquirer = require('inquirer').default;
const fs = require('fs');

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter the project title:'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description of your project:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter usage instructions:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select a license:',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'None']
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Enter contribution guidelines:'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter test instructions:'
    },
    {
        type: 'input',
        name: 'contact',
        message: 'Enter your contact information:'
    }
];

// Function to generate the README content
function generateREADME(answers) {
    return `
# ${answers.title}

## Description
${answers.description}

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
This project is licensed under the ${answers.license} license.

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Contact
For more information, contact ${answers.contact}.
    `;
}

// Use async/await to handle Inquirer prompt correctly
async function generateReadMeFile() {
    try {
        const answers = await inquirer.prompt(questions);
        const readmeContent = generateREADME(answers);
        fs.writeFileSync('README.md', readmeContent);
        console.log('README.md has been generated!');
    } catch (error) {
        console.error('Error generating README:', error);
    }
}

generateReadMeFile();
