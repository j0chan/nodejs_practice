// Generics

// Echo Command
// 아래와 같이 각 타입 별 메서드를 구현한다면, 너무 많은 메서드를 정의해야 한다.
function identity(arg: number):number {
    return arg;
}

function identity2(arg: string):string{
    return arg;
}

function identity3(arg: boolean):boolean{
    return arg;
}

// any타입은 타입 검증의 목적을 달성하기 어려움.
function identityAnyType (arg: any): any {

    arg = "10";
    return arg;
}
let arg = 10;
identityAnyType(arg)


// 비효율적인 코드 해결 방법
// Use Generics
function identityWithGenerics1<Type>(arg: Type):Type {
    return arg;
}

// Use Generics general version "T"
function identityWithGenerics2<T>(arg: T):T {
    return arg;
}

// Use Generics multiple version "T" + "U"
function identityWithGenerics3<T, U>(arg1:T, arg2:U):[T,U] {
    return [arg1, arg2];
}



// Type이라는 키워드가 해당 함수 내 동일한 키워드들을 통일시킨다.
let input = [10,9,8];
const result = identityWithGenerics(input);
console.log("Type of input: " + typeof input);
console.log("Type of result: " + typeof result);
console.log("Result of using generics: " + result);

const result2 = identityWithGenerics3(20, "Hello");
console.log(result2)



// 간단 테스트 패턴(given-when-then 패턴) 연습
function identityWithGenerics<Type>(arg: Type):Type {
    return arg;
}
// 어떤 input이 들어오던지 허용하도록 any 사용
function isNumber(value: any){
    return typeof value === "number" && !isNaN(value);
}
function isString(value: any){
    return typeof value === "string";
}

// [given] - 테스트 데이터 준비
const testValue1: number = 20;
const testValue2: string = "HI";
const testValue3: number[] = [1, 20];

// [when1] - 테스트 실행부
const numberIdentity = identityWithGenerics(testValue1);
// [then1] - 테스트 검증부
console.log(`Input type is: ${typeof testValue1}`);
console.log(`Output type is: ${typeof numberIdentity}`);
console.log(`Is number: ${isNumber(numberIdentity)}`);  // true 예측

// [when2] - 테스트 실행부
const stringIdentity = identityWithGenerics(testValue2);
// [then2] - 테스트 검증부
console.log(`Input type is: ${typeof testValue2}`);
console.log(`Output type is: ${typeof stringIdentity}`);
console.log(`Is string: ${isString(stringIdentity)}`);  // true 예측

// [when3] - 테스트 실행부
const arrayIdentity = identityWithGenerics(testValue3);
// [then3] - 테스트 검증부
console.log(`Input type is: ${typeof testValue3}`);
console.log(`Output type is: ${typeof arrayIdentity}`);
console.log(`Is array: ${Array.isArray(arrayIdentity)}`); // true 예측