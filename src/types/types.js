// The primitives (원시 타입)
var str = "Hello"; // string
var num = 10; // number
var bool = true; // boolean
console.log(str.length); // 5
console.log(str.toUpperCase()); // HELLO
// String, Number, Boolean 은 타입 명시법과 다르니 주의
var wrapperStr = new String(num); // number 타입의 num을 string으로 변경
// Array
// ㅡ배열의 초기화 방법ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
var arrayOfNumbers1;
arrayOfNumbers1 = [5];
arrayOfNumbers1 = [5, 10, 30];
// 최종: [5, 10, 30]
console.log(arrayOfNumbers1[0]); // 5
console.log(arrayOfNumbers1[1]); // 10
console.log(arrayOfNumbers1[2]); // 30
// 같은 역할
var arrayOfNumbers2;
arrayOfNumbers2 = [6];
arrayOfNumbers2 = [6, 8, 20];
console.log(arrayOfNumbers2[2]); // 20
// 해당 타입 요소만 허용되는 배열 = 튜플
// let singleNumberTuple: [number, string, boolean]
// singleNumberTuple = [5, "hello", true]
// 함수의 명시적 타입 선언 (매개변수 / parameter)
function greeter(name) {
    return "Hello, " + name;
}
console.log(greeter("Tom"));
// 객체 타입
var car = {
    color: 'red',
    model: 'Sedan',
    manufacturer: 'Toyota',
};
console.log(car.color);
// 구분자를 , 또는 ; 로 사용할 수 있음
function printOutput(pt) {
    console.log("The X value is : " + pt.x + "\nThe Y value is : " + pt.y);
}
// 객체의 선택적 속성 지정 방법
function printName(user) {
    if (user.last != undefined) {
        console.log("Your First name is " + user.first.toUpperCase());
        console.log("Your Last name is " + user.last.toUpperCase());
    }
    else {
        console.log("Your name is " + user.first.toLowerCase());
    }
}
printName({ first: "Bob", });
