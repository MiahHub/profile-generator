const inquirer = require('inquirer');
const fs = require('fs');
const generateMyTeam = require('./src/htmltemplate');

const engineer = require('./lib/engineer');
const manager = require('./lib/manager');
const intern = require('./lib/intern');
const employee = require('./lib/employee');

const newStaffMemberInfo = [];
// construct question array like the previous CLI project
const questions = async () => {
  const answers = await inquirer
    .prompt([
      {
        type: "input",
        message: "what's your name?",
        name: "name",
      },

      {
        type: "input",
        message: "what's your email?",
        name: "email",
      },

      {
        type: "input",
        message: "what's your ID number?",
        name: "id",
      },

      {
        type: "input",
        message: "what's your project role?",
        name: ["engineer", "intern", "manager"],
      },
    ])
 
  //manager questions

  if (answers.role === "manager") {
    const managerAnswer = inquirer.prompt([
      {

        type: "input",
        message: "what's your office number?",
        name: "officeNumber",
      },
    ])
    const newManager = new manager(
      answers.name,
      answers.id,
      answers.email,
      managerAnswer.officeNumber
    );

    newStaffMemberInfo.push(newManager);
  } else if (answers.role === "engineer") {
    const gitHubAnswer = inquirer.prompt([
      {
        type: "input",
        message: "what's your GitHub account?",
        name: "github",
      }

    ])
    const newEngineer = new engineer(
      answers.name,
      answers.id,
      answers.email,
      gitHubAnswer.github,
    );

    newStaffMemberInfo.push(newEngineer);
  } else if (answers.role === "intern") {
    const internAnswer = await inquirer.prompt([
      {
        type: "input",
        message: "What university did you graduate from?",
        name: "university",
      },
    ])

    const newIntern = new intern(
      answers.name,
      answers.id,
      answers.email,
      internAnswer.university,
    );

    newStaffMamberInfo.push(newIntern);

  };

  async function promptQuestions() {
    questions()

    const addMemberAnswer = inquirer.prompt([
      {
        name: 'addMember',
        type: 'list',
        options: ['Add another team member', 'Create the team'],
        message: ['What would you like to do?']
      }
    ])
    if (addMemberAnswer.addMember === 'Add another team member') {
      return promptQuestions()
    }
    return generateTeam();
  }
  promptQuestions();

  function generateTeam() {
    console.log("new staff member", newStaffMamberInfo)
    fs.writeFileSync("./output/index.html",
      generateMyTeam(newStaffMamberInfo),
      "utf-8")
  
  };
}


