import { Sequelize, DataTypes, Model } from 'sequelize'
import { HasManyGetAssociationsMixin, HasManyAddAssociationMixin, HasManyHasAssociationMixin, Association, HasManyCountAssociationsMixin, HasManyCreateAssociationMixin } from 'sequelize';
import Post from './Post'
const sequelize = new Sequelize('postgres://postgres:Tiago2003@localhost:5432/github-music');


class User extends Model {
  public id!: number
  public name!: string
  public username!: string
  public email!: string
  public password!: string
  public image!: string | null
  public number!: string | null
  public description!: string | null
  public tags!: string | null
  public followers!: number | 0
  public following!: number | 0

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  public getPosts!: HasManyGetAssociationsMixin<Post>; // Note the null assertions!
  public addPost!: HasManyAddAssociationMixin<Post, number>;
  public hasPost!: HasManyHasAssociationMixin<Post, number>;
  public countPosts!: HasManyCountAssociationsMixin;
  public createPost!: HasManyCreateAssociationMixin<Post>;
  public static associations: {
    Posts:Association<User, Post>;
  }
}
 User.init({
  id: {
    type: new DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: new DataTypes.STRING,
    allowNull: false,
  },
  username: {
    type: new DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: new DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: new DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: new DataTypes.STRING,
    allowNull: true
  },
  image: {
    type: new DataTypes.STRING,
    allowNull: true
  },
  tags: {
    type: new DataTypes.STRING,
    allowNull: true
  },
  number: {
    type: new DataTypes.STRING,
    allowNull: true
  },
  followers: {
    type: new DataTypes.NUMBER,
    allowNull: true
  },
  following: {
    type: new DataTypes.NUMBER,
    allowNull: true
  },
}, {
  tableName: 'users',
  sequelize: sequelize, // this bit is important
});
User.hasMany(Post, {
  sourceKey: 'id',
  foreignKey: 'user_id',
  as: 'posts' // this determines the name in `associations`!
});

export default User