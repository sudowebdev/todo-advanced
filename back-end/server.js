const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const indexRouter = require('./routes');


app.use('/api', indexRouter);

app.listen(3333, ()=>{
	console.log('Listening on port 3333');
})