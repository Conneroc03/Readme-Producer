// adds the inquirer, fs, and generateMarkdown modules to the file to be used in the index.js file
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown.js')

// created an array of questions to prompt the user with
const questions = ["What is the title of your project?", "What is the description of your project, what was your motivation, why did you build it, what problem does it solve, what did you learn, do you have link to your deployed application and screenshots?",
 "What are the installation instructions for your project?", "What are the usage instructions for your project?", "What are the contribution guidelines for your project?", "What are the test instructions for your project?",
  "What license did you use for your project?", "What is your GitHub username?", "What is your email address?"];
// used inquirer to prompt the user with the questions array
inquirer
    .prompt([
        {
            type: 'input',
            message: questions[0],
            name: 'title',
        },
        {
            type: 'input',
            message: questions[1],
            name: 'description',
        },
        {
            type: 'input',
            message: questions[2],
            name: 'installation',
        },
        {
            type: 'input',
            message: questions[3],
            name: 'usage',
        },
        {
            type: 'input',
            message: questions[4],
            name: 'contribution',
        },
        {
            type: 'input',
            message: questions[5],
            name: 'test',
        },
        {
            type: 'list',
            message: questions[6],
            name: 'license',
            choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None']
        },
        {
            type: 'input',
            message: questions[7],
            name: 'github'
        },
        {
            type: 'input',
            message: questions[8],
            name: 'email',
        },
    ])
    // used the response from the inquirer prompts to generate the markdown
    .then((response) => {
        const readme = generateMarkdown(response);
        fs.writeFile('README.md', readme, (err) =>
            err ? console.log(err) : console.log('Success!')
        );
    });

    // Function to initialize app
function init() {
    inquirer.prompt
}

// Function call to initialize app
init();