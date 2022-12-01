const {Sequelize, Model, DataTypes} = require('sequelize')

class Setting extends Model {}

Setting.init({
  // Model attributes are defined here
  eprice: {
    type: DataTypes.FLOAT,
    allowNull: true
  },
  wprice: {
    type: DataTypes.FLOAT,
    allowNull: true
  },
  gprice: {
  	type: DataTypes.FLOAT,
  	allowNull: true
  }
}, {
  timestamps: true,
  sequelize, 
  modelName: 'Setting' 
});


// console.log(Setting === sequelize.models.Setting);
module.exports = {
	Setting
}