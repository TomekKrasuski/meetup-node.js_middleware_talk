const express = require('express');
const app = express();
const routes = require('./routes/index');

const middleware = (req, res, next) => {
  console.log('app middleware');
  next();
};

app.use('/', middleware);
app.use(express.static(__dirname + '/public'));

app.use('/route', routes);

app.get('/api/', (req, res) => {
  console.log('app get');
  res.sendStatus(200);
});

app.use((req, res, next) => {
  res.status(404).send('<h1>page not found</h1>');
});
app.listen(3000, () => {
  console.log('listening on port 3000');
});
