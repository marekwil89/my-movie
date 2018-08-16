import express from 'express';
import Comment from '../models/comment';
import Movie from '../models/movie';
import _ from 'lodash';
const router = express.Router();

router.post('/', async (req, res) => {
  const { movieId, text } = req.body;

  if (_.isEmpty(text)) {
    return res.send('comment text is empty');
  }

  const movie = await Movie.findOne({
    where: { id: movieId }
  });

  if (!movie) {
    return res.send('cannot find movie with this id');
  }

  const comment = await Comment.create({
    movieId,
    text,
  })
  return res.send(comment);
});

router.get('/', async (req, res) => {
  const { movieId } = req.query;

  const comments = await Comment.findAll({
    where: movieId ? {
      movieId
    } : {},
  });
  res.send(comments);
});

export default router;
