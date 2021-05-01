const fs = require('fs');
const { rejects } = require('assert');
const { resolve } = require('path');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./src/index.html', fileContent, err => {
            if(err){
                reject(err);
                return;
            }

            resolve({
                ok:true,
                message: 'Cards Generated!'
            });
        });
    });
};

module.exports = writeFile;