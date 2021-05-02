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

const showMemberData = memberArr => {
    const {members} = memberArr;
    for(i = 0; i < members.length; i++){
        if(members[i].school){
            return showInternData(members[i]);
        } else if(members[i].github){
            return showEngineerData(members[i]);
        }
    }
};

function showInternData(members) {
    const{name, id, email, school} = members;
    const intern = new Intern(name, id, email, school);
    console.log(intern);

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

function showEngineerData(members) {
    const{name, id, email, github} = members;
    const engineer = new Engineer(name, id, email, github);
    console.log(engineer);

    return `
    <div class="card">
    <div class="name">
        <h2> ${engineer.name} </h2>
        <h2> Engineer</h2>
    </div>

    <div class="info">
        <p> ID: ${engineer.id} </p>
        <p> Email: ${engineer.email} </p>
        <p> GitHub: ${engineer.github} </p>
    </div>
    </div>
    `;
};

module.exports = templateData => {
    console.log(templateData, 'Template data');

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
                ${getManagerData(templateData)}
                ${showMemberData(templateData)}
            </div>
        </main>
    </body>
    </html>
    `;
};