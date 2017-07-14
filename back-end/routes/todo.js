const router = require('express').Router();


router.get('/', (req, res) => {
	res.send('You are on /api/todo');
})


module.exports = router;