const Student=require("./students");
const Idcard=require("./idcard");
const Department=require("./department");

// one to one relationship
Student.hasOne(Idcard);
Idcard.belongsTo(Student);


// one to many relationship
Department.hasMany(Student);
Student.belongsTo(Department);

module.exports={Student,Idcard,Department};