class Robot { // Members
    // Property(속성) 또는 Field
    private name: string;
    private model: string;
    protected status: string = "Active";

    // Constructor(생성자)
    constructor(name: string, model: string){
        this.name = name;
        this.model = model;
    }

    // Getter (외부에서는 private로 설정된 name에 접근 불가 -> getter로 우회 접근)
    public getName(): string {
        return this.name;
    }
    public getModel(): string {
        return this.model;
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
console.log(r1.getName());
console.log(r2.getModel());
// console.log(r3.status);

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


class User {
    // Field
    username: string;
    email: string;
    job: string = "Student"; // 기본값 지정

    // Constructor
    constructor(username:string, email:string){
        this.username = username;
        this.email = email;
    };

    // Method
    study(): void {
        console.log(`${this.username} is studying.`);
    }
}

// Create Object
let user1 = new User("홍길동", "hong@abcd.co.kr")
let user2 = new User("김철수", "kim@abcd.co.kr")

console.log(user1)
console.log(user2.email)
user1.study();
user2.study();

// Class inheritance
class CleaningRobot extends Robot{ // Members
    // Property(속성) 또는 Field
    cleanigSchedule: string[];

    // Constructor(생성자)
    constructor(name: string, model: string, cleanigSchedule: string[]){
        super(name, model) // 부모 클래스의 멤버를 가리킨다.
        this.cleanigSchedule = cleanigSchedule;
    }

    // Method(행동)
    // override를 통한 메서드 재정의
    override performTask() { 
        console.log(`${this.getName()} is cleaning according to the schdule ${this.cleanigSchedule.join(", ")}.`);
    }
}

class CookingRobot extends Robot { // Members
    // Property(속성) 또는 Field
    avilableMenus: string[];

    // Constructor(생성자)
    constructor(name: string, model: string, avilableMenus: string[]){
        super(name, model);
        this.avilableMenus = avilableMenus;
    }

    // Method(행동)
    // override를 통한 메서드 재정의
    override performTask() {
        console.log(`${this.getName()} is cleaning according to the menus ${this.avilableMenus.join(", ")}.`);
    }
}


// 접근 제어자; Visibility Modifier / Access Modifier
// public, protected, private
// public: 모든 클래스에서 접근 가능(기본값)
// protected: 같은 클래스, 자식 클래스에서 접근 가능
// private: 해당 클래스에서만 접근 가능
let c1 = new CleaningRobot("ABC-1", "Prime", ["Sun", "Mon"])
console.log(c1.cleanigSchedule);
c1.performTask();
console.log(c1.getName())


// Interface: 추상적인 객체 형태 지정
interface UserDTO {
    id: number;
    name: string;
    email: string;
    createAt: Date;
}

// API 응답 형태를 정의하는 경우
interface ApiResponse {
    success: boolean;
    data?: UserDTO;
    message?: string;
}