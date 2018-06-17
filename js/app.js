/*
 * Create a list that holds all of your cards
 */
var cards = ['far-gem', 'far-gem',
  'far-paper-plane', 'far-paper-plane',
  'fas-flash', 'fas-flash',
  'far-cube', 'far-cube',
  'far-leaf', 'far-leaf',
  'far-bicycle', 'far-bicycle',
  'far-anchor', 'far-anchor',
  'far-bomb', 'far-bomb',
];
const startTime = performance.now(); // start time to calculate the total load time

function reload(){
 location.reload();
}

const result = document.querySelector(".result"); //for result slide which comes at the end of the game

const stars = document.querySelector(".stars"); //3 Stars

const firstStar = stars.querySelectorAll("i")[0];

const secondStar = stars.querySelectorAll("i")[1];

const thirdStar = stars.querySelectorAll("i")[2];

const repeat = document.querySelector(".fa-repeat");

const timer = document.querySelector(".timer");

let secs = 0;

let mins = 0;

let secsFirstZero = 0;

let minsFirstZero = 0;

let timerBoolean = true;

const deck = document.querySelector(".deck");

let openCards = [];

let matchedCards = [];

repeat.addEventListener("click", reload);

let moves = 0;

let numOfMoves = document.querySelector(".moves");

function generateCard(card) {
  return '<li class="card" data-card="${card}"><i class="fa ${card}"></i></li>';
}
/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
function initGame() {
    var deck = document.querySelector('.deck');
  
    var cardHTML = shuffle(cards).map(function(card) {
      return generateCard(card);
    });
  
    deck.innerHTML = cardHTML.join("");
  
  };
  
  
  initGame();
  
  const allCards=document.querySelectorAll(".card");
  
  let currentOpenCards = 0;
  
  allCards.forEach(function(card) {
    card.addEventListener('click', function(e) {
  
      if (!card.classList.contains('open') && !card.classList.contains('show') && !card.classList.contains('match'));
      openCards.push(card);
      card.classList.add('open', 'show');
  
  
      if (openCards.length == 2) {
        if (openCards[0].dataset.card == openCards[1].dataset.card) {
          openCards[0].classList.add('match');
          openCards[0].classList.add('open');
          openCards[0].classList.add('show');
  
          openCards[1].classList.add('match');
          openCards[1].classList.add('open');
          openCards[1].classList.add('show');
  
          openCards = [];
        } else {
  
  
  
  
          setTimeout(function() {
            openCards.forEach(function(card) {
              card.classList.remove('open', 'show');
            });
  
            openCards = [];
          }, 1000);
        }
  
  
      }
    });
  });
