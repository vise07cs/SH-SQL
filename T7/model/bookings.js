const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../utils/db-connection")

const Bookings = sequelize.define(

  'Bookings',

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
    bus_name: {
      type: DataTypes.STRING,
      allowNull: false
      // allowNull defaults to true
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false
      
    }
  }
);

// `sequelize.define` also returns the model
// console.log(User === sequelize.models.User); // true
module.exports=Bookings