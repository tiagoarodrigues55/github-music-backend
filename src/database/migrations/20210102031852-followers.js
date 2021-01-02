module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('followers', {
        id: {
          type: Sequelize.INTEGER.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        }, 
        user_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        follow_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
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
    
      return queryInterface.dropTable('followers');

  }
};
