const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

function getManagerData(showManagerData) {
    if (!showManagerData) {
        return '';
    }

    const{name, id, email, officeNumber} = showManagerData;
    const manager = new Manager(name, id, email, officeNumber);

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

    return `
    <div class="card">
    <div class="name">
        <h2> ${engineer.name} </h2>
        <h2> Engineer </h2>
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

    return `
    <div class="card">
    <div class="name">
        <h2> ${intern.name} </h2>
        <h2> Intern </h2>
    </div>

    <div class="info">
        <p> ID: ${intern.id} </p>
        <p> Email: ${intern.email} </p>
        <p> School: ${intern.school} </p>
    </div>
    </div>
    `;
};

function templateData(data) {
    console.log(data, 'Template data');
    const {managerData, teamData} = data;
    // dataArr.push(data);
    // console.log(dataArr, 'dataArr');

    // const{manager, engineer, intern} = data;
    // console.log(manager, engineer, intern);

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./style.css">
        <title>Team Portfolio Generator</title>
    </head>
    <body>
        <header class="header">
            <h1> Team Portfolio Generator</h1>
        </header>

        <main>
            <div id="container" class="container">
                ${getManagerData(managerData)}
                ${getEngineerData(teamData)}
            </div>
        </main>
    </body>
    </html>
    `;
};

module.exports = {
    getManagerData,
    getEngineerData,
    getInternData,
    templateData
};