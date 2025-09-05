const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../utils/db-connection")

const IdCard = sequelize.define(

  'IdCard',

     // Model attributes are defined here

  {
    id:{
      type:DataTypes.INTEGER,
      autoIncrement:true,
      primaryKey:true,
      allowNull:false
    },
   
    cardNo: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    }
 
  }
);

// `sequelize.define` also returns the model
// console.log(User === sequelize.models.User); // true
module.exports=IdCard;