//javascripts normally works sychronous. it execute code line by line.
//even console.log is not belong to javascript. its a programming language set support from different API.
//browser has console, so it use web api.. normal syntax is window.console.log

//javascript build by google. chrome has v8 engine(javascript engine)

//normal execution //sych execution
console.log("first");
console.log("second");
console.log("third");

//making javascript to run asych
console.log("first");
//set timeout
setTimeout(()=>console.log('second'),2000);//this is initimate browser to wait
console.log("third");