const Todo = require('../models/todoModel')

// create 
/* {"taskTitle": "",
"taskDescription" : "",
"priority" : "",
"dueDate" : "",
"status" : ""}
*/
async function addTodo(req, res) {
    const { taskTitle, taskDescription, priority, status } = req.body;
    try {
        // create new todo
        const newTodo = await new Todo({
            taskTitle, taskDescription, priority, status
        });

        // save todo
        const added = await newTodo.save();
        return res.status(201).json({ message: "To-Do added successfully", addedTodo: added })

    } catch (error) {

        return res.status(500).json({ message: "TO-Do not added", error })
    }
}


// read
async function readTodo(req, res) {
    const { taskTitle } = req.query;
    // console.log(taskTitle)
    try {
        const existingTodo = await Todo.findOne({ taskTitle })
        if (!existingTodo)
            return res.status(404).json({ message: "Todo not found by the given Title" })
        else {
            return res.status(200).json(existingTodo)

        }
    } catch (error) {
        return res.status(500).json({ message: "cannot get ToDo", error })
    }
}

// update
async function updateTodo(req, res) {
    const id = req.params.id;
    // console.log(id)
    try {
        const updateExistingTodo = await Todo.findById(id)
        if (!updateExistingTodo) {
            res.status(404).json({ message: "TodoId not found" })
        } else {
            const { taskTitle, taskDescription, priority, status } = req.body;
            updateExistingTodo.taskTitle = taskTitle,
                updateExistingTodo.taskDescription = taskDescription,
                updateExistingTodo.priority = priority,
                updateExistingTodo.status = status

            await updateExistingTodo.save();
            res.status(200).json({ message: "To-do has been updated", updatedTodo: updateExistingTodo })
        }

    } catch (error) {
        return res.status(500).json({ message: "cant update the Todo", error: error.message })
    }
};

// delete
async function deleteTodo(req, res) {
    const id = req.params.id;
    // console.log(id);
    try {
        const deleteExistingTodo = await Todo.findByIdAndDelete(id)
        if(!deleteExistingTodo){
           return res.status(404).json({message:"todoId not found"})
        }else{

           return res.status(201).json({message:"To-do has been deleted successfully",deleteExistingTodo})
        }
        
    } catch (error) {
        return res.status(500).json({message:"can't delete todo",error: error.message})
    }
}


module.exports = { addTodo, readTodo, updateTodo, deleteTodo };