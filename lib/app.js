const inquirer = require('inquirer');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');

function Team() {
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
        })
}

Team();