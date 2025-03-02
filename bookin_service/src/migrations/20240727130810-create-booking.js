'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('bookings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fightId: {
        type: Sequelize.STRING,
        allowNull:false
      },
      userId: {
        type: Sequelize.STRING,
        allowNull:false
      },
      status: {
        type: Sequelize.ENUM,
        allowNull:false,
        values:['InProcess','Booked','Cancelled'],
        defaultValue:'InProcess'},
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('bookings');
  }
};