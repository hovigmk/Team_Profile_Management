const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
// const generateSite = require('./src/generate-site.js'); helper code
const fs = require("fs");
const path = require("path");
const Manager = require("./lib/Manager");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "index.html");
const teamMembers = [];

const promptManager = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your name? (Required)",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter your name");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "employeeId",
        message: "Enter your employee ID? (Required)",
        validate: (employeeId) => {
          if (employeeId) {
            return true;
          } else {
            console.log("Please enter your employee ID");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Enter your email? (Required)",
        validate: (emailadd) => {
          if (emailadd) {
            return true;
          } else {
            console.log("Please enter your email");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Enter your office number? (Required)",
        validate: (officeNumber) => {
          if (officeNumber) {
            return true;
          } else {
            console.log("Please enter your office number");
            return false;
          }
        },
      },
    ])
    .then((answers) => {
      console.log(answers);
      const manager = new Manager(
        answers.name,
        answers.employeeId,
        answers.emailadd,
        answers.officeNumber
      );
      teamMembers.push(manager);
      promptMenu();
    });
};

const promptMenu = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "menu",
        message: "Please select an option",
        choices: ["add an engineer", "add an intern", "Done"],
      },
    ])
    .then((userChoice) => {
      switch (userChoice.menu) {
        case "add an engineer":
          promptEngineer();
          break;
        case "add an intern":
          promptIntern();
          break;
        default:
          buildTeam();
      }
    });
};

const promptEngineer = () => {
  console.log(`ADD A NEW ENGINEER`);
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the name of engineer? (Required)",
        validate: (engineerName) => {
          if (engineerName) {
            return true;
          } else {
            console.log("Please enter the name of engineer");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "employeeId",
        message: "Enter your employee ID? (Required)",
        validate: (employeeId) => {
          if (employeeId) {
            return true;
          } else {
            console.log("Please enter your employee ID");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Enter your email address? (Required)",
        validate: (email) => {
          if (email) {
            return true;
          } else {
            console.log("Please enter your email address");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "github",
        message: "Enter your github username? (Required)",
        validate: (username) => {
          if (username) {
            return true;
          } else {
            console.log("Please enter your github username");
            return false;
          }
        },
      },
    ])
    .then((answers) => {
      console.log(answers);
      const engineer = new Engineer(
        answers.name,
        answers.employeeId,
        answers.email,
        answers.github
      );
      teamMembers.push(engineer);
      promptMenu();
    });
};

const promptIntern = () => {
  console.log(`ADD A NEW INTERN`);
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the name of intern? (Required)",
        validate: (internName) => {
          if (internName) {
            return true;
          } else {
            console.log("Please enter the name of intern");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "employeeId",
        message: "Enter your employee ID? (Required)",
        validate: (employeeId) => {
          if (employeeId) {
            return true;
          } else {
            console.log("Please enter your employee ID");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Enter your email address? (Required)",
        validate: (email) => {
          if (email) {
            return true;
          } else {
            console.log("Please enter your email address");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "school",
        message: "Enter your school name? (Required)",
        validate: (schoolname) => {
          if (schoolname) {
            return true;
          } else {
            console.log("Please enter your school name");
            return false;
          }
        },
      },
    ])
    .then((answers) => {
      console.log(answers);
      const intern = new Intern(
        answers.name,
        answers.employeeId,
        answers.email,
        answers.school
      );
      teamMembers.push(intern);
      promptMenu();
    });
};

const buildTeam = () => {
  console.log(`
    FINISHED BUILDING MY TEAM`);
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR);
  }
  fs.writeFileSync(outputPath, generateSite(teamMembers), "utf-8");
};
promptManager();
