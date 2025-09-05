const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../utils/db-connection")

const studentCourses = sequelize.define(

  'studentCourses',{
    id:{
      type:DataTypes.INTEGER,
      autoIncrement:true,
      primaryKey:true,
      allowNull:false
    }
  }

     // Model attributes are defined here

);

// `sequelize.define` also returns the model
// console.log(User === sequelize.models.User); // true
module.exports=studentCourses;