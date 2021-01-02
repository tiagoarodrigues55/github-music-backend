import express from 'express'

import UserController from './controllers/UserController'
import PostController from './controllers/PostController'
import NotificationController from './controllers/NotificationController'
import CommentController from './controllers/CommentController'
import FollowerController from './controllers/FollowerController'

const routes = express.Router()
const userController = new UserController()
const postController = new PostController()
const notificationController = new NotificationController()
const commentController = new CommentController()
const followerController = new FollowerController()
// const pointsController = new PointsController()
// const itensController = new ItensController()
routes.get('/', (req,res)=>{
  res.json({
    eai: "eai"
  })
})
routes.get('/users', userController.index)
routes.get('/users/:id', userController.indexId)
routes.post('/users', userController.store)
routes.post('/posts', postController.store)
routes.get('/posts', postController.index)
routes.get('/userPosts/:user_id', postController.indexUserPosts)
routes.post('/notifications', notificationController.store)
routes.get('/notifications', notificationController.index)
routes.put('/readNotification/:notificationId', notificationController.readNotification)
routes.get('/userNotifications/:user_id', notificationController.indexUserNotifications)
routes.post('/comments', commentController.store)
routes.get('/comments', commentController.index)
routes.get('/postComments/:postId', commentController.indexPostComments)
routes.post('/followers', followerController.store)
routes.get('/followers', followerController.index)
routes.get('/userFollowers/:user_id', followerController.indexFollowers)
routes.post('/eai', (req, res)=>{
  const {id, name, email} = req.body
  const usuario ={
    id,
    name,
    email
  }
  //cadastrar um usuario
  return res.json(usuario)
})

export default routes