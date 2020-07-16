import {Model, Sequelize} from 'sequelize';

class Ranking extends Model {
  static init(sequelize){
    super.init({
      id_user: Sequelize.INTEGER,
      title: Sequelize.INTEGER,
    },
    {sequelize, });

    return this;
  }
}

export default Ranking;