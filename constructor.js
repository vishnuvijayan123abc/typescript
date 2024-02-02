var student = /** @class */ (function () {
    function student(roll, name, course) {
        this.roll = roll;
        this.name = name;
        this.course = course;
    }
    student.prototype.printdetails = function () {
        console.log(this.roll, this.name, this.course);
    };
    return student;
}());
var st = new student("wehf", "arun", "python");
st.printdetails();
