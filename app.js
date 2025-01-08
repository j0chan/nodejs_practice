console.log("Hello!!!");
// data type
var a = 10; // number
var b = "5"; // String
var c = true; // boolean
// 참조형 변수(주소값을 참조하고, 실제값은 다른 곳에 있음 -> object type으로 인식)
var d = [1, 2, 3, 4]; // number array
var e = { name: "Tom", age: 35 }; // object
// 자동 타입 변환
b = "5";
// 값을 기준으로 타입을 자동으로 지정한다.
console.log("a = " + a + ", type of " + typeof (a));
console.log("b = " + b + ", type of " + typeof (b));
console.log("c = " + c + ", type of " + typeof (c));
console.log("d[0] = " + d[0] + ", type of " + typeof (d));
console.log("e.name = " + e.name + "\ne.age = " + e.age + ", type of " + typeof (e));
// 예시
var columnLength = 10; // 길이를 number로 지정
// ..개발 진행 과정..
// ..개발 진행 과정..
// ..개발 진행 과정..
// ..개발 진행 과정..
columnLength = 30; // 실수로 잘못된 타입으로 변경
// ..개발 진행 과정..
// ..개발 진행 과정..
// ..개발 진행 과정..
// ..개발 진행 과정..
var addLength = columnLength + 5;
var meterLength = addLength / 100;
// ..개발 진행 과정..
// ..개발 진행 과정..
// ..개발 완료
console.log(addLength);
console.log(meterLength);
