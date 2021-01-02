module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('posts', {
        id: {
          type: Sequelize.INTEGER.UNSIGNED, // you can omit the `new` but this is discouraged
          autoIncrement: true,
          primaryKey: true,
        },
        user_id: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
        },
        title: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        image: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        video: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        audio: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        text: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        likes:{
          type: Sequelize.INTEGER
        },
        contributors:{
          type: Sequelize.STRING
        },
        tags:{
          type: Sequelize.STRING
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
        }
      });
    
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.dropTable('posts');

  }
};
