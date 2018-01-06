var mongoose = require("mongoose");

var ArticleSchema = new mongoose.Schema ({
    title: {
        type: String,
        required: true
    },
    URL: {
        type: String,
        required: false
    },
    summary: {
        type: String,
        required: false
    }
});

var Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;