const { error } = require("console");
const fs = require("fs");
const date = require("date-fns");
const {v4: uuid} = require("uuid");

module.exports.createLog = (message) => { 
    const formatedLogMessage = `${"date: " + date.format(Date.now(), "yyy-MM-dd")}`
    fs.appendFile("./log.txt", `${formatedLogMessage + " " + "id: " + uuid() + " " + "message: " + message}\n`, (error) => (error));
    if(error()) {
        fs.writeFile("./log.txt", "Hello", (error) => (error));
    }
    // calls the uuid() function to generate a new uuid.
}
// fs.writeFile creates a file in ./~ on UNIX/MacOS & C\:~ on Windows
