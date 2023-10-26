// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license !== 'none'){
  return `![GitHub license](https://img.shields.io/badge/${license}-blue.svg)`;
}
return '';
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license !== 'none'){
    return '\n* [License](#license)\n'
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license !== 'none'){
    return `## License
    
    The license utilized on this project is ${license}
    `
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

## Description

${data.description}


## Table of Contents


- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Tests](#tests)${renderLicenseLink(data.license)}
- [How to Contribute](#contribute)
- [Questions](#questions)
## Installation

${data.installation}

## Usage

${data.usage}

## Credits

${data.credits}

## Tests

${data.tests}

${renderLicenseSection(data.license)}

## How to Contribute

${data.contribute}

## Questions

If you have an questions on how to utilize, install, contribute or anything else to do with this application please reach me at my email: ${data.email}
and feel free to give me a follow to collaborate on GitHub: https://github.com/${data.username}

`;
}

module.exports = generateMarkdown;
