const random_number = parseInt(Math.random() *10 +1);
const submit = document.querySelector('#subt')
const user_input = document.querySelector('#guessfield')
const guess_slot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastresult')

const lowor_hi = document.querySelector('.loworhi')
const startover = document.querySelector('.resultparas');
const p = document.createElement('p')

let prevGuess = [];
let num_guess = 1;
let play_game = true;
if(play_game){
    submit.addEventListener('click' , function(e){
        e.preventDefault();
      const guess = parseInt( user_input.value)
      validate_guess(guess)
    });
}

function validate_guess(guess){
 if(isNaN(guess)){
    alert('please enter a valid number ')
 }
 else if (guess > 100){
    alert( 'please enter a number less than 100')
 }
 else{
    prevGuess.push(guess);
    if(num_guess === 11){
        display_message(`Game over , random number was ${random_number}`)
        end_game()
    }
    else{
        display_guess(guess)
        check_guess(guess)
    }
 }
}
function  check_guess(guess){
 if(guess == random_number){
    display_message("you guessed it right")
    end_game()
 }
 else if(guess < random_number){
    display_message("number is tooo low")
 }
 else{
    display_message("number is too high")
 }
}

function display_guess(guess){
 user_input.value = ''
 guess_slot.innerHTML += `${guess}`;
  num_guess++;
  remaining.innerHTML = `${11-num_guess}`
}
function display_message(message){
  lowor_hi.innerHTML = `<h2>${message}</h2>`;
}

function new_game(){
  user_input.value = '';
  user_input.setAttribute('disabled' , '');
  p.classList.add('button');
  p.innerHTML = `<h2 id = "newGame>start a new game</h2>`
  startover.appendChild(p);
  play_game = false;
  new_game();
}
function end_game(){

}