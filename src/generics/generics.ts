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
function identityWithGenerics<Type>(arg: Type):Type {
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