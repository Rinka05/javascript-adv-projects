class User{
    constructor(username){
        this.username = username
    }
    logme(){
        console.log(`Username is ${this.username}`)
    }
}


class teacher extends User{
    constructor(username , email , password){
        super(username)
        this.email= email
        this.password = password
    }
    addcourse(){
        console.log(`A new course was added by ${this.username}`)
    }
}

const course = new teacher("rinka" , "rinka@gmail.com" ,"12345")
course.addcourse()
course.logme()


const chai = new teacher("chai" , "chai@gmail.com"  , "1234")
// console.log(chai === course)
console.log(chai instanceof User)   //true