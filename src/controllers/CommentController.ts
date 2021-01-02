import Comment from '../models/Comment'
import {Request, Response} from 'express'

class CommentController {
  async index(req: Request, res: Response){
    const comments = await Comment.findAll()
    return res.json(comments) 
  }
  async indexId(req: Request, res: Response){
    const { commentId } = req.params

    const comments = await Comment.findByPk(commentId)
    return res.json(comments)
}
  async indexPostComments(req: Request, res: Response){
    const { postId } = req.params

    const comments = await Comment.findAll()
    const postComments = []
    for(let i of comments){
      if(i.post_id === Number(postId)){
        postComments.push(i)
      }
    }
    return res.json(postComments)
}
async store(req: Request, res: Response) {
  const { user_id, content, post_id} = req.body

  const comments = await Comment.create({  user_id, content, post_id})

  return res.json(comments)
}
}
export default CommentController