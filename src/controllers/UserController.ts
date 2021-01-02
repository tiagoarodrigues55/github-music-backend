import User from '../models/User'
import {Request, Response} from 'express'

class UserController {
  async index(req: Request, res: Response){
    const users = await User.findAll()
    return res.json(users) 
  }
  async indexId(req: Request, res: Response){
    const { user_id } = req.params

    const user = await User.findByPk(user_id)
    return res.json(user)
}
async store(req: Request, res: Response) {
  const { name, email, password, image, description, username, number, tags, followers, following } = req.body

  const user = await User.create({ name, email, password, image, description, username, number, tags, followers, following })

  return res.json(user)
}
}
export default UserController