var mongoose = require("mongoose");

var UserSchema = new mongoose.Schema ({
    _id: {
        type: 'String',
        required: true
    },
    Name: {
        type: 'String',
        required: true
    },
    Article_id: {
        type: 'String',
        required: true
    },
    Comment: {
        type: 'String',
        required: false
    }
});

var User = mongoose.model("User", UserSchema);

module.exports = User;  