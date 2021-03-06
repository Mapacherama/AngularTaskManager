const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 4,
        trim: true
    },
    _listId: {
        type: mongoose.Types.ObjectId,
        required: true
    }
});

const Task = mongoose.model('Task', taskSchema);

module.exports = { Task };