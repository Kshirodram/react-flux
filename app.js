import express from 'express';

import {renderer} from './components';

const app = express();
app.use(express.static('dist'));

app.set('view engine', 'ejs');
app.set('views', `${__dirname}/public`);

app.get('/', (req, res) => {
  const reactDOM = renderer();
  res.status(200).render('index', {
    body: reactDOM
  });
});

app.listen(8080, () => {
  console.log('Example app listening on port 8080!');
});
