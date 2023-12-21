class User{
    constructor(username){
        this.username = username

    }
    logme(){
        console.log(`username:${this.username}`);
    }
   static createId(){
        return '123'
    }
    // static is not accesible outside the class
    
}