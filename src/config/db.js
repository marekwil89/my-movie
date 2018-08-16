import Sequelize from 'sequelize';

const connection = new Sequelize('heroku_5424f66cbdd2f71', 'b91b7865dddfa9', 'f7e1b81a', {
  host: 'us-cdbr-iron-east-01.cleardb.net',
  dialect: 'mysql',
});

export default connection;
