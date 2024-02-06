var Django = /** @class */ (function () {
    function Django(name, architecture) {
        this.name = name;
        this.architecture = architecture;
    }
    Django.prototype.roadmap = function () {
        console.log(this.name, "is a ", this.architecture, "framework");
    };
    return Django;
}());
var Anguar = /** @class */ (function () {
    function Anguar(name, architecture) {
        this.name = name;
        this.architecture = architecture;
    }
    Anguar.prototype.roadmap = function () {
        console.log(this.name, "is a ", this.architecture, "framework");
    };
    return Anguar;
}());
var Student = /** @class */ (function () {
    function Student(framework) {
        this.frameworkobj = framework;
    }
    Student.prototype.learn = function () {
        this.frameworkobj.roadmap();
    };
    return Student;
}());
var djangoobj = new Django("django", "mvt");
var studentobj = new Student(djangoobj);
studentobj.learn();
