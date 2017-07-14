const express = require('express');

const app = express();


app.get('/', (req, res)=>{
	res.send('Hello To-Do');
})
app.listen(3333, ()=>{
	console.log('Listening on port 3333');
})