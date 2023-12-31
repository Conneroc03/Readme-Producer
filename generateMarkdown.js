function renderLicenseBadge(license) {
    if (license === 'MIT') {
        return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    } else if (license === 'Apache 2.0') {
        return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    } else if (license === 'GPL 3.0') {
        return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    } else if (license === 'BSD 3') {
        return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
    } else {
        return '';
    }
}

// created a funtion to add a description of the license, depending on which license the user chooses
function renderLicenseSection(license) {
    if (license === 'MIT') {
        return 'Licensed under the MIT license.';
    } else if (license === 'Apache 2.0') {
        return 'Licensed under the Apache 2.0 license.';
    } else if (license === 'GPL 3.0') {
        return 'Licensed under the GPL 3.0 license.';
    } else if (license === 'BSD 3') {
        return 'Licensed under the BSD 3 license.';
    } else {
        return '';
    }
}

// created a function to generate markdown for README
// used the renderLicenseBadge and renderLicenseSection functions to add the license badge and description to the readme
// exported the generateMarkdown function to be used in index.js`
function generateMarkdown(response) {
    return `# ${response.title}
${renderLicenseBadge(response.license)}
## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
## Description
${response.description}
## Installation
${response.installation}
## Usage
${response.usage}
## License
${renderLicenseSection(response.license)}
## Contributing
${response.contribution}
## Tests
${response.test}
## Questions
If you have any questions, please contact me at [${response.email}](mailto:${response.email}) or visit my [GitHub profile](https://github.com/${response.github})
`;
}
// export the generateMarkdown function
module.exports = generateMarkdown;