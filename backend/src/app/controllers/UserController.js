import User from '../models/User';

class UserController {
  async store(request, response){
    const userExists = await User.findOne({ where: { email: request.body.email }});
    if(userExists){
      return response.status(400).json({error: 'User already exists!'});
    }

    const {id, name, email} = await User.create(request.body);

    return response.json({id, name, email});
  }

  async update(request, response){
    const user = await User.findByPk(request.userId);
    if(!user){
      return response.status(400).json({error: 'User not found!'});
    }

    const {email} = request.body;
    if (email != user.email) {
      if (await (User.findOne({where: {email}}))){
        return response.status(400).json({error: 'Email already used by another user!'});
      }
    }

    const {id, name} = await user.update(request.body);

    return response.json({id, name, email});
  }
}

export default new UserController();