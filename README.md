# Employee Summary
UCI Boot Camp Homework 10 - Employee Summary Template Engine

![deployed application](Assets/deployed_app.JPG)

## Description 
 This was the tenth homework assignment for the full stack web development program at UC Irvine, in which the goal was to build an application that allows the manager of a team to create a roster of his or her employees via CLI along with appropriate information about each employee and append it to an HTML webpage. Additionally, the goal was also to create and pass a series of Jest tests.

## Table of Contents 
* [Technologies](#Technologies)
* [Usage](#Usage)
* [License](#License)
* [Badges](#Badges)
* [Tests](#Tests)
* [Questions](#Questions)

## Technologies 
* This application is written in Javascript and uses HTML and CSS for styling. It also incorporates the Bootstrap CSS framework.
* This application uses the inquirer, fs, and path npm packages.
* It also uses the Jest npm package for testing.
* It uses the OOP style of scripting. 
* Lastly, it requires node.js to run it.

## Usage 
Open a terminal and enter the 'Develop' directory. Run the app.js by typing 'node app.js'. It will first ask you for the number of employees that would like to add. It does not include yourself (the manager). It will then ask you for your name, email, and office number. You will then start entering information for each employee which includes employee type (engineer or intern), name, email, and a unique question depending on the employee type. For engineer, it will ask for the employee's github username and for intern, it will ask for the employee's school. Once all of the information is entered, it will append all of the information to the team.html file found in /Develop/output. Open this file in a browser to view the file created by your input!

## License 
 ISC

## Badges 
 ![languages badge](https://img.shields.io/github/languages/count/maxx105/employee_summary)
 ![languages badge](https://img.shields.io/github/languages/top/maxx105/employee_summary)

## Tests 
 Several tests were created and passed in this project. See Employee.test.js, Intern.test.js, Manager.test.js, and Engineer.test.js. I used Jest for testing. In the Develop director, run 'npm run test' in your terminal to check for tests.

## Questions 
 For any questions, contact me at [maxxsanner105@gmail.com](mailto:maxxsanner105@gmail.com).
#### [![Profile Pic](https://avatars.githubusercontent.com/u/63183869?)](https://github.com/maxx105)

