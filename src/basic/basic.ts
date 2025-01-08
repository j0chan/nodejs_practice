const message = "HELLO!"
// Accessing the property 'toLowerCase'
// on 'message' and the calling it
message.toLowerCase()
// Calling 'message'
// message();


const announcement = "Hello World!"

announcement.toLowerCase

// Hoe quickly can you spot the types?
// announcement.toLocaleLowercase();
// announcement.toLocalLowerCase();

// We probably meant to write this...
announcement.toLocaleLowerCase();

function flipCoin(){
    // Meant to be Math.random()
    return Math.random() < 0.5
}

const value = Math.random() < 0.5 ? "a" : "b"
if(value == "a"){
    // ...
}
else if(value === "b"){
    // Oops, unreachable
}

// 1. 추론적 타입 지정
let x = 3;
// x = [0, 1, null];

class Animal{}

class Rhino extends Animal {
    hasHorn: boolean = true;
}

class Elephant extends Animal{
    hasTrunk: boolean = true;
}

class Snake extends Animal{
    hasLegs: boolean = false;
}

let zoo = [new Rhino(), new Elephant(), new Snake()]
// Animal[] 추론 추측, 그러나 다른 타입이 지정됨.

// 2. 명시적 타입 지정(Explict Types)
function greet(person: string, date: Date) {
    console.log(`hello ${person}, today is ${date}!`)
}

greet("Brendan", new Date())