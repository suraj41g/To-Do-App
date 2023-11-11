const express = require('express');
const {addTodo,readTodo,updateTodo,deleteTodo} = require('../controllers/todoController')
const router = express.Router();


// post request
router.route('/addTodo').post(addTodo);

// get request
router.route('/readTodo').get(readTodo);

// put request
router.route('/updateTodo/:id').put(updateTodo);

// delete request
router.route('/deleteTodo/:id').delete(deleteTodo);



module.exports = router;