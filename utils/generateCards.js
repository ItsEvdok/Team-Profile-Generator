const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

function getManagerData(showManagerData) {
    const{name, id, email, officeNumber} = showManagerData;
    const manager = new Manager(name, id, email, officeNumber);
    console.log(manager);

    return `
    <div class="card">
    <div class="name">
        <h2> ${manager.name} </h2>
        <h2> Manager </h2>
    </div>

    <div class="info">
        <p> ID: ${manager.id} </p>
        <p> Email: ${manager.email} </p>
        <p> Office: ${manager.officeNumber} </p>
    </div>
    </div>
    `;
};

function getEngineerData(showEngineerData) {
    if(!showEngineerData) {
        return '';
    }
    const{name, id, email, github} = showEngineerData;
    const engineer = new Engineer(name, id, email, github);
    console.log(engineer.getGithub());

    return `
    <div class="card">
    <div class="name">
        <h2> ${engineer.name} </h2>
        <h2> Manager </h2>
    </div>

    <div class="info">
        <p> ID: ${engineer.id} </p>
        <p> Email: ${engineer.email} </p>
        <p> GitHub: ${engineer.github} </p>
    </div>
    </div>
    `;
};

function getInternData(showInternData) {
    if(!showInternData) {
        return '';
    }
    const{name, id, email, school} = showInternData;
    const intern = new Intern(name, id, email, school);
    console.log(intern.getSchool());

    return `
    <div class="card">
    <div class="name">
        <h2> ${intern.name} </h2>
        <h2> Manager </h2>
    </div>

    <div class="info">
        <p> ID: ${intern.id} </p>
        <p> Email: ${intern.email} </p>
        <p> School: ${intern.school} </p>
    </div>
    </div>
    `;
};

module.exports = {
    getManagerData,
    getEngineerData,
    getInternData
};