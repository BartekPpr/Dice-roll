
let allDice = ['1.jpg',  '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg'];
let img = document.querySelectorAll('img');

function Roll(){
    let total = 0;
    let dice = [];
    let imgHolder = document.createElement('span');
    
    img.forEach(img =>{
    let roll = Math.floor(Math.random() * allDice.length);
    img.src = allDice[roll];                    //ROLLING DICE
    total += (roll +1);

    dice.push(roll +1);   //SAVING ROLLED DICE INSIDE AN ARRAY

    let rolledDice = document.createElement('img');
    rolledDice.src = allDice[roll];                  //SAVING IMG OF DICE RESPECTIVELY
    rolledDice.style.height = '35px';

    imgHolder.append(rolledDice);  
    })

    let li = document.createElement('li');
    li.style.margin = '5px';
    li.style.fontSize = '47px';

    li.innerHTML = `You rolled: `;
    li.append(imgHolder);   //DISPLAYING ROLLED DICE 
    li.innerHTML += ` </b>${dice.join(' ')}</b> respectively. You scored <b>${total}</b> total!`;
    document.querySelector('ul').append(li);
    li.scrollIntoView({block: "end"}); //PRETTY SELF EXPLANATORY
    
}
