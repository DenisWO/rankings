import Ranking from '../models/Ranking';
import Item from '../models/Item';

class RankingController {
  async store(request, response){
    const id_user = request.userId;
    const {title} = request.body;
    const ranking = await Ranking.create({id_user, title});   
    
    const id_ranking = ranking.id;

    let {items} = request.body;
    const itemsInserted = []
    for (const iterator of items) {
      const {content} = iterator;
      const item = await Item.create({
        id_ranking, content
      });

      itemsInserted.push(item);
    }    
    items = itemsInserted;    
    return response.json({
      ranking,
      items,
    });
  }
}

export default new RankingController();