const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://mongo:27017/mydb', { useNewUrlParser: true });

app.get('/', (req, res) => res.send('Hello from Node.js!'));
app.listen(3000, () => console.log('Server running on port 3000'));
