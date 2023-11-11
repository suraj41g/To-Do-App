const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema(
    {
        taskTitle: {
            type: String,
            required: true
        },
        taskDescription : {
            type: String,
            required: true
        },
        priority: {
            type:String,
            enum : ["High","Medium","Low"]
        },//dueDate : Date,
        status: String
    }, { timestamps: true });

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;