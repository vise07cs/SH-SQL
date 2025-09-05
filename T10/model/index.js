const Student=require("./students");
const Idcard=require("./idcard");
const Department=require("./department");
const Courses=require("./courses");
const studentCourses=require("./studentCourses");

// one to one relationship
Student.hasOne(Idcard);
Idcard.belongsTo(Student);


// one to many relationship
Department.hasMany(Student);
Student.belongsTo(Department);



// many to many relationship
Student.belongsToMany(Courses,{through:studentCourses});
Courses.belongsToMany(Student,{through:studentCourses});


module.exports={Student,Idcard,Department,Courses,studentCourses};
