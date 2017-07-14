const express = require('express');

const app = express();

const indexRouter = require('./routes');

app.use('/api', indexRouter);

app.listen(3333, ()=>{
	console.log('Listening on port 3333');
})