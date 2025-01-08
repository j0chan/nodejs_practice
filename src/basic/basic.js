var message = "HELLO!";
message.toLowerCase();
// 변수를 메서드처럼 호출하는 것은 불가능하다.
console.log(message);


function flipCoin(){
    // Meant to be Math.random()
    return Math.random < 0.5
}

const value = Math.random() < 0.5 ? "a" : "b"

if(value !== "a"){
    // ...
}
else if(value === "b"){
    // Oops, unreachable
}