const express = require('express');
const path = require('path');
const history = require('connect-history-api-fallback');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(history({
    disableDotRule: true,
    verbose: true
}));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const port = process.env.PORT || 80;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
