const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
    title: { type: String, required: true },
    artist: { type: String, required: true },
    filePath: { type: String, required: true },  // location of the song file
}, { timestamps: true });

module.exports = mongoose.model('Song', songSchema);
