const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../utils/db-connection")

const Buses = sequelize.define(

  'Buses',

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
    total_seats: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    available_seats: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  
  }
);

// `sequelize.define` also returns the model
// console.log(User === sequelize.models.User); // true
module.exports=Buses