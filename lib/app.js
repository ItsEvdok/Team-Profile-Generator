const inquirer = require("inquirer");
const templateData = require("../utils/generateCards");
const writeFile = require("../utils/generateSite");

const managerData = () => {
  console.log("Please build your team.");

  return inquirer.prompt([
    {
      type: "text",
      name: "name",
      message: "What is your team managers name?",
    },
    {
      type: "text",
      name: "id",
      message: "What is your team managers id?",
    },
    {
      type: "text",
      name: "email",
      message: "What is your team managers email?",
    },
    {
      type: "text",
      name: "officeNumber",
      message: "What is your team managers office number?",
    },
  ]);
};

const getTeamData = (teamData) => {
  if (!teamData.members) {
    teamData.members = [];
  }
  return inquirer
    .prompt([
      {
        type: "list",
        name: "answer",
        message: "Would you like to add a team member(s)?",
        choices: [
          "Engineer",
          "Intern",
          "I dont want to add any team members at this time.",
        ],
      },
    ])
    .then((data) => {
      if (data.answer === "Engineer") {
        // teamData.members.push(data.answer);
        return inquirer
          .prompt([
            {
              type: "text",
              name: "name",
              message: "What is your engineers name?",
            },
            {
              type: "text",
              name: "id",
              message: "What is engineers id?",
            },
            {
              type: "text",
              name: "email",
              message: "What is your engineers email?",
            },
            {
              type: "text",
              name: "github",
              message: "What is your engineers GitHub username?",
            },
            {
              type: "confirm",
              name: "confirmAddMember",
              message: "Would you like to add another member?",
              default: false,
            },
          ])
          .then((engineerInfo) => {
            teamData.members.push(engineerInfo);
            if (engineerInfo.confirmAddMember) {
              return getTeamData(teamData);
            } else {
              return teamData;
            }
          });
      } else if (data.answer === "Intern") {
        return inquirer
          .prompt([
            {
              type: "text",
              name: "name",
              message: "What is your interns name?",
            },
            {
              type: "text",
              name: "id",
              message: "What is your interns id?",
            },
            {
              type: "text",
              name: "email",
              message: "What is your interns email?",
            },
            {
              type: "text",
              name: "school",
              message: "What school does the intern attend?",
            },
            {
              type: "confirm",
              name: "confirmAddMember",
              message: "Would you like to add another member?",
              default: false,
            },
          ])
          .then((internInfo) => {
            teamData.members.push(internInfo);
            if (internInfo.confirmAddMember) {
              return getTeamData(teamData);
            } else {
              return teamData;
            }
          });
      } else {
          return teamData;
      }
    });
};

managerData()
  .then(getTeamData)
  .then(cardData => {
    return templateData(cardData);
  }).then(indexHtml => {
      return writeFile(indexHtml);
  });
