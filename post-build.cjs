const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, 'dist', 'index.html');

fs.readFile(indexPath, 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    const result = data.replace('<script type="module" src="/src/main.js"></script>', '');

    fs.writeFile(indexPath, result, 'utf8', (err) => {
        if (err) console.error(err);
    });
});
