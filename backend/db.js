const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect("mongodb+srv://kingoftypos:kingoftypos@cluster0.qjs9xtk.mongodb.net/")
.then(() => console.log("Connected to MongoDB"))
.catch(error => console.error("MongoDB connection error:", error));

// Define todo schema
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: {
        type: Boolean,
        default: false
    }
});

// Define Todo model
const todo = mongoose.model('todo', todoSchema);

module.exports = {
    todo
};
