// export 후, 여러 곳에서 이 모듈에 접근 가능

// 4 basic operating functions
function add(a:number, b:number):number {
    return a + b;
}
function sub(a:number, b:number):number {
    return a - b;
}
function mul(a:number, b:number):number {
    return a * b;
}
// 정의하면서 export도 가능
export function div(a:number, b:number):number {
    return a / b;
}

export {add, sub, mul}