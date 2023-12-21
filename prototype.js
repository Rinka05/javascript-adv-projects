function createuser(username , score){
    this.username = username;
    this.score = score;

    return this;
}

createuser.prototype.increment = function(){
    score++;
}
createuser.prototype.printme = function(){
    console.log(`score is ${this.score}`)
}

const rinka = new createuser("rinka" , 12)
const shashank = new createuser("shashank" , 15)
/// new key word nhi use kiya to wo values baar baar overwrite ho rhi hai 

console.log(rinka);
console.log(shashank);
rinka.printme()


/* WHAT HAPPENS WHEN A NEW KEYWORD IS USED
 a new object is created : the new keyword intitiates the creation of a new javascript object
 
 a prototype is linked : the newly created objects gets linked to 
 the prototype property of the constructor function . this means that it has access to 
 properties and functions defined on the constructors prototype



 the constructor is called : the constructor function is called with the specified arguments and this is bound to 
 the newly created object . if no explicit return value is specified from the constructor  .
  javascript assumes this. the newly created object , to be the intended return value


  the new object is returned : after the constructor function has been called . if it doesn't return a non-primitive values 
  (object , array , function , etc.), the newly created object is returned

*/



