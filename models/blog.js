// Step 1 : Require mongoose module
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Step 2 : Create a schema with table details.
const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
}, { timestamps: true});


// Step 3 : Create model and export
const Blog = mongoose.model('Blog', blogSchema); //Here name of variable is important.
module.exports = Blog;