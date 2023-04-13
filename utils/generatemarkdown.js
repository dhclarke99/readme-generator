// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    const MIT = "![MIT](https://img.shields.io/bower/l/bootstrap?style=for-the-badge)"
    const apacheLicense = "![Apache](https://img.shields.io/aur/license/android-studio?color=green&style=plastic)"
    const GPL = "![unlicense](https://img.shields.io/eclipse-marketplace/l/notepad4e)"
    if (license === "MIT") {
        console.log(MIT)
        return MIT
    } else if (license === "Apache License 2.0") {
        return apacheLicense
    } else if (license === "GPL") {
        return GPL
    } else {
        return "";
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    const mitLink = "https://choosealicense.com/licenses/mit/"
    const apacheLink = "https://choosealicense.com/licenses/apache-2.0/"
    const gplLink = "https://choosealicense.com/licenses/gpl-3.0/"
  
     if (license === "MIT"){
    return `[license link](${mitLink})`;
     } else if (license === "Apache License 2.0"){
        return `[license link](${apacheLink})`;
     } else if (license === "GPL"){
        return `[license link](${gplLink})`;
     } else {
        return "";
     }


}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    return `
     ${license}
    `;
}

function renderGitHubSection(gitProf) {
    const link = "https://github.com/" + gitProf
    return `  [${gitProf}](${link}) `;
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

## Table of Contents (Optional)

- [Installation](#installation)
- [Usage](#usage)
- [How to Contribute](#how-to-contribute)
- [Tests](#tests)
- [License](#license)
- [Badge](#badge)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usageInfo}

## How to Contribute
${data.contribution}

## Tests
${data.testing}

## License

${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)}

## Badge

${renderLicenseBadge(data.license)}

## Questions
Click the link below to access my GitHub profile:

UserName: ${renderGitHubSection(data.gitHub)}

Email me at ${data.email} with any additional questions!
`;
}



module.exports = {
    generateMarkdown,
    renderLicenseBadge,
    renderLicenseLink,
    renderLicenseSection,
    renderGitHubSection
}
