import { Model, Sequelize, DataTypes } from 'sequelize'
const sequelize = new Sequelize('postgres://postgres:Tiago2003@localhost:5432/github-music');


class Post extends Model{
  public id!: number
  public user_id!: number
  public image!: string | null //Preciso tranformar em um array posterior mente
  public video!: string | null
  public audio!: string | null
  public text!: string | null
  public title!: string | null
  public tags!: string | null
  public likes!: string | 0
  public contributors!: string | null
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

}
Post.init({
  id: {
    type: DataTypes.INTEGER, // you can omit the `new` but this is discouraged
    autoIncrement: true,
    primaryKey: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  video: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  audio: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  text: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  tags: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  likes: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  contributors: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  sequelize,
  tableName: 'posts',
});


export default Post