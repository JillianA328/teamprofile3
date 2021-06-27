const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/htmlRenderer");

const team = [];

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
const promptUser = () => {
    inquirer.prompt([

        //Manager info
        {
            type: 'input',
            name: 'managerName',
            message: 'Please enter your name:',

        },

        {
            type: 'input',
            name: 'managerId',
            message: 'Please enter your employee ID:',
        },

        {
            type: 'input',
            name: 'managerEmail',
            message: 'Please enter your email address:',
        },

        {
            type: 'input',
            name: 'managerOffice',
            message: 'Please enter your office number:',
        }

    ]).then(response => {
        const manager = new Manager(response.managerName, response.managerId,
            response.managerEmail, response.managerOffice);

            team.push(manager);


        teamBuild();

    });
};

// create team
var teamBuild = function () {
    inquirer.prompt([
        {
            type: 'list',
            message: 'Select a team member:',
            choices: ['Engineer', 'Intern', 'None'],
            name: 'team',
        }
    ])
        .then(response => {
            console.log(team);
            if (response.team === 'Engineer') {
                engineerInfo();
            } else if
                (response.team === 'Intern') {
                internInfo();
            } else {
                // fs.createReadStream();
                createTeam();
            }
        });
};

//intern information
var internInfo = function () {
    console.log("intern");
    inquirer.prompt([
        {
            type: 'input',
            message: 'Interns name:',
            name: 'internName',
        },

        {
            type: 'input',
            message: 'Interns ID:',
            name: 'internId',
        },

        {
            type: 'input',
            message: 'Interns email:',
            name: 'internEmail',
        },

        {
            type: 'input',
            message: 'Interns school:',
            name: 'internSchool',
        }
    ])
        .then(response => {
            const intern = new Intern(response.interName.response.internID,
                response.internEmail, response.internSchool);
            team.push(intern);

            teamBuild();
        });
};


//Engineer Info
var engineerInfo = function () {
    console.log("engineer");
    inquirer.prompt([
        {
            type: 'input',
            message: 'Engineers name:',
            name: 'engineerName',
        },

        {
            type: 'input',
            message: 'Engineers ID:',
            name: 'engineerId',
        },

        {
            type: 'input',
            message: 'Engineers email:',
            name: 'engineerEmail',
        },

        {
            type: 'input',
            message: 'Engineers school:',
            name: 'engineerSchool',
        }
    ])
        .then(response => {
            const engineer = new Engineer(response.engineerName.response.engineerID,
                response.engineerEmail, response.engineerSchool);
            team.push(engineer);

            teamBuild();
        });
};


//html file create
var createTeam = function () {

    fs.writeFile( __dirname + '/output/team.html', render(team), function (err) {
        if (err) {
            return console.error(err);
        }
        console.log("Team has been created");
    })
}
    

promptUser();


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
