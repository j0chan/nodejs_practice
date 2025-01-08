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
