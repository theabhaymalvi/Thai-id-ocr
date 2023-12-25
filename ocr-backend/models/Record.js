const mongoose = require("mongoose");

const recordSchema = new mongoose.Schema({
    id_no: 
    {
        type: String,
    },
    name:
    {
        type: String,
    },
    last_name:
    {
        type: String,
    },
    date_of_birth:
    {
        type: String,
    },
    date_of_issue:
    {
        type: String,
    },
    date_of_expiry:
    {
        type: String,
    },
    status:
    {
        type: Boolean,
        default: false,
    }
});

module.exports = mongoose.model("record", recordSchema);