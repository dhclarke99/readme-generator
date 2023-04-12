// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const savedFunctions = require("./utils/generatemarkdown");
const generateMarkdown = require('./utils/generatemarkdown');



// TODO: Create an array of questions for user input
const questions = () => { 
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is your project title?',
          },
          {
            type: 'input',
            name: 'description',
            message: 'Write a short description',
          },
          {
            type: 'input',
            name: 'installation',
            message: 'Write instructions for installation',
          },
          {
            type: 'input',
            name: 'usageInfo',
            message: 'Write usage information',
          },
          {
            type: 'input',
            name: 'contribution',
            message: 'Write Contribution Guidelines',
          },
          {
            type: 'input',
            name: 'testing',
            message: 'Write test instructions',
          },
          {
            type: 'list',
            name: 'license',
            message: 'Choose a license',
            choices: ["1", "2", "3"]
          },
          {
            type: 'input',
            name: 'gitHub',
            message: 'Enter your GitHub user name',
          },
          {
            type: 'input',
            name: 'email',
            message: 'Enter your email address',
          },


    ])
// TODO: Create a function to write README file
     .then((data) => {
       const readmeContent = savedFunctions.generateMarkdown(data);
       fs.writeFile("readme.md", readmeContent, (err) =>
       err ? console.log(err) : console.log("success!")
       );
   
       
    });

}





// TODO: Create a function to initialize app
const init = () => {
    questions()
    
}

// Function call to initialize app
init();