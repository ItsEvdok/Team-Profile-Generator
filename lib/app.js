const inquirer = require('inquirer');
const generateCards = require('../utils/generateCards');
const writeFile = require('../utils/generateSite');

function managerData() {
    console.log('Please build your team.');
    return inquirer
        .prompt([{
            type: 'text',
            name: 'name',
            message: 'What is your team managers name?'
        },
        {
            type: 'text',
            name: 'id',
            message: 'What is your team managers id?'
        },
        {
            type: 'text',
            name: 'email',
            message: 'What is your team managers email?'
        },
        {
            type: 'text',
            name: 'officeNumber',
            message: 'What is your team managers office number?'
        }])
        .then(showManagerData => {
            generateCards.getManagerData(showManagerData);
        })
        .then(managerCard => {
            console.log(managerCard);
        })

}

function getTeamData() {
    return inquirer
        .prompt([
            {
                type: 'list',
                name: 'answer',
                message: 'Would you like to add a team member(s)?',
                choices: ['Engineer', 'Intern', 'I dont want to add any team members at this time.']
            }
        ]).then(teamData => {
            console.log(teamData.answer);
            if(teamData.answer === 'Intern'){
                return internData();
            } else if (teamData.answer === 'Engineer'){
                return engineerData();
            }
        })
}

function internData(){
    return inquirer
        .prompt([
            {
                type: 'text',
                name: 'name',
                message: 'What is your interns name?'
            },
            {
                type: 'text',
                name: 'id',
                message: 'What is your interns id?'
            },
            {
                type: 'text',
                name: 'email',
                message: 'What is your interns email?'
            },
            {
                type: 'text',
                name: 'school',
                message: 'What school does the intern attend?'
            }
        ])
        .then(showInternData => {
            generateCards.getInternData(showInternData);
        })
}

function engineerData(){
    return inquirer
        .prompt([
            {
                type: 'text',
                name: 'name',
                message: 'What is your engineers name?'
            },
            {
                type: 'text',
                name: 'id',
                message: 'What is engineers id?'
            },
            {
                type: 'text',
                name: 'email',
                message: 'What is your engineers email?'
            },
            {
                type: 'text',
                name: 'github',
                message: 'What is your engineers GitHub username?'
            }
        ])
        .then(showEngineerData => {
            generateCards.getEngineerData(showEngineerData);
        })
}

managerData()
.then(getTeamData)
;