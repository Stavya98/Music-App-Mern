const express = require('express');
const router = express.Router();

// Dummy route
router.get('/', (req, res) => {
    res.send('Playlist routes coming soon...');
});

module.exports = router;
