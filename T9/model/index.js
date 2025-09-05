const Student=require("./students");
const Idcard=require("./idcard");


Student.hasOne(Idcard);
Idcard.belongsTo(Student);

module.exports={Student,Idcard};