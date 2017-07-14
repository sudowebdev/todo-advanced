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

//defining the schema of the table/Model
const Todo = db.define('todo', {
    id: {
	   type: Sequelize.INTEGER,
 	   primaryKey: true,
       autoIncrement: true
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    priority: Sequelize.INTEGER,
});
