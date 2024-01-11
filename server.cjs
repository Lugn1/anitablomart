const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');

const app = express();

// Serve the static files from the Vue app
app.use('/', serveStatic(path.join(__dirname, 'dist')));

// Handle SPA
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
