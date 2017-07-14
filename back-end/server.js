const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const indexRouter = require('./routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api', indexRouter);

app.listen(3333, ()=>{
	console.log('Listening on port 3333');
})