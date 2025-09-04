const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../utils/db-connection")

const Users = sequelize.define(

  'Users',

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
    email: {
      type: DataTypes.STRING,
      allowNull: false
      // allowNull defaults to true
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }
);

// `sequelize.define` also returns the model
// console.log(User === sequelize.models.User); // true
module.exports=Users