import Notification from '../models/Notification'
import {Request, Response} from 'express'

class NotificationController {
  async index(req: Request, res: Response){
    const notifications = await Notification.findAll()
    return res.json(notifications) 
  }
  async indexId(req: Request, res: Response){
    const { notificcationId } = req.params

    const notification = await Notification.findByPk(notificcationId)
    return res.json(notification)
}
  async indexUserNotifications(req: Request, res: Response){
    const { user_id } = req.params

    const notifications = await Notification.findAll()
    const userNotifications = {read: [], unread: []}
    for (let i of notifications){
      if(i.user_id === Number(user_id)){
        if(i.status === true){
        userNotifications.read.push(i)
      }else{
        userNotifications.unread.push(i)
      }
    }
  }
    return res.json(userNotifications)
}
async store(req: Request, res: Response) {
  const { user_id, content, status} = req.body

  const notification = await Notification.create({  user_id, content, status})

  return res.json(notification)
}
async readNotification(req: Request, res: Response) {
  const { notificationId} = req.params

  const notification = await Notification.update({status: true}, {where:{id: notificationId}})

  return res.json(notification)
}
}
export default NotificationController