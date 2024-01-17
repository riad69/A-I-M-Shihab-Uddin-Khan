const express = require('express');
const mongoose = require('mongoose');
const fileRoutes = require('./routes/fileRoutes');

const app = express();
const port = 3000;


mongoose.connect('mongodb://localhost:27017/fileupload', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());

app.use('/files', fileRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});