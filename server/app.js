const express = require('express');
const mongoose = require('mongoose');
const fileRoutes = require('./routes/fileRoutes');

const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost:27017/fileupload', { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/files', fileRoutes); // Use the exported router correctly

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
