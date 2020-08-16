const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

let employeeCount = 0;
let employeeArray = [];
let employeeObject = {};

const employeeCountQuestion = {
    type: 'input',
    message: 'How many employees do you have?',
    name: 'numberEmployees'
};

const employeeGenQuestions = [
    {
        type: 'input',
        message: "What is employee's name?",
        name: 'name'
    },
    {
        type: 'list',
        message: "What is the employee's occupation?",
        name: 'occupation',
        choices: ['Manager', 'Engineer', 'Intern']
    },
    {
        type: 'input',
        message: "What is the employee's email address?",
        name: 'email'
    }
];

const managerQuestion = {
    type: 'input',
    message: "What is the employee's office number?",
    name: 'officeNumber'
}

const engineerQuestion = {
    type: 'input',
    message: "What is the employee's Github username?",
    name: 'github'
}

const internQuestion = {
    type: 'input',
    message: "What is the employee's school?",
    name: 'school'
}


async function init() {
        try {
            await inquirer.prompt(employeeCountQuestion).then(function(response){
                employeeCount = parseInt(response.numberEmployees);
            })
            for (i = 0; i < employeeCount; i++) {
                await inquirer.prompt(employeeGenQuestions).then(function(response){
                    employeeObject = response;
                    employeeObject.id = i + 1; 
                });

                if (employeeObject.occupation === 'Manager') {
                    await inquirer.prompt(managerQuestion).then(function(response){
                        employeeObject.officeNumber = response.officeNumber;
                        const manager = new Manager(employeeObject.name, employeeObject.id, employeeObject.email, employeeObject.officeNumber);
                        employeeArray.push(manager);
                    });
                }
                if (employeeObject.occupation === 'Engineer') {
                    await inquirer.prompt(engineerQuestion).then(function(response){
                        employeeObject.github = response.github; 
                        const engineer = new Engineer(employeeObject.name, employeeObject.id, employeeObject.email, employeeObject.github);
                        employeeArray.push(engineer);
                    });
                }
                if (employeeObject.occupation === 'Intern') {
                    await inquirer.prompt(internQuestion).then(function(response){
                        employeeObject.school = response.school;
                        const intern = new Intern(employeeObject.name, employeeObject.id, employeeObject.email, employeeObject.school);
                        employeeArray.push(intern);
                    });
                }
                
                console.log(employeeArray);
            }

            await render(employeeArray);

        } catch (err) {
            console.log(err);
        }
    }

init();




// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
