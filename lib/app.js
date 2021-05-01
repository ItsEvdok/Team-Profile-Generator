const inquirer = require('inquirer');
const { getManagerData, getInternData, getEngineerData, templateData } = require('../utils/generateCards');
// const templateData = require('../utils/generateCards');
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
        .then(getTeamData());
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
        ])
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
}

// const generateTemplate = async () => {
//     const managerInfo = await managerData().then(data => data)

//     const teamDataInfo = await getTeamData().then(data => data.answer === "Engineer" ? engineerData() : internData())

//     console.log(teamDataInfo, 'HEREEEEE')


//     const finalTemplate = templateData({
//         managerData: managerInfo,
//         teamData: teamDataInfo
//     })

//     writeFile(finalTemplate)
// }

// generateTemplate()

// managerData()
// .then(getTeamData)
// .then(data => {
//     return templateData(data);
// }).then(pageHtml => {
//     console.log(pageHtml);
//     return writeFile(pageHtml);
// })

// .then(teamData => {
//     console.log(teamData)
//     return teamData;
// })
// .then(pageData => {
//     return writeFile(templateData(pageData));
// })