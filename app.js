const express = require('express');
const os = require('os');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.json({message: "Response from", hostname: os.hostname()});
});

app.listen(port, () => {
    console.log(`server running on port ${port}`);
});