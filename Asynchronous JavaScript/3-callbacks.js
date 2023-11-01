//  A callback is a function ,which can be passed as an arguments to other function, which basically invoked sometime later in future
// It is basically used to complete some sort of routines and the sequence of actions

function greet(name, callback) {
    console.log(`hi ${name}`);
    callback();
}

function askQuestion() {
    console.log("How are you");
}

greet('Hello', askQuestion);