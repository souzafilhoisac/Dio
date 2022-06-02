const CARDS = document.querySelectorAll('.card');
let hasFliperCard = false;
let firstCard, secondCard;

function flipCard(){
    this.classList.add('flip')
    if(!hasFliperCard){
        hasFliperCard = true;
        firstCard = this;
        return;
    }
    secondCard = this;
    hasFliperCard = false;
    checkForMath();
}

function checkForMath(){
    if(firstCard.dataset.card === secondCard.dataset.card){
        disableCards();
        return;
    }
    unflipCard();
}

CARDS.forEach((card) => {
    card.addEventListener('click', flipCard)
})