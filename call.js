function setusername(username){
    this.username = username
    console.log("called")
}


function createuser(username , email , password){
  setusername.call(username)
 this.email = email;
 this.password = password
}

const rinka = new createuser("rinka" , "rinka@gmail.com" "12345")
console.log(rinka);

