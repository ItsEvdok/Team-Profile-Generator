const inquirer = require('inquirer');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');

function getManagerData() {
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
        .then(managerData => {
            console.log(managerData);
            const{name, id, email, officeNumber} = managerData;
            const manager = new Manager(name, id, email, officeNumber);
            console.log(manager);
            getTeamData();
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
                return getInternData();
            } else if (teamData.answer === 'Engineer'){
                return getEngineerData();
            }
        })
}

function getInternData(){
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
        .then(internData => {
            console.log(internData);
            const{name, id, email, school} = internData;
            const intern = new Intern(name, id, email, school);
            console.log(intern);
            getTeamData();
        })
}

function getEngineerData(){
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
        .then(engineerData => {
            console.log(engineerData);
            const{name, id, email, github} = engineerData;
            const engineer = new Engineer(name, id, email, github);
            console.log(engineer);
            getTeamData();
        })
}

getManagerData();