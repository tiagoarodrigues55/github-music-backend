import Post from '../models/Post'
import User from '../models/User'
import {Request, Response} from 'express'

class PostController{
  async index(req: Request, res: Response){
    const posts = await Post.findAll()
    return res.json(posts)
  }
  async indexId(req: Request, res: Response){
    const { post_id } = req.params

    const post = await Post.findByPk(post_id)
    return res.json(post)
}
  async indexUserPosts(req: Request, res: Response){
    const { user_id } = req.params

    const posts = await Post.findAll()
    const userPosts = []
    for(let i of posts){
      if(i.user_id === Number(user_id)){
        userPosts.push(i)
      }
    }
    return res.json(userPosts)
}
async store(req: Request, res: Response) {
  const { video, audio, image, text, user_id, title, tags, likes, contributors } = req.body

  const post = await Post.create({ video, audio, image, text, user_id, title, tags, likes, contributors })

  return res.json(post)
}

}
export default PostController
