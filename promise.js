//bluebird q(Q) library

//promise is an object representing the eventual completion or failure of an asynchronous operation
// promise takes a call back function 

// promises reduce callback hell (function ke andar function call)
const promiseone = new Promise(function(resolve , reject){
    //do an ASYNC task
    //DB calls , cryptography , network
    setTimeout(function(){
        console.log('async task complete')
        resolve()
    }, 1000);
});

promiseone.then(function(){
    console.log("promise consumed");
})

new Promise(function(resolve , reject){
    setTimeout(function(){
        console.log("async task 2");
        resolve()
    } , 1000)
}).then(function(){
    console.log("async2 resolved")
})

// resolve ke andar agar kuch parameter pass krein to wo mil jata hai 

const promisethree = new Promise(function(resolve , reject){
    setTimeout(function(){
       resolve({username:"rinka",
              email:"rinka@gmail.com"})
    },1000)
})

promisethree.then(function(user){
    console.log(user)
})

//.then chaining jo upar wale .then se value aayegi usko hi use kr skte hain ham 
// in second .then 
// kyuki usko constant bna ke access nhi kar skte hain 


const Promisefour = new Promise(function(resolve , reject){
    setTimeout(function(){
        let error = true ;
        if(!error){
            resolve({username: "rinka" , password:"123"})
        }
        else{
            reject('ERROR:something went wrong ')
        }
    },1000)
})
Promisefour.then((user)=>{
  console.log(user);
  return user.username;
}).then((username)=>{
console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=> console.log("finally"))