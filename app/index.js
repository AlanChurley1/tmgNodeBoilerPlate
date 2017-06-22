const express = require('express');
const path = require('path');

const serveName = require('./routes/serveName.js');


const app = express();
const port = process.env.PORT || 3000;

//serve static assets folder
app.use('/static', express.static(path.join(__dirname, 'static')));

// respond with "hello world" when a GET request is made to the homepage
app.get('/', serveName);

app.get('/name/:userId', serveName)

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});