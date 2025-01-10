// Generics
// Echo Command
// 아래와 같이 각 타입 별 메서드를 구현한다면, 너무 많은 메서드를 정의해야 한다.
function identity(arg) {
    return arg;
}
function identity2(arg) {
    return arg;
}
function identity3(arg) {
    return arg;
}
// any타입은 타입 검증의 목적을 달성하기 어려움.
function identityAnyType(arg) {
    arg = "10";
    return arg;
}
var arg = 10;
identityAnyType(arg);
// 비효율적인 코드 해결 방법
// Use Generics
function identityWithGenerics1(arg) {
    return arg;
}
// Use Generics general version "T"
function identityWithGenerics2(arg) {
    return arg;
}
// Use Generics multiple version "T" + "U"
function identityWithGenerics3(arg1, arg2) {
    return [arg1, arg2];
}
// Type이라는 키워드가 해당 함수 내 동일한 키워드들을 통일시킨다.
var input = [10, 9, 8];
var result = identityWithGenerics(input);
console.log("Type of input: " + typeof input);
console.log("Type of result: " + typeof result);
console.log("Result of using generics: " + result);
var result2 = identityWithGenerics3(20, "Hello");
console.log(result2);
// 간단 테스트 패턴(given-when-then 패턴) 연습
function identityWithGenerics(arg) {
    return arg;
}
// 어떤 input이 들어오던지 허용하도록 any 사용
function isNumber(value) {
    return typeof value === "number" && !isNaN(value);
}
function isString(value) {
    return typeof value === "string";
}
// [given] - 테스트 데이터 준비
var testValue1 = 20;
var testValue2 = "HI";
var testValue3 = [1, 20];
// [when1] - 테스트 실행부
var numberIdentity = identityWithGenerics(testValue1);
// [then1] - 테스트 검증부
console.log("Input type is: ".concat(typeof testValue1));
console.log("Output type is: ".concat(typeof numberIdentity));
console.log("Is number: ".concat(isNumber(numberIdentity))); // true 예측
// [when2] - 테스트 실행부
var stringIdentity = identityWithGenerics(testValue2);
// [then2] - 테스트 검증부
console.log("Input type is: ".concat(typeof testValue2));
console.log("Output type is: ".concat(typeof stringIdentity));
console.log("Is string: ".concat(isString(stringIdentity))); // true 예측
// [when3] - 테스트 실행부
var arrayIdentity = identityWithGenerics(testValue3);
// [then3] - 테스트 검증부
console.log("Input type is: ".concat(typeof testValue3));
console.log("Output type is: ".concat(typeof arrayIdentity));
console.log("Is array: ".concat(Array.isArray(arrayIdentity))); // true 예측
