//3state pending,fulfilled,rejected
/*

console.log(typeof ( (resolve,reject) => {
    const error = false;
    if(!error){
        resolve("yes! resolved");
    }else{
        reject("no! rejected");
    }
}));
*/
//console.log(typeof Promise)
const myPromise = new Promise((resolve,reject) => {
    const error = false;
    if(!error){
        resolve("yes! resolved");
    }else{
        reject("no! rejected");
    }
})
//console.log(typeof myPromise);
//console.log(myPromise);//state will output
//console.log(typeof myPromise)

//to get value .dont want state
//thenables is used
//in thenables we can do chain of events
/*
myPromise.then( value => {
    console.log(value);
}).catch(err => {
    console.log(err)
})//if rejected then it directly execute catch

myPromise
.then( value => {
    console.log(value);
})
.then(newvalue =>
    console.log(newvalue)
).catch(err => {
    console.log(err)
})
*/
/*
const nxtPromise = new Promise((resolve,reject) => {
    
    //resolve("next promise");
    setTimeout(function(){
        resolve("nxt promise")
    }, 2000)
    setTimeout(()=> resolve("next promise"), 2000)
})

nxtPromise
.then(value => console.log(value));
myPromise
.then( value => {
    return value
})
.then(newvalue =>
    console.log(newvalue)
).catch(err => {
    console.log(err)
})
//by using .then we can avoid call back hell
//instead of .them now using asych await
*/
//////////////////

//const fetchUser = fetch("https://jsonplaceholder.typicode.com/users").then(resp => console.log(resp));
const fetchUser = fetch("https://jsonplaceholder.typicode.com/users")//below operation waiting untill fetch but console,log is executed
.then(resp => {
    return resp.json();
})
.then(respVlue => {
    console.log(respVlue);
   // respVlue.forEach(element => {
    //    console.log(element);
    //});
})
console.log(fetchUser);

//.then wait still data receive

//to avoid call back hell  promise is used but over here is also looking like call back hell to there is new concept called asynch await