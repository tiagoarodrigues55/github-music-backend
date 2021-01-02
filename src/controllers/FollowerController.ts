import Follower from '../models/Follower'
import {Request, Response} from 'express'

class FollowerController {
  async index(req: Request, res: Response){
    const followers = await Follower.findAll()
    return res.json(followers) 
  }
  async indexId(req: Request, res: Response){
    const { FollowerId } = req.params

    const follower = await Follower.findByPk(FollowerId)
    return res.json(follower)
}
  async indexFollowers(req: Request, res: Response){
    const { user_id } = req.params

    const followers = await Follower.findAll()
    const userFollowers = []
    for(let i of followers){
      if(i.user_id === Number(user_id)){
        userFollowers.push(i)
      }
    }
    return res.json(userFollowers)
}
async store(req: Request, res: Response) {
  const { user_id, follow_id} = req.body

  const follower = await Follower.create({  user_id, follow_id})

  return res.json(follower)
}
}
export default FollowerController