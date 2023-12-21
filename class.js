//ES 6
class user{
    constructor(username , email , password){
        this.username = username
        this.email = email
        this.password = password

    }
    encryptpassword(){
        return `${this.password}abc`
    }
    changeusername(){
        return `${this.username.toUppercase()}`
    }
}

const rinka = new user("rinka" , "rinka@gmail.com", "123")
console.log(rinka.encryptpassword());
console.log(rinka.changeusername());


