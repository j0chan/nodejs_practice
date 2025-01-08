console.log("Hello!!!")

// data type
let a:number = 10; // number
let b:string = "5"; // String
let c:boolean = true; // boolean
// 참조형 변수(주소값을 참조하고, 실제값은 다른 곳에 있음 -> object type으로 인식)
let d:number[] = [1,2,3,4]; // number array
let e:Person = {name : "Tom", age: 35}; // object

interface Person { // 인터페이스를 통한 명시적 타입 지정
    name: string;
    age: number;
}

// 자동 타입 변환
b = '5'

// 값을 기준으로 타입을 자동으로 지정한다.
console.log("a = " + a + ", type of " + typeof(a))
console.log("b = " + b + ", type of " + typeof(b))
console.log("c = " + c + ", type of " + typeof(c))
console.log("d[0] = " + d[0] + ", type of " + typeof(d))
console.log("e.name = " + e.name + "\ne.age = " + e.age + ", type of " + typeof(e))

// 예시
let columnLength = 10; // 길이를 number로 지정
// ..개발 진행 과정..
// ..개발 진행 과정..
// ..개발 진행 과정..
// ..개발 진행 과정..
columnLength = 30; // 실수로 잘못된 타입으로 변경
// ..개발 진행 과정..
// ..개발 진행 과정..
// ..개발 진행 과정..
// ..개발 진행 과정..
let addLength = columnLength + 5;
let meterLength = addLength/100;
// ..개발 진행 과정..
// ..개발 진행 과정..
// ..개발 진행 과정..
// ..개발 진행 과정..
// ..개발 완료
console.log(addLength)
console.log(meterLength)


// ㅡ메서드 타입 안정화ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
function add(x:number, y:number):string { // 파라미터 타입 명시 必
    a = x + y;
    let msg:string = "Sample msg"
    return msg;
}

const obj = {width: 10, height: 15};
const area = obj.width * obj.height;