// server/index.js
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/', (req, res) => {
  res.render('index', { botStatus: 'online' });
});

app.get('/ping', (req, res) => {
  res.status(200).send('Pong!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
