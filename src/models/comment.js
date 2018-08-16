import Sequelize from 'sequelize';
import connection from '../config/db';

const Comment = connection.define('Comment', {
  movieId: {
    type: Sequelize.INTEGER,
  },
  text: {
    type: Sequelize.STRING,
  },
})

export default Comment;
