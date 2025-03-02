'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  booking.init({
    fightId: {type:DataTypes.STRING,
      allowNull:false
    },
    userId: {type:DataTypes.STRING,
      allowNull:false
    },
    status: {type:DataTypes.ENUM,
      allowNull:false,
      values:['InProcess','Booked','Cancelled'],
      defaultValue:'InProcess'
    }
  }, {
    sequelize,
    modelName: 'booking',
  });
  return booking;
};