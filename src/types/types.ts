// The primitives (원시 타입)
const str: string = "Hello" // string
const num: number = 10 // number
const bool: boolean = true; // boolean

console.log(str.length) // 5
console.log(str.toUpperCase()) // HELLO

// String, Number, Boolean 은 타입 명시법과 다르니 주의
const wrapperStr = new String(num) // number 타입의 num을 string으로 변경

