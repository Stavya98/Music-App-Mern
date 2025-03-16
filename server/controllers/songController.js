const Song = require('../models/Song');
const path = require('path');

// Add Song (Admin only)
exports.addSong = async (req, res) => {
    try {
        const { title, artist } = req.body;
        const filePath = req.file.path;

        const song = new Song({ title, artist, filePath });
        await song.save();

        res.status(201).json({ message: 'Song uploaded successfully', song });
    } catch (error) {
        res.status(500).json({ error: 'Failed to upload song' });
    }
};

// Delete Song (Admin only)
exports.deleteSong = async (req, res) => {
    try {
        const { id } = req.params;
        const song = await Song.findByIdAndDelete(id);

        if (!song) return res.status(404).json({ error: 'Song not found' });

        res.status(200).json({ message: 'Song deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete song' });
    }
};

// Get All Songs (Public)
exports.getAllSongs = async (req, res) => {
    try {
        const songs = await Song.find().sort({ createdAt: -1 });
        res.status(200).json(songs);
    } catch (error) {
        res.status(500).json({ error: 'Failed to get songs' });
    }
};
