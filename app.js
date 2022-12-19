const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true })); //parses the request body

const indexRouter = require('./routes/index.js');
const gameRouter = require('./routes/game.js');
const resultRouter = require('./routes/result.js');

app.use('/', indexRouter);
app.use('/game', gameRouter);
app.use('/result', resultRouter);

const server = app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
});

module.exports = server;