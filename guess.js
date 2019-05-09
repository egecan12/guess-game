//declare a number let say 67
//get input from user
//if the input smaller than target say it is smaller
//if it is bigger say to the user it is bigger than that
// if it  matches say CONGRADULATION  

var price = Math.floor(Math.random() * 100)+1;
console.log(price);

var btn =document.querySelector('button');
btn.addEventListener('click',decideIfWon);


function cleaner(){

    var guess = document.querySelector('#guessField');
    var lowOrHiMessage = document.querySelector ('#lowOrHi');

    guess.value="";
    lowOrHiMessage.textContent="";
    document.body.style.backgroundColor= "white";

}

function decideIfWon(){

    var guess = document.querySelector('#guessField');
    var lowOrHiMessage = document.querySelector ('#lowOrHi');
    
    if(guess.value>price){

        lowOrHiMessage.textContent= 'Your number is high take something lower :(';
        document.body.style.backgroundColor= "red";
    }
    else if (guess.value<price){

        lowOrHiMessage.textContent= 'It is low but you are close. ';
        document.body.style.backgroundColor= "blue";
    }
    else {

        lowOrHiMessage.textContent= 'Congratulations!';
        document.body.style.backgroundColor= "yellow";
    }
}


var reset = document.querySelector('#reset');
reset.addEventListener('click',resetNumber);

function resetNumber(){

    price =  Math.floor(Math.random() * 100)+1;

    console.log(price);

    cleaner();
}