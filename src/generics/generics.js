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
function identityWithGenerics(arg) {
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
