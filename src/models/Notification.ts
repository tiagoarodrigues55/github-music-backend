import { Model, Sequelize, DataTypes } from 'sequelize'
const sequelize = new Sequelize('postgres://postgres:Tiago2003@localhost:5432/github-music');


class Notification extends Model{
  public id!: number
  public user_id!: number
  public content!: string | null 
  public status!: boolean | false 
 
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

}
Notification.init({
  id: {
    type: DataTypes.INTEGER, // you can omit the `new` but this is discouraged
    autoIncrement: true,
    primaryKey: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  content: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  status: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
 
}, {
  sequelize,
  tableName: 'notifications',
});


export default Notification