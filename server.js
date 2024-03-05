const express = require('express');
const path = require('path');
const history = require('connect-history-api-fallback');
const app = express();

app.use(history({
    disableDotRule: true,
    verbose: true
}));

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const port = process.env.PORT || 80; // You can choose any port
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
