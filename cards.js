  const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
  const values = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king'];
  let deck = [];
  let playerHandFt = [];
  let playerValueFt = 0;
  let playerHandSt = [];
  let playerValueSt = 0;
  let hitCount= 0;



  // Create the deck of cards
  for (let suit in suits) {
    for (let value in values) {
      deck.push({ value: values[value], suit: suits[suit] });
    }
  }

  // Shuffle the deck of cards
  deck = deck.sort(() => Math.random() - 0.5);

  // Display the deck of cards
 //   const deckElement = document.getElementById('deck');
  const playerCardElement = document.getElementById('player-card-ft')
  const playerHandElement = document.getElementById('player-hand-ft');
  const playerValueElement = document.getElementById('player-value-ft');
  const hitMeButton = document.getElementById('hit-me-ft');

  const playerCardElementsecond = document.getElementById('player-card-st')
  const playerHandElementsecond = document.getElementById('player-hand-st');
  const playerValueElementsecond = document.getElementById('player-value-st');
  const hitMeButtonsecond = document.getElementById('hit-me-st');

//   deck.forEach((card) => {
//     const cardElement = document.createElement('div');
//     cardElement.classList.add('card');
//     cardElement.style.backgroundImage = `url(png/${card.value}_of_${card.suit}.png)`;
//     deckElement.appendChild(cardElement);
//   });

  // Deal two cards to the player
  dealToPlayer(1);  
  dealToPlayer(2);
  dealToPlayer(1);
  dealToPlayer(2);

  // Update player hand and value
  updatePlayerHand(1);
  updatePlayerValue(1);
  updatePlayerHand(2);
  updatePlayerValue(2);

  updateDeckCount();
  // Add event listener to hit me button
  hitMeButton.addEventListener('click', () => {
    // Deal one card to the player
    dealToPlayer(1);

    // Update player hand and value
    //updatePlayerHand();
    shownextCard(1);
    updatePlayerValue(1);
    updateDeckCount();
    checkgameover();
  });

  // Add event listener to hit me button Second
  hitMeButtonsecond.addEventListener('click', () => {
    // Deal one card to the player
    dealToPlayer(2);

    // Update player hand and value
    //updatePlayerHand();
    shownextCard(2);
    updatePlayerValue(2);
    updateDeckCount();
    checkgameover();
  });
  function dealToPlayer(Player) {
    const card = deck.shift();
    if (Player === 1){
        playerHandFt.push(card);
    }
    else 
    {
        playerHandSt.push(card);
    }
   
  } 
  function shownextCard(player){
    let hand ;
    let sendtoplayerhand;
    if (player === 1)
    {
        hand = playerHandFt;
         let lastcard=hand.length-1;
  
  const card = hand[lastcard];
  const cardElement = document.createElement('div');
  cardElement.classList.add('card');
  cardElement.style.backgroundImage = `url(png/${card.value}_of_${card.suit}.png)`;
playerHandElement.appendChild(cardElement);
//playerValueElement.innerText = playerHand.map(card =>  `${card.value} of ${card.suit}`).join(', ');
 
    }else(player === 2)
  {
    hand = playerHandSt;
    let lastcard=hand.length-1;
  
  const card = hand[lastcard];
  const cardElement = document.createElement('div');
  cardElement.classList.add('card');
  cardElement.style.backgroundImage = `url(png/${card.value}_of_${card.suit}.png)`;
playerHandElementsecond.appendChild(cardElement);
//playerValueElementsecond.innerText = playerHand.map(card =>  `${card.value} of ${card.suit}`).join(', ');
 
  }
   
       
  
  }

  function updatePlayerHand(player) {
  
     let hand ;
    if (player ===1)
    {
        hand = playerHandFt;
        playerHandElement.innerText = playerHandFt.map(card =>  `${card.value} of ${card.suit}`).join(', ');
   
  for (let i = 0; i < hand.length; i++) {
    const card = hand[i];
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');
    cardElement.style.backgroundImage = `url(png/${card.value}_of_${card.suit}.png)`;
    playerCardElement.appendChild(cardElement);
    
  }
    }
    else
  {
    hand = playerHandSt;
    playerHandElementsecond.innerText = playerHandSt.map(card =>  `${card.value} of ${card.suit}`).join(', ');
  
    for (let i = 0; i < hand.length; i++) {
    const card = hand[i];
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');
    cardElement.style.backgroundImage = `url(png/${card.value}_of_${card.suit}.png)`;
    playerCardElementsecond.appendChild(cardElement);
    
  }
  }

  
  }
  function checkgameover(){
    if (playerValue > 31) {
  // Display the modal
  const modal = document.getElementById('myModal');
  modal.style.display = 'block';
  const title = document.createElement('h1');
  title.innerText ="You Lost!";


}else if  (playerValue === 31) {
 // Display the modal
 const modal = document.getElementById('myModal');
  modal.style.display = 'block';
  const title = document.createElement('h1');
  title.innerText ="You Won!";
}
  }
  
  function updatePlayerValue(player) {

    playerValue = 0;
    let hasAce = false;
    let hand ;

    if (player ===1)
    {
        hand = playerHandFt;
        for (let card of hand) {
      if (card.value === 'ace') {
        playerValue += 11;
      }

      if (['jack', 'queen', 'king'].includes(card.value)) {
        playerValue += 10;
      } else {
        playerValue += parseInt(card.value);
      }
    }

    

    playerValueElement.innerText = `Player Value: ${playerValue}`;
    }
    else(player ===2)
  {
    hand = playerHandSt;
    for (let card of hand) {
      if (card.value === 'ace') {
        playerValue += 11;
      }

      if (['jack', 'queen', 'king'].includes(card.value)) {
        playerValue += 10;
      } else {
        playerValue += parseInt(card.value);
      }
    }

    

    playerValueElementsecond.innerText = `Player Value: ${playerValue}`;
  }

// Check if the value of the player's hand is greater than 31


   
  }

  function updateDeckCount() {
    const deckCount = deck.length;
    const deckCountElement = document.getElementById('Cards-Left');
    deckCountElement.innerText = `Cards Left in Deck: ${deckCount}`;
  //  deckElement.appendChild(deckCountElement);
  }

  updateDeckCount();

  // Get the modal element
const modal = document.getElementById('myModal');

// Get the <span> element that closes the modal
const span = document.getElementsByClassName('close')[0];

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = 'none';
}
