var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Robot = /** @class */ (function () {
    // Constructor(생성자)
    function Robot(name, model) {
        this.status = "Active";
        this.name = name;
        this.model = model;
    }
    // Getter (외부에서는 private로 설정된 name에 접근 불가 -> getter로 우회 접근)
    Robot.prototype.getName = function () {
        return this.name;
    };
    Robot.prototype.getModel = function () {
        return this.model;
    };
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
console.log(r1.getName());
console.log(r2.getModel());
// console.log(r3.status);
r1.performTask("설거지");
r2.performTask("빨래");
r3.updateStatus("Sleeping");
// No-args Constructor
var Pet = /** @class */ (function () {
    function Pet() {
        this.category = "cat";
        this.name = "Chu";
        // 기본 생성자
        // constructor(){};
    }
    return Pet;
}());
;
var p1 = new Pet();
console.log(p1.category);
console.log(p1.name);
var User = /** @class */ (function () {
    // Constructor
    function User(username, email) {
        this.job = "Student"; // 기본값 지정
        this.username = username;
        this.email = email;
    }
    ;
    // Method
    User.prototype.study = function () {
        console.log("".concat(this.username, " is studying."));
    };
    return User;
}());
// Create Object
var user1 = new User("홍길동", "hong@abcd.co.kr");
var user2 = new User("김철수", "kim@abcd.co.kr");
console.log(user1);
console.log(user2.email);
user1.study();
user2.study();
// Class inheritance
var CleaningRobot = /** @class */ (function (_super) {
    __extends(CleaningRobot, _super);
    // Constructor(생성자)
    function CleaningRobot(name, model, cleanigSchedule) {
        var _this = _super.call(this, name, model) || this; // 부모 클래스의 멤버를 가리킨다.
        _this.cleanigSchedule = cleanigSchedule;
        return _this;
    }
    // Method(행동)
    // override를 통한 메서드 재정의
    CleaningRobot.prototype.performTask = function () {
        console.log("".concat(this.getName(), " is cleaning according to the schdule ").concat(this.cleanigSchedule.join(", "), "."));
    };
    return CleaningRobot;
}(Robot));
var CookingRobot = /** @class */ (function (_super) {
    __extends(CookingRobot, _super);
    // Constructor(생성자)
    function CookingRobot(name, model, avilableMenus) {
        var _this = _super.call(this, name, model) || this;
        _this.avilableMenus = avilableMenus;
        return _this;
    }
    // Method(행동)
    // override를 통한 메서드 재정의
    CookingRobot.prototype.performTask = function () {
        console.log("".concat(this.getName(), " is cleaning according to the menus ").concat(this.avilableMenus.join(", "), "."));
    };
    return CookingRobot;
}(Robot));
// 접근 제어자; Visibility Modifier / Access Modifier
// public, protected, private
// public: 모든 클래스에서 접근 가능(기본값)
// protected: 같은 클래스, 자식 클래스에서 접근 가능
// private: 해당 클래스에서만 접근 가능
var c1 = new CleaningRobot("ABC-1", "Prime", ["Sun", "Mon"]);
console.log(c1.cleanigSchedule);
c1.performTask();
console.log(c1.getName());
