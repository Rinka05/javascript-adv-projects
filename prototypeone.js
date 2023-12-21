let myname = "rinka      "
console.log(myname.trim().length)



let heropower = {
    thor: "hammer",
    spiderman: "sling",
    getspiderpower: function(){
        console.log(`spidy power is ${this.spiderman}`)
    }
}

Object.prototype.rinka = function(){
    // console.log(`rinka is present in all objects`)
}

Array.prototype.heyrinka  = function(){
    // console.log('rinka say hello')
}

heropower.rinka();
heropower.heyrinka()


// hierarchy 
// fnction 

// array             object     [null]

// string 




// every object has its own instance
const user = {
    name : "rinka",
    email:"rinka@gmail.com"
}

const Teachingsupport = {
    isavailable : true
}

const TA = {
    makeassignment : "js assignment",
    fulltime:true,
    __proto__: Teachingsupport
}


