const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let Phone = new Schema({
    name: {
        type: String
    },
    img: {
        type: String
    },
    display: {
        type: String
    },
    processor: {
        type: String
    },
    ram: {
        type: String
    },
    battery: {
        type: String
    },
    storage: {
        type: String
    },
    RearCamera: {
        type: String
    },
    FrontCamera: {
        type: String
    },
    purchaseLink: {
        type: String
    },
});

module.exports = mongoose.model("Phone", Phone);