const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Room = new Schema({
    name: { type: String, maxLength: 255 },
    price: { type: Number },
    size: { type: Number },
    capacity: { type: Number },
    bed: { type: String },
    view: { type: String },
    service: { type: String },
    per: { type: String },
    description: { type: String, maxLength: 600 },
    slud: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Room', Room);
