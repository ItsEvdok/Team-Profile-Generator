const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

function getManagerData(showManagerData) {
    const{name, id, email, officeNumber} = showManagerData;
    const manager = new Manager(name, id, email, officeNumber);
    console.log(manager.getName());
}

function getEngineerData(showEngineerData) {
    const{name, id, email, github} = showEngineerData;
    const engineer = new Engineer(name, id, email, github);
    console.log(engineer.getGithub());
}

function getInternData(showInternData) {
    const{name, id, email, school} = showInternData;
    const intern = new Intern(name, id, email, school);
    console.log(intern.getSchool());
}

module.exports = {
    getManagerData,
    getEngineerData,
    getInternData
};