///imports file System
const fs = require('fs')
//imports inquirer
const inquirer = require('inquirer')
//array of prompt questions that take user input from the console
const promptArray = [{
    type: 'input',
    message: 'what is the tittle of your repository?',
    name: 'repoTittle'
},
{
    type: 'input',
    message: 'please provide a detailed description of your project answering these questions. What was your motivation? Why did you build this project? What problem(s) does it solve? What did you learn?',
    name: 'description'
},
{
    type: 'input',
    message: 'What is needed to run the project? Dose anything need to be installed to get the program working?',
    name: 'installation'
},
{
    type: 'input',
    message: 'please list instructions on how to use the project.',
    name: 'usage'
},
{
    type: 'input',
    message: 'List your collaborators, if any, with links to their GitHub profiles. If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section. If you followed tutorials, include links to those here as well.',
    name: 'credit'
},
{
    type: 'list',
    message: 'what licence would you like to choose?',
    choices: ['MIT'],
    name: 'licences'
}
    ,
{
    type: 'input',
    message: 'Please enter your github user name.',
    name: 'question1'
},
{
    type: 'input',
    message: 'please enter your email.',
    name: 'question2'
},
{
    type: 'input',
    message: 'Enter test instructions',
    name: 'test'
}]
//calls the inquirer class and promps the questoin array above 
inquirer.
    prompt(promptArray)
    //returns the user response 
    .then((response) => {
        //a function that takes in the user response and is processed by a file writer
        writeToRead(response)

    })
//function takes in the users response 
function writeToRead(response) {
//instanciates a variable assigned to a functction that takes in the license value 
    var link = returnDis(response.licences)
// file system class using a write to file function and proccesses the user input and formats them in the readme 
    fs.writeFile('README.md',
        `# ${response.repoTittle}           [![License](https://img.shields.io/badge/License-${response.licences}-yellow.svg)](https://shields.io/) 
## Description
${response.description}\n
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)\n
## Installation
* ${response.installation}\n
## Usage
* ${response.usage}\n
## Credit
* ${response.credit}\n
## License 
* ${response.licences}
* ${link}\n
## Test
* ${response.test}\n
## Questions
* Github: ${response.question1}
* Email: ${response.question2}
     `, function (error) {

    })

}
//function that takes in the license and returns a link for a description of the license 
function returnDis(licence) {

    if (licence === 'MIT') {

        var link = `<a href="https://opensource.org/licenses/MIT"> MIT License </a>`

        return link
    }


}

