import express from 'express';
import Movie from '../models/movie';
import Comment from '../models/comment';
import r2 from 'r2';
import omdb from '../config/omdb';
import keysToLowerCase from '../helpers/keysToLowerCase';
import sqs from 'sequelize-querystring';
import _ from 'lodash';

const router = express.Router();

router.post('/', async (req, res) => {
  const { title } = req.body;

  if (_.isEmpty(title)) {
    return res.send('Please enter movie title');
  }

  const movieDataRes = await r2(`${omdb.host}/?t=${title}&${omdb.key}`).json;
  const movieData = keysToLowerCase(movieDataRes);

  const error = movieData && movieData.response === 'False' ? movieData.error : null;
  if (error) {
    return res.send(error);
  }

  const existingMovie = await Movie.findOne({
    where: { title: movieData.title }
  });

  if (existingMovie) {
    return res.send('The movie is already exist in database');
  }

  const movie = await Movie.create({
    ...movieData,
    ratings: JSON.stringify(movieData.ratings),
  })

  return res.send(movie);
});

router.get('/', async (req, res) => {
  const queries = req.query;

  const movies = await Movie.findAll({
    where: queries.filter ? sqs.find(queries.filter) : {},
    order: queries.sort ? sqs.sort(queries.sort) : [],
    include: [Comment]
  });

  res.send(movies);
});

export default router;
