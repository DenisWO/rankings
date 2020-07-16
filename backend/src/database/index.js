import Sequelize from 'sequelize';
import User from '../app/models/User';
import Ranking from '../app/models/Ranking';
import Item from '../app/models/Item';

import databaseConfig from '../config/database';

const models = [User, Ranking, Item];

class Database {
  constructor(){
    this.init();
  }
  init(){
    this.connection = new Sequelize(databaseConfig);
    models.map(model => model.init(this.connection));
    models.map(model => model.associate && model.associate(this.connection.models))
  }
}

export default new Database();