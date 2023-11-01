// How to Create a Promise 

// Pending Stage
var promise = new Promise(() => {
  });

console.log(promise);

// Fulfill Stage
var promise = new Promise((resolve, reject) => {
  resolve("Fulfilled");
});

console.log(promise);

// Rejected stage

var promise = new Promise((resolve, reject) => {
    reject("something went wrong");
});
  
console.log(promise);

var promise = new Promise((resolve, reject) => {
   setTimeout(() => {
    resolve("Success");
   }, 3000);
});
 

// Access the data
promise.then((data) => {
    console.log(data);
});


// If promise is  not fullfiled it call the particular catch
promise.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log('error', error);
});
