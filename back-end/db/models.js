const Sequelize = require('sequelize');


const db = new Sequelize('todoadvanced', 'todoadmin', 'todopass', {

	host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 5000
    }

});
