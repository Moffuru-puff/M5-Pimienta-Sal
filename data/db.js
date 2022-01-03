let fs = require('fs');
const path = require('path');


module.exports = {
    getMenu: JSON.parse(fs.readFileSync(path.join(__dirname, "/menu.json"), "utf-8")),
    
}