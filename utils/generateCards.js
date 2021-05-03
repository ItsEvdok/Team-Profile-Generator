const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

const membersArr = [];

function showManagerData(showManagerData) {

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
        <p> Email: <a href = "mailto: ${manager.email}">${manager.email}</a> </p>
        <p> Office: ${manager.officeNumber} </p>
    </div>
    </div>
    `;
};

const showTeamData = memberArr => {
    
    const interns = memberArr.members.filter(member => member.school)
    const engineers = memberArr.members.filter(member => member.github)

    const templateForInterns = []
    for (let intern of interns) {
        templateForInterns.push(`
                <div class="card">
                <div class="name">
                    <h2> ${intern.name} </h2>
                    <h2> Intern </h2>
                </div>
        
                <div class="info">
                    <p> ID: ${intern.id} </p>
                    <p> Email: <a href = "mailto: ${intern.email}">${intern.email}</a> </p>
                    <p> School: ${intern.school} </p>
                </div>
                </div>
        `)
    }

    const templateForEngineers = []
    for (let engineer of engineers) {
        templateForEngineers.push(`
                <div class="card">
                <div class="name">
                    <h2> ${engineer.name} </h2>
                    <h2> Engineer </h2>
                </div>
        
                <div class="info">
                    <p> ID: ${engineer.id} </p>
                    <p> Email: <a href = "mailto: ${engineer.email}">${engineer.email}</a> </p>
                    <p> Github: <a href:"https://github.com/${engineer.github}">${engineer.github}</a> </p>
                </div>
                </div>
        `)
    }

    return {
        templateForEngineers: templateForEngineers.join(""),
        templateForInterns: templateForInterns.join("")
    }
};

module.exports = templateData => {

    const memberTemplates = showTeamData(templateData)

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
                ${showManagerData(templateData)}
                ${memberTemplates.templateForEngineers}
                ${memberTemplates.templateForInterns}
            </div>
        </main>
    </body>
    </html>
    `;
};