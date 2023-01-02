// function that returns a license badge based on which license is passed in
// if no license, return empty string
function renderLicenseBadge(license) {
  if (license) {
    var str = license;
    str = str.replaceAll(' ', '');
    return `![](https://img.shields.io/badge/license-${str}-green)`;
  } else {
    return ''
  }
}

// function that returns the license link
// if no license, return an empty string
function renderLicenseLink(license) {
 if (license) {
  var licenseLink = '';
  switch (license) {
    case 'APACHE 2.0':
      licenseLink = 'Apache-2.0';
      break;
    case 'GPL 3.0':
      licenseLink = 'GPL-3.0';
      break;
    case 'BSD 3':
      licenseLink = 'BSD-3-Clause';
      break;
    default:
      licenseLink = 'MIT';
  }

  return `https://opensource.org/licenses/${licenseLink}`;
 } else {
  return ''
 }
}

// create function that returns the license section of readme
// If no license, return empty string
function renderLicenseSection(license) {
  if (license) {
    return `This project is licensed under the [${license}](${renderLicenseLink(license)}) license.`;
  } else {
    return ''
  }
}

// create function to generate markdown for readme
function generateMarkdown(data) {
  return `
  # ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation

  To install necessary dependencies, run the following command:

    ${data.install}

  ## Usage

  ${data.usage}

  ## License

  ${renderLicenseSection(data.license)}

  ## Contributing

  ${data.contributing}

  ## Tests

  To run tests, run the following command:

    ${data.test}

  ## Questions

  If you have any questions about the repo, open and issue or contact me directly at ${data.email}. You can find more of my work at [${data.username}](https://github.com/${data.username})
`;
}

module.exports = generateMarkdown;
