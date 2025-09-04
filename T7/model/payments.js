const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../utils/db-connection")

const Payments = sequelize.define(

  'Payments',

     // Model attributes are defined here

  {
    id:{
      type:DataTypes.INTEGER,
      autoIncrement:true,
      primaryKey:true,
      allowNull:false
    },
   
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    amount: {
      type: DataTypes.FLOAT,
      allowNull: false
  },
  
    date: {
      type: DataTypes.DATE,
      allowNull: false
  }
}
);

// `sequelize.define` also returns the model
// console.log(User === sequelize.models.User); // true
module.exports=Payments