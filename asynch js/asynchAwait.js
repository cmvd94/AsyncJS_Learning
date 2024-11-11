
//promise we're using variable but in Await we're using function
// normally javascript wont wait for next line of execution. for that we started using call back function after that thenable. but to simply both these procres await is derived 
/*
const awaitFun = () => {
    const fetchUser = fetch("https://jsonplaceholder.typicode.com/users");//if we directly execute js wont wait for fetch.before receiving data it execute all other command .result error 
    const fetchData =  fetchUser.json();
    console.log(fetchData);
    return fetchData;    
}
awaitFun();
*/
/**********************AWAIT*****************************/
//in fun should be async and await should be used for the that need to wait 
/*
const awaitFun = async() => {
    const fetchUser = await fetch("https://jsonplaceholder.typicode.com/users");
    const fetchData = await fetchUser.json();
    console.log("await");
    //console.log(fetchData);
    return fetchData;    
}
awaitFun();
*/
/*****************common mistake***************************/
/*
const storeArray = {
    dataList : []
}

const awaitFun = async() => {
    const fetchUser = await fetch("https://jsonplaceholder.typicode.com/users");
    const fetchData = await fetchUser.json();
    console.log("inside awaitFun");
    console.log(fetchData);
    //console.log(1+1);

    return fetchData;    
}

const copyFun = async() => {
    const recvData = await awaitFun();
    storeArray.dataList = recvData;
    console.log(storeArray);
    return recvData
}

copyFun();
console.log(storeArray.dataList)//wont wait. execute 1st.
//inside function all other command waits
*/
/**************dont use await unneccesarly***************/

/*
const storeArray = {
    dataList : []
}

const awaitFun = async() => {
    const fetchUser = await fetch("https://jsonplaceholder.typicode.com/users");
    const fetchData = await fetchUser.json();
    console.log("inside awaitFun");
    console.log(fetchData);
    copyFun(fetchData);

    return fetchData;    
}
// calling copyFun inside awaitFun avoid another await call.
//results are same
const copyFun =(data) => {
    storeArray.dataList = data;
    console.log(storeArray);
    return data;
}

awaitFun();
console.log(storeArray.dataList)//wont wait. execute 1st.
//inside function all other command waits
*/


/********************fetch****************************/
const fetchMethod = async() => {
    const response = await fetch ("https://icanhazdadjoke.com/",{
        method : "GET",
        headers: {
            Accept : "application/json"
           //Accept : "text/plain"
        }
    })
    const myData = await response.json()
    //const myData = await response.text()
    console.log(myData)
   // postMethod(myData);//to post data
    return myData;
}
fetchMethod();
/******************post*************************/

const postEntryData = {id: 'haahVKZDtrc', joke: "What's red and bad for your teeth? A Brick.", status: 200};
//api defer in different web/server interface below method,header are curent api model to set and get data
const postMethod =  async(postData) =>{
    const entry = await fetch("https://httpbin.org/post",{
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(postData)
    })
    const entryData = await entry.json()
    console.log(entryData)
}
postMethod(postEntryData);


