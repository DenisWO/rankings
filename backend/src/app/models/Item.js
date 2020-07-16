import {Model, Sequelize} from 'sequelize';

class Item extends Model {
  static init(sequelize){
    super.init({
      id_ranking: Sequelize.INTEGER,
      content: Sequelize.STRING,
    }, {sequelize, });

    return this;
  }
}

export default Item;