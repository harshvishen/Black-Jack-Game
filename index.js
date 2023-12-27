let player={
    name: "Per",
    chips: 145
}

let cards=[]
let Sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

let messageEl=document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl=document.getElementById("cards-el")




let playerEl=document.getElementById("player-el")
playerEl.textContent = player.name+ ": $"+ player.chips


function getRandomCard(){
    let randomNumber= Math.floor(Math.random()*13)+1
    if(randomNumber===1) return 11
    else if(randomNumber>10) return 10
    else return randomNumber
}

function startGame(){
    isAlive=true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard,secondCard]
    Sum=firstCard+ secondCard

    renderGame()
}



function renderGame(){
    cardsEl.textContent = "Cards: " 
    for(let i=0;i<cards.length;i++){
        cardsEl.textContent += cards[i]+" "
    }
    sumEl.textContent="Sum: "+ Sum
    if(Sum <= 20){
        message = "Do you want to draw a new card?"
    }
    else if (Sum == 21){
        message="wohoo! You've got BlackJack!"
        hasBlackJack=true
    }
    else{
        message = "You're out of the game!"  
        isAlive=false
    }
    messageEl.textContent = message
}

function newCard(){

    if(isAlive===true && hasBlackJack===false){

        let card=getRandomCard()
        Sum+=card
        cards.push(card)
        renderGame()
    }
   
   

}