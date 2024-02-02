var Employee = /** @class */ (function () {
    function Employee() {
    }
    Employee.prototype.setemployee = function (code, salary, name, department) {
        this.code = code;
        this.salary = salary;
        this.name = name;
        this.department = department;
    };
    Employee.prototype.printdetails = function () {
        console.log(this.code, this.name, this.department, this.salary);
    };
    return Employee;
}());
var obj = new Employee();
obj.setemployee("steuhh", 55555, "varun", "hr");
obj.printdetails();
