import { Model, Sequelize, DataTypes } from 'sequelize'
const sequelize = new Sequelize('postgres://postgres:Tiago2003@localhost:5432/github-music');


class Follower extends Model{
  public id!: number
  public user_id!: number
  public follow_id!: number | null 
 
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

}
Follower.init({
  id: {
    type: DataTypes.INTEGER, // you can omit the `new` but this is discouraged
    autoIncrement: true,
    primaryKey: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  follow_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  }
 
}, {
  sequelize,
  tableName: 'followers',
});


export default Follower