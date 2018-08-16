import express from 'express';
import bodyParser from 'body-parser';
import connection from './src/config/db';
import moviesController from './src/controllers/moviesController';
import commentsController from './src/controllers/commentsController';

connection.sync();

const app = express();

app.get('/', (req, res) => res.send('default route'))

app.use(bodyParser.urlencoded({
  extended: true
}))
app.use('/movies', moviesController);
app.use('/comments', commentsController);

app.listen(process.env.PORT || 5000, () => console.log(`app is running`));
