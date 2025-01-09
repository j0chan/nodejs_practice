var Robot = /** @class */ (function () {
    // Constructor(생성자)
    function Robot(name, model) {
        this.status = "Active";
        this.name = name;
        this.model = model;
    }
    // Method(행동)
    Robot.prototype.performTask = function (task) {
        console.log("".concat(this.name, " is performing ").concat(task, "."));
    };
    ;
    Robot.prototype.updateStatus = function (newStatus) {
        this.status = newStatus;
        console.log("".concat(this.name, "'s status is now ").concat(this.status, "."));
    };
    ;
    return Robot;
}());
// Creat Instance of the Robot class
var r1 = new Robot("TaekwonV", "R1");
var r2 = new Robot("Optimus", "R2");
var r3 = new Robot("ET", "R3");
// Accesing fields and Calling Methods
console.log(r1.name);
console.log(r2.model);
console.log(r3.status);
r1.performTask("설거지");
r2.performTask("빨래");
r3.updateStatus("Sleeping");
