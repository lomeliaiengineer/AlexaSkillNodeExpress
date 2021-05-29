const express = require('express');
const ngrok = require('ngrok');

const app = express();
const port = process.env.PORT || 3000;

app.use('/alexa', require('./routes/alexaRoute'));

app.listen(port, async() => {
    const url = await ngrok.connect(port);
    console.log(url);
})