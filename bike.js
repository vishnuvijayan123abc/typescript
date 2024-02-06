var PassionPro = /** @class */ (function () {
    function PassionPro(name) {
        this.name = name;
    }
    PassionPro.prototype.drive = function () {
        console.log(this.name, "drive method");
    };
    return PassionPro;
}());
var Hunter = /** @class */ (function () {
    function Hunter(name) {
        this.name = name;
    }
    Hunter.prototype.drive = function () {
        console.log(this.name, "drive method");
    };
    return Hunter;
}());
var Person = /** @class */ (function () {
    function Person(vechile) {
        this.vechileobj = vechile;
    }
    Person.prototype.drive = function () {
        this.vechileobj.drive();
    };
    return Person;
}());
var hunterobj = new Hunter("hunter");
var personobj = new Person(hunterobj);
personobj.drive();
