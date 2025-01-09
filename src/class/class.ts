class Robot { // Members
    // Property(속성) 또는 Field
    name: string;
    model: string;
    status: string = "Active";

    // Constructor(생성자)
    constructor(name: string, model: string){
        this.name = name;
        this.model = model;
    }

    // Method(행동)
    performTask(task: string){
        console.log(`${this.name} is performing ${task}.`);
    };

    updateStatus(newStatus:string){
        this.status = newStatus;
        console.log(`${this.name}'s status is now ${this.status}.`)
    };
}

// Creat Instance of the Robot class
let r1 = new Robot("TaekwonV", "R1")
let r2 = new Robot("Optimus", "R2")
let r3 = new Robot("ET", "R3")

// Accesing fields and Calling Methods
console.log(r1.name);
console.log(r2.model);
console.log(r3.status);

r1.performTask("설거지");
r2.performTask("빨래");
r3.updateStatus("Sleeping");

// No-args Constructor
class Pet{
    category: string = "cat";
    name: string = "Chu";

    // 기본 생성자
    // constructor(){};
};

let p1 = new Pet();
console.log(p1.category);
console.log(p1.name);