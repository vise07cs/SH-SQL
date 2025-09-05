const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../utils/db-connection")

const Courses = sequelize.define(

  'Courses',

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
    }
 
  }
);

// `sequelize.define` also returns the model
// console.log(User === sequelize.models.User); // true
module.exports=Courses;