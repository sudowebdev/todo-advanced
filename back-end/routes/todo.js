const router = require('express').Router();

const Todo = require('../db/models').models.Todo;

router.get('/', (req, res) => {
	Todo.findAll({})
	.then((todos) => {
		res.status(200).send(todos);
	})
	.catch((err) => {
		console.log("Error retrieving todos: ", err);
		res.status(500).send("There was an error retrieving todos");
	})
})


module.exports = router;