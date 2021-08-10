const fs = require('fs');
const path = require('path')
    /*
    fs.mkdir(path.join(__dirname, 'notes'), (err) => {
        if (err) { throw new Error(err) }

        console.log("Folder is Created!")
    })

    */

const newLocal = fs.writeFile(path.join(__dirname, 'notes', 'mynotes.txt'),
    'Hello World',
    (err) => {
        if (err) { throw err; }
        console.log("File was Created!");

        fs.appendFile(path.join(__dirname, 'notes', 'mynotes.txt'),
            'From appendFile',
            (err) => {
                if (err) { throw err; }
                console.log("File was Changed!");
            }
        );
    }
);

fs.readFile(
    path.join(__dirname, 'notes', 'mynotes.txt'),
    'utf-8',
    (err, data) => {
        if (err) { throw err; }
        console.log(data);
    }
)