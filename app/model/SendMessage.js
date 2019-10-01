// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var SALT_WORK_FACTOR = 10;
// set up a mongoose model and pass it using module.exports
var SendMenssageSchema = new Schema({

    Name: {
        type: String,
        required: true
    },
    LastName: {
        type: String,
        required: true,
        unique: true
    },
    ContactNumber: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: false
    },
    Subject: {
        type: String,
        required: false,
    },
    MenssageLong: {
        type: String,
        required: true
    }

});


module.exports = mongoose.model('Menssage', SendMenssageSchema);