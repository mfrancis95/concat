var fs = require("fs");

function concat(files) {
    return new Promise(resolve => {
        var data = "";
        for (var file of files) {
            data += fs.readFileSync(file).toString();
        }
        resolve(data);
    });
}

module.exports = concat;
