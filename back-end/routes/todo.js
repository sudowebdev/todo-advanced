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

router.post('/new', (req, res) => {

	Todo.create({ title: req.body.title, priority: req.body.priority })
	  .then((todo) => {
	  	res.status(200).send(todo);
	  })
	  .catch((err) => {
	  	console.log("Error: ", err)
	  	res.status(500).send("There was an error creating todo");
	  }) 
})


router.put('/:id', (req, res) => {
	Todo.update(
  		{ title: req.body.title },
  		{ where: { id: req.params.id } }
	)
    .then((noOfRowsModified) => {
    	res.status(200).send(noOfRowsModified);
    })
    .catch((err) => {
    	console.log("Error: ", err);
   	 	res.status(500).send("There was an error updating todo");
    })
})


router.delete('/:id', (req, res) => {
	Todo.destroy({ where: { id: req.params.id } })
		.then((response) => {
			res.status(200).send("Success");
		})
		.catch((err) => {
			console.log("Error: ", err);
   	 		res.status(500).send("There was an error deleting todo");
		})
})

module.exports = router;