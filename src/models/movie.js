import Sequelize from 'sequelize';
import connection from '../config/db';
import Comment from '../models/comment';

const Movie = connection.define('Movie', {
  title: {
    type: Sequelize.STRING,
    unique: true,
  },
  year: {
    type: Sequelize.INTEGER,
  },
  rated: {
    type: Sequelize.STRING,
  },
  released: {
    type: Sequelize.STRING,
  },
  runtime: {
    type: Sequelize.STRING,
  },
  genre: {
    type: Sequelize.STRING,
  },
  director: {
    type: Sequelize.STRING,
  },
  writer: {
    type: Sequelize.STRING,
  },
  actors: {
    type: Sequelize.STRING,
  },
  plot: {
    type: Sequelize.TEXT,
  },
  language: {
    type: Sequelize.STRING,
  },
  country: {
    type: Sequelize.STRING,
  },
  awards: {
    type: Sequelize.STRING,
  },
  poster: {
    type: Sequelize.STRING,
  },
  ratings: {
    type: Sequelize.STRING,
  },
  metascore: {
    type: Sequelize.INTEGER,
  },
  imdbrating: {
    type: Sequelize.FLOAT,
  },
  imdbvotes: {
    type: Sequelize.STRING,
  },
  imdbid: {
    type: Sequelize.STRING,
  },
  type: {
    type: Sequelize.STRING,
  },
  dvd: {
    type: Sequelize.STRING,
  },
  boxoffice: {
    type: Sequelize.STRING,
  },
  production: {
    type: Sequelize.STRING,
  },
  website: {
    type: Sequelize.STRING,
  },
})

Movie.hasMany(Comment, { foreignKey: 'movieId' })

export default Movie;
