const inquirer = require('inquirer');
const fs = require('fs');
const generateMyTeam = require('./src.htmltemplate.js');

const engineer = require('./lib/engineer');
const manager = require('./lib/manager');
const intern = require('./lib/intern');

const newMember = [];
// construct question array like the previous CLI project
const questions = async () => {
const answers = await inquirer.prompt([
{
  type: "input"
  message: "what's your name?",
  name: "name",
},
{
  type: "input"
  message: "what's your email?",
  name: "email",
},

{
  type: "input"
  message: "what's your ID number?",
  name: "id",
},

{
  type: "input"
  message: "what's your project role?",
  name: "name",
},

])

if (answers.role === "manager") {
  const managerAnswer = await inquirer.prompt([
    {

  type: "input"
  message: "what's your office number?",
  name: "officeNumber",
},
  ])
  const newManager = new manager(
answers.name,
answers.id,
answers.email,
answers.officeNumber
  );

newStaffMemberInfo.push(newEngineer);
} else if (answers.role ==="engineer") {
  const gitHubAnswer = await inquirer.prompt([
    {
type: "input"
  message: "what's your GitHub account?",
  name: "github",
    }

  ])
  const newEngineer = new engineer(
answers.name,
answers.id,
answers.email,
answers.github,
  );

  newStaffMemberInfo.push(newEngineer);
} else if (answers.role ==="intern") {
  const internAnswer = await inquirer.prompt([
    {
      type: "input"
      message: "What university did you graduate from?",
      name: "university",
    },
  ])

  const newIntern = new intern(
answers.name,
answers.id,
answers.email,
internAnswers.university,
  );

newStaffMamberInfo.push(newEngineer);

};

async function promptQuestions() {
  await questions()

  const addMemberAnswer = await inquirer.prompt([
    {
      name: 'addMember',
      type: 'list',
      options: ['Add another team member', 'Create the team'],
      message: ['What would you like to do?'] 
    }  
  ])
  if(addMemberAnswer.addMember === 'Add another team member') {
    retrun promptQuestions()
  }
  return generateTeam();
}
promptQuestions();

function generateTEam () {
  console.log("new member", newStaffMamberInfo)
  fs.writeFileSync("./output/index.html",
  generateMyTeam(newStaffMamberInfo),
  "utf-8")
}
])
}

