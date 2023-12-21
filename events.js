document.getElementById('rinka').addEventListener('click' , function(e){
    console.log(e);

    e.stopPropagation()
} , false)



// type(mouse and keyboard)
// timestamp , defaultPrevented
// target , toElement , srcElement, currentTarget
// clientX , clientY , screenX , screenY
// altkey , ctrlkey , shiftkey , keycode


// evant propagation 
//

document.querySelector('#images').addEventListener('click' , function(e){
    console.log(e);
})