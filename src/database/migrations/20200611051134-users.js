module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('users', {
        id: {
          type: Sequelize.INTEGER.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        }, 
        username: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        description: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        image: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        number: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false
        },
       
        password: {
          type: Sequelize.STRING
        },
        followers: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        following: {
          type: Sequelize.INTEGER,
          allowNull: false
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
    
      return queryInterface.dropTable('users');

  }
};
