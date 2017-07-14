const router = require('express').Router();

const todoRouter = require('./todo');


router.use('/todo', todoRouter);

module.exports = router;