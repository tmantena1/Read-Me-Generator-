// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `![GitHub license](https://img.shields.io/badge/license-${data.licenseName}-Black.svg)
  
  # ${data.title}

  ## Description
  ${data.descriptionName}

  ## Table of Contents
  1. [Description](#description)
  2. [Installation](#installation)
  3. [Usage](#usage)
  4. [License](#license)
  5. [Contributing](#contributing)
  6. [Tests](#tests)
  7. [Questions](#questions)

  ## Installation
  ${data.installName}

  ## Usage
  ${data.usageName}

  ## License
  This application is licensed under the ${data.licenseName} license.

  ## Contributing
  ${data.contriName}

  ## Tests
  ${data.testsName}

  ## Questions
  <a href="https://github.com/${data.gitName}">GitHub Profile</a>
  <br>
  For questions, reach me at: ${data.emailName}

`;
}

module.exports = generateMarkdown;
