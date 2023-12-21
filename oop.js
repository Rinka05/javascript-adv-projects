const user = {
    username:"rinka",
    logincount:4,
    signedIn:true,
    getuserdetail: function(){
        // console.log("got user details from database ")
        // console.log(this)
    }

}
// console.log(user.username);
// console.log(user.getuserdetail())





function User(username , logincount , isloggedin){
    this.username = username ;
    this.logincount = logincount;
    this.isloggedin = isloggedin
    this.greeting = function(){
        console.log(`welcome ${this.username}`)
    }
    return this
}
const user1 = User("rinka" , 12 , true);
const user2 = User("riya" , 11 , true); //use1 hi print hota h
//so
const user3 =new User("tinka" , 10 , true);
console.log(user1)
console.log(user3)