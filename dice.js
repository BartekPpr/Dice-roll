let allDice = ['1.jpg',  '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg'];
let outcome = document.querySelector('#outcome');

function Roll(){
    let draw = Math.floor(Math.random() * allDice.length);
    outcome.src = allDice[draw];
}
    
   
