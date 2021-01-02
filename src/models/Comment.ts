import { Model, Sequelize, DataTypes } from 'sequelize'
const sequelize = new Sequelize('postgres://postgres:Tiago2003@localhost:5432/github-music');


class Comment extends Model{
  public id!: number
  public user_id!: number
  public content!: string | null 
  public post_id!: number | false 
 
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

}
Comment.init({
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
  post_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
 
}, {
  sequelize,
  tableName: 'comments',
});


export default Comment