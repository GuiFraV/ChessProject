const express = require('express');
const request = require('request');

const app = express();

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});

app.get('/api', (req, res) => {
    request('https://api.chess.com/pub/player/spicyraow', (error, response, body) => {
      res.send(body);
    });
});