const express = require('express');
const router = express.Router(); // Use express.Router() directly

const mongoose = require('mongoose');

const File = mongoose.model('File', {
  name: String,
  data: Buffer,
  contentType: String,
});

// Endpoint to retrieve a specific file by ID
router.get('/:id', async (req, res) => {
  try {
    const fileId = req.params.id;

    const file = await File.findById(fileId);

    if (!file) {
      return res.status(404).json({ error: 'File not found' });
    }

    // Set response headers to specify content type and disposition
    res.setHeader('Content-Type', file.contentType);
    res.setHeader('Content-Disposition', `attachment; filename=${file.name}`);

    // Send the file data
    res.send(file.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router; // Export the router directly
