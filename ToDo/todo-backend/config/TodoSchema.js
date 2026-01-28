const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    title: { type: String, required: true },
    desc: { type: String }
});


module.exports = mongoose.model('Todo', TodoSchema);
